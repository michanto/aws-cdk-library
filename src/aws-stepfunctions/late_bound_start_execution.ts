import { Aws } from 'aws-cdk-lib';
import { FieldUtils, IntegrationPattern, JsonPath, StateMachine, TaskInput, TaskStateBaseProps } from 'aws-cdk-lib/aws-stepfunctions';
import { StepFunctionsStartExecution } from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { Construct } from 'constructs';

const resourceArnSuffix: Record<IntegrationPattern, string> = {
  [IntegrationPattern.REQUEST_RESPONSE]: '',
  [IntegrationPattern.RUN_JOB]: '.sync',
  [IntegrationPattern.WAIT_FOR_TASK_TOKEN]: '.waitForTaskToken',
};

function integrationResourceArn(service: string, api: string, integrationPattern?: IntegrationPattern): string {
  return `arn:${Aws.PARTITION}:states:::${service}:${api}${
    (integrationPattern ? resourceArnSuffix[integrationPattern] : '')
  }`;
}

/**
 * Properties for LateBoundStepFunctionsStartExecution
 */
export interface LateBoundStepFunctionsStartExecutionProps extends TaskStateBaseProps {
  /**
   * Where in the event the arn of the stateMachine to call is stored.
   * @default "$.stateMachineArn"
   */
  readonly stateMachineArnPath?: string;
  /**
   * The JSON input for the execution, same as that of StartExecution.
   *
   * @default - The state input (JSON path '$')
   * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html
   * @stability stable
   */
  readonly input?: TaskInput;
  /**
    * The name of the execution, same as that of StartExecution.
    *
    * @default - None
    * @see https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html
    * @stability stable
    */
  readonly name?: string;
  /**
    * Pass the execution ID from the context object to the execution input.
    *
    * This allows the Step Functions UI to link child executions from parent executions, making it easier to trace execution flow across state machines.
    *
    * If you set this property to `true`, the `input` property must be an object (provided by `TaskInput.fromObject`) or omitted entirely.
    *
    * @default - false
    * @see https://docs.aws.amazon.com/step-functions/latest/dg/concepts-nested-workflows.html#nested-execution-startid
    * @stability stable
    */
  readonly associateWithParent?: boolean;
}

/**
 * Class for StepFunction wrappers.
 * Use it to add pre- or post-processing to a StepFunction.
 *
 * Runs the state machine specified by input field "$.stateMachineArn".
 */
export class LateBoundStepFunctionsStartExecution extends StepFunctionsStartExecution {
  constructor(scope: Construct, id: string, props: LateBoundStepFunctionsStartExecutionProps) {
    super(scope, id, {
      stateMachine: StateMachine.fromStateMachineArn(scope, 'NestedWorkflowStateMachine', `arn:${
        Aws.PARTITION}:states:${Aws.REGION}:${Aws.ACCOUNT_ID}:stateMachine:*`),
      integrationPattern: IntegrationPattern.RUN_JOB,
      ...props,
    });
  }

  /**
     * @internal
     */
  protected _renderTask(): any {
    let props = (this as any).props as LateBoundStepFunctionsStartExecutionProps;
    let integrationPattern = (this as any).integrationPattern;
    // suffix of ':2' indicates that the output of the nested state machine should be JSON
    // suffix is only applicable when waiting for a nested state machine to complete (RUN_JOB)
    // https://docs.aws.amazon.com/step-functions/latest/dg/connect-stepfunctions.html
    const suffix = integrationPattern === IntegrationPattern.RUN_JOB ? ':2' : '';
    let input: any;
    if (props.associateWithParent) {
      const associateWithParentEntry = {
        AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID: JsonPath.stringAt('$$.Execution.Id'),
      };
      input = props.input ? { ...props.input.value, ...associateWithParentEntry } : associateWithParentEntry;
    } else {
      input = props.input ? props.input.value : TaskInput.fromJsonPathAt('$').value;
    }

    let stateMachineArnPath = props.stateMachineArnPath ?? '$.stateMachineArn';

    return {
      Resource: `${
        integrationResourceArn('states', 'startExecution', integrationPattern)}${
        suffix
      }`,
      Parameters: FieldUtils.renderObject({
        Input: input,
        StateMachineArn: JsonPath.stringAt(stateMachineArnPath),
        Name: props.name,
      }),
    };
  }
}
