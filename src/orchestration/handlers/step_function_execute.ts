import { randomUUID } from 'crypto';
import { SFN, StartExecutionCommandInput } from '@aws-sdk/client-sfn';
const logger = process.env.LogLevel ? console : undefined;

function log(message: Record<string, any>) {
  if (process.env.LogLevel) {
    console.log(JSON.stringify(message));
  }
}

export const startStepFunction = async (event: any, context: any) => {
  log({ Event: event });
  log({ Context: context });

  if (event.RequestType == 'Delete') {
    return Promise.resolve({
      IsComplete: true,
    });
  }

  // If the properties were encoded, decode them now.
  if ('EncodedProperties' in event.ResourceProperties) {
    event.ResourceProperties = JSON.parse(Buffer
      .from(event.ResourceProperties.EncodedProperties, 'base64')
      .toString('utf8'));
    log({ DecodedEvent: JSON.stringify(event) });
  }

  let stepFunction = new SFN({
    logger: logger,
  });
  let stateMachineArn = event.ResourceProperties.StateMachineArn;
  let executionArn = event.ResourceProperties.ExecutionArn;
  let stateMachineEvent = event.ResourceProperties.StateMachineEvent;
  let succeedAfterMs = event.ResourceProperties.SucceedAfterMs;

  if (stateMachineArn) {
    let prefix = event.ResourceProperties.Prefix;
    let request: StartExecutionCommandInput = {
      stateMachineArn: stateMachineArn,
      input: JSON.stringify(stateMachineEvent),
    };
    if (prefix) {
      request.name = `${prefix}_${randomUUID()}`;
    }
    let result = await stepFunction.startExecution(request);
    return Promise.resolve({
      PhysicalResourceId: result.executionArn!,
      ExecutionArn: result.executionArn!,
      StartDate: result.startDate!,
      SucceedAfterMs: succeedAfterMs,
      IsComplete: false,
    });
  } else if (executionArn) {
    let suffix = event.ResourceProperties.Suffix;
    let result = await stepFunction.describeExecution({
      executionArn: executionArn,
    });
    let physicalResourceId = `${result.executionArn}.${suffix}`;
    return Promise.resolve({
      PhysicalResourceId: physicalResourceId,
      ExecutionArn: result.executionArn!,
      StartDate: result.startDate!,
      SucceedAfterMs: succeedAfterMs,
      IsComplete: false,
    });
  }

  return Promise.reject({
    Reason: 'One of StateMachineArn or ExecutionArn must be specified.',
  });
};

export const stepFunctionComplete = async (event: any, context: any) => {
  log({ Event: event });
  log({ Context: context });

  if (event.RequestType == 'Delete') {
    return Promise.resolve({
      IsComplete: true,
    });
  }
  let stepFunction = new SFN({
    logger: logger,
  });

  let result = await stepFunction.describeExecution({
    executionArn: event.ExecutionArn,
  });
  let continueStates = ['RUNNING'];
  let succeededStates = ['SUCCEEDED'];
  let failedStates = ['FAILED', 'TIMED_OUT', 'ABORTED'];
  if (failedStates.includes(result.status!)) {
    throw new Error(`Operation failed: ${result.status}.`);
  }
  let isComplete = succeededStates.includes(result.status!);
  if (!isComplete && !continueStates.includes(result.status!)) {
    throw new Error(`Unknown state: ${result.status}.`);
  }

  let now = Date.now();
  log({ Now: now, StartDate: result.startDate!.getTime() });
  let succeedAfterMs = event.SucceedAfterMs;
  // If we hit the succeedAfterMs duration, succeed the resource.
  // Otherwise the resource may fail due to timeout.
  if (!isComplete && succeedAfterMs && (now - result.startDate!.getTime()) > succeedAfterMs) {
    log({ Message: 'Timed out.  Complete regardless of StepFunction state.' });
    isComplete = true;
  } else {
    log({ IsComplete: isComplete });
  }

  return Promise.resolve({
    ExecutionArn: event.ExecutionArn,
    StartDate: event.StartDate,
    SucceedAfterMs: succeedAfterMs,
    IsComplete: isComplete,
  });
};
