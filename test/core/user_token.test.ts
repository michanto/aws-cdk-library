import { App, CustomResource, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { AppToken, Singleton, StackToken } from '../../src';

describe('UserToken tests', () => {
  test('StackToken happy path.', () => {
    // GIVEN
    const stack = new Stack();
    let bucket = new Bucket(stack, 'Bucket', {
      bucketName: StackToken.string(stack, 'bucketName'),
    });

    let fn = Singleton.create(stack, 'Function', (s, id) => new Function(s, id, {
      code: Code.fromInline('bad code'),
      handler: 'handler',
      runtime: Runtime.NODEJS_18_X,
    })) as Function;

    new CustomResource(stack, 'CustomResource', {
      serviceToken: fn.functionArn,
      properties: {
        bucketName: StackToken.string(bucket, 'bucketName'),
        pojo: StackToken.any(bucket, 'pojo'),
        list: StackToken.list(bucket, 'list'),
        aNumber: StackToken.number(bucket, 'aNumber'),
      },
      pascalCaseProperties: true,
    });

    StackToken.resolveString(stack, 'bucketName', { produce: () => 'my_bucket' });
    StackToken.resolveAny(stack, 'pojo', {
      produce: () => {
        // Note:  does not work without the 'return'.
        return { value: 'any' };
      },
    });
    StackToken.resolveList(stack, 'list', { produce: () => ['one', 'two', 'three'] });
    StackToken.resolveNumber(stack, 'aNumber', { produce: () => 10 });

    // WHEN
    const template = Template.fromStack(stack);

    // THEN
    template.templateMatches({
      Resources: {
        Bucket83908E77: {
          Type: 'AWS::S3::Bucket',
          Properties: {
            BucketName: 'my_bucket',
          },
        },
        CustomResource: {
          Properties: {
            BucketName: 'my_bucket',
            Pojo: { value: 'any' },
            List: ['one', 'two', 'three'],
            ANumber: 10,
          },
        },
      },
    });
  });

  test('AppToken create in stack 1, resolve in stack 2.', () => {
    // GIVEN
    const app = new App();
    const stack1 = new Stack(app, 'Stack1');
    let fn = new Function(stack1, 'Function', {
      code: Code.fromInline('bad code'),
      handler: 'handler',
      runtime: Runtime.NODEJS_18_X,
    });
    new Bucket(stack1, 'Bucket', {
      bucketName: AppToken.string(stack1, 'bucketName'),
    });
    new CustomResource(stack1, 'CustomResource', {
      serviceToken: fn.functionArn,
      properties: {
        bucketName: AppToken.string(stack1, 'bucketName'),
        pojo: AppToken.any(stack1, 'pojo'),
        list: AppToken.list(stack1, 'list'),
        aNumber: AppToken.number(stack1, 'aNumber'),
      },
      pascalCaseProperties: true,
    });
    const stack2 = new Stack(app, 'Stack2');
    AppToken.resolveString(stack2, 'bucketName', { produce: () => 'my_bucket' });

    AppToken.resolveAny(stack2, 'pojo', {
      produce: () => {
        // Note:  does not work without the 'return'.
        return { value: 'any' };
      },
    });
    AppToken.resolveList(stack2, 'list', { produce: () => ['one', 'two', 'three'] });
    AppToken.resolveNumber(stack2, 'aNumber', { produce: () => 10 });

    // WHEN
    const template = Template.fromStack(stack1);

    // THEN
    template.templateMatches({
      Resources: {
        Bucket83908E77: {
          Type: 'AWS::S3::Bucket',
          Properties: {
            BucketName: 'my_bucket',
          },
        },
        CustomResource: {
          Properties: {
            BucketName: 'my_bucket',
            Pojo: { value: 'any' },
            List: ['one', 'two', 'three'],
            ANumber: 10,
          },
        },
      },
    });
  });
});
