import { Duration } from 'aws-cdk-lib';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { IStateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { StepFunctionTaskStep, StepFunctionTaskStepConstants } from './step_function_task_step';

/**
 */
export interface StepFunctionTaskProps {
  /**
   * The state machine to execute.
   */
  readonly stateMachine: IStateMachine;
  /**
   * The event to start the state machine with.
   * Should only be provided with stateMachine, not with stateMachineExecutionArn.
   */
  readonly inputEvent?: any;
  /**
   * Prefix for the execution.
   */
  readonly prefix?: string;
  /**
   * Total timeout for the entire operation.
   *
   * The maximum timeout is unknown, but less than 500 hours (yes, it can
   * exceed the AWS Lambda 15 minutes)
   *
   * @default Duration.hours(2)
   */
  readonly totalTimeout?: Duration;

  /**
   * Role for execution and monitoring.  Must have permission to execute and describe the state machine,
   * as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```.
   *
   * If not provided, a role will be created.
   */
  readonly role?: IRole;
}

/**
 * This class creates multiple StepFunctionTaskStep resources to
 * monitor the execution of a long-running step function.
 *
 * The first StepFunctionTaskStep is created with the StateMachine
 * ARN and input so it can start the step function.  This resource
 * sets it's physical ID to the ExecutionArn.
 *
 * Subsequent StepFunctionTaskStep resources are created with
 * the ExecutionArn so they can continue monitoring the StepFunction.
 *
 * Once the StepFunction has finished running, subsequent
 * StepFunctionTaskStep resources (if any) will fast-succeed.
 * If the StepFunction fails, the subsequent StepFunctionTaskStep
 * resources will fast-fail.
 */
export class StepFunctionTask extends Construct {
  /**
   * Execution role.
   */
  readonly role: IRole;

  /**
   * Total number of StepFunctionTaskStep resources created.
   */
  readonly numberOfSteps: number;

  constructor(scope: Construct, id: string, props: StepFunctionTaskProps) {
    super(scope, id);

    // First we need to calculate the number of resources we need to create.
    // That will be props.totalTimeout / timeout.
    let totalTimeoutMs = props.totalTimeout?.toMilliseconds() ??
      Duration.hours(2).toMilliseconds();
    let timeoutMs = StepFunctionTaskStepConstants.SUCCEED_AFTER_MS.toMilliseconds();
    // At least 2 steps.  At most?  The CloudFormation resource limit will
    // decide that.
    this.numberOfSteps = Math.max(2, Math.ceil(totalTimeoutMs / timeoutMs));

    let startExecution = new StepFunctionTaskStep(this, 'RunIt', {
      succeedAfterMs: timeoutMs,
      stateMachine: props.stateMachine,
      inputEvent: props.inputEvent,
      prefix: props.prefix,
      role: props.role,
    });

    // Ensure we use the same role for all steps.
    this.role = startExecution.resources.role;

    let previousStep = startExecution;
    for (let index = 1; index < this.numberOfSteps; index++) {
      // Fail the last resource on timeout.
      // All other resources should succeed after a set number of MS if the
      // Step function is still executing.
      let failOnResourceTimeout = (index == this.numberOfSteps -1);
      let waitForIt = new StepFunctionTaskStep(this, `WaitForIt${index}`, {
        succeedAfterMs:
          failOnResourceTimeout ? undefined : timeoutMs*(index+1),
        suffix: `${index}`,
        executionArn: startExecution.ref,
        role: this.role,
      });
      // Dependencies will ensure monitoring is done one resource
      // at a time.
      waitForIt.node.addDependency(previousStep);
      previousStep = waitForIt;
    }
  }
}
