import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { StepFunctionRace } from './step_function_race';

const account = '000000000000';
const region = 'us-west-2';
const env = {
  account: account,
  region: region,
};

describe('LateBoundStepFunctionsStartExecution tests', () => {
  test('LateBoundStepFunctionsStartExecution works.', () => {
    const app = new App();
    const stack = new Stack(app, 'MyStack', {
      env: env,
    });

    // TODO:  Demo.  For now, just test synth.
    new StepFunctionRace(stack, 'Race', {

    });
    expect(Template.fromStack(stack)).toBeTruthy();
  });
});