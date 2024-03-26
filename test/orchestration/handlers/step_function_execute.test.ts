import { startStepFunction, stepFunctionComplete } from '../../../lib/orchestration/handlers/step_function_execute';

const mockStepFunctions = {
  startExecutionCalls: 0,
  describeExecutionCalls: 0,
  describeExecutionStatus: 'RUNNING' as string,
  startExecution: () => {
    mockStepFunctions.startExecutionCalls++;
    return Promise.resolve({
      executionArn: 'executionArn',
      startDate: new Date(Date.now()),
    });
  },
  describeExecution: () => {
    mockStepFunctions.describeExecutionCalls++;
    return Promise.resolve({
      executionArn: 'executionArn',
      status: mockStepFunctions.describeExecutionStatus,
      startDate: new Date(Date.now()),
    });
  },
};

jest.mock('@aws-sdk/client-sfn', () => {
  return {
    SFN: jest.fn(() => mockStepFunctions),
    config: {
      logger: {},
    },
  };
});

describe('step_function_execute handler tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const context = {};

  test('Call startStepFunction handler works.', async () => {
    let value = await startStepFunction({
      ResourceProperties: {
        StateMachineArn: 'stateMachineArn',
        StateMachineEvent: {
          AKey: 'aValue',
        },
      },
    }, context);

    expect(value).toMatchObject({
      PhysicalResourceId: 'executionArn',
      ExecutionArn: 'executionArn',
      IsComplete: false,
    });
    expect(mockStepFunctions.startExecutionCalls).toEqual(1);
  });

  test('Call stepFunctionComplete handler works.', async () => {
    let value = await stepFunctionComplete({
      ExecutionArn: 'executionArn',
    }, context);

    expect(value).toMatchObject({
      ExecutionArn: 'executionArn',
      IsComplete: false,
    });
    expect(mockStepFunctions.describeExecutionCalls).toEqual(1);
  });
});
