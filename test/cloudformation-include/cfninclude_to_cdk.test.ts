import { Fn, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CfnFunction, Function } from 'aws-cdk-lib/aws-lambda';
import { Bucket, CfnBucket, EventType } from 'aws-cdk-lib/aws-s3';
import { LambdaDestination } from 'aws-cdk-lib/aws-s3-notifications';
import { CfnInclude } from 'aws-cdk-lib/cloudformation-include';
import { Construct } from 'constructs';
import { CfnIncludeToCdk } from '../../src';


describe('CfnIncludeToCdk tests', () => {
  test('CfnIncludeToCdk happy path', () => {
    const stack = new Stack();
    new CfnInclude(stack, 'included', {
      templateFile: `${__dirname}/S3_LambdaTrigger.yaml`,
    });

    let bucket = new Bucket(stack, 'S3BucketNotification', {
      bucketName: Fn.sub('NotificationBucket'),
    });
    let cfnFunction = CfnIncludeToCdk.findIncluded('S3TriggerLambdaFunction', stack) as CfnFunction;
    let fn = Function.fromFunctionArn(stack, 'S3TriggerLambdaFunction', cfnFunction.attrArn);
    bucket.addEventNotification(EventType.OBJECT_CREATED_PUT, new LambdaDestination(fn));

    CfnIncludeToCdk.replaceIncluded('S3BucketNotification', bucket);
    let template = JSON.parse(JSON.stringify(Template.fromStack(stack)));
    expect(template).toMatchObject({
      Resources: {
        S3BucketNotification: {
          Type: 'AWS::S3::Bucket',
          Properties: {
            BucketName: { 'Fn::Sub': 'NotificationBucket' },
          },
        },
      },
    });
  });
  test('CfnIncludeToCdk increase coverage', () => {
    expect(CfnIncludeToCdk.isCfnInclude(undefined)).toBeFalsy();
  });
  test('CfnIncludeToCdk setLogicalId L1', () => {
    const stack = new Stack();
    const scope = new Construct(stack, 'Construct');
    let bucket = new CfnBucket(scope, 'MyBucket');
    CfnIncludeToCdk.setLogicalId(bucket, 'MyBucket');
    let template = JSON.parse(JSON.stringify(Template.fromStack(stack)));
    expect(template).toMatchObject({
      Resources: {
        MyBucket: {
          Type: 'AWS::S3::Bucket',
        },
      },
    });
  });
  test('CfnIncludeToCdk setLogicalId L2', () => {
    const stack = new Stack();
    const scope = new Construct(stack, 'Construct');
    let bucket = new Bucket(scope, 'MyBucket');
    CfnIncludeToCdk.setLogicalId(bucket, 'MyBucket');
    let template = JSON.parse(JSON.stringify(Template.fromStack(stack)));
    expect(template).toMatchObject({
      Resources: {
        MyBucket: {
          Type: 'AWS::S3::Bucket',
        },
      },
    });
  });
  test('CfnIncludeToCdk setLogicalId L3', () => {
    const stack = new Stack();
    const scope = new Construct(stack, 'Construct');
    new Bucket(scope, 'MyBucket');
    CfnIncludeToCdk.setLogicalId(scope, 'MyBucket');
    let template = JSON.parse(JSON.stringify(Template.fromStack(stack)));
    expect(template).toMatchObject({
      Resources: {
        MyBucket: {
          Type: 'AWS::S3::Bucket',
        },
      },
    });
  });
  test('CfnIncludeToCdk setLogicalId two L1', () => {
    const stack = new Stack();
    const scope = new Construct(stack, 'Construct');
    new CfnBucket(scope, 'MyBucket');
    new CfnBucket(scope, 'MyOtherBucket');
    expect(() => CfnIncludeToCdk.setLogicalId(scope, 'MyBucket')).toThrow();
  });
});
