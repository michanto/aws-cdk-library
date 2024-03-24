import { App, Aspects, Stack } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { ServiceInspectorAspect, TreeInspectable } from '../../src';

describe('ServiceInspectorAspect tests', () => {
  it('Can be applied to a tree.', () => {
    let app = new App();
    let stack = new Stack(app, 'MyStack');
    let bucket = new Bucket(stack, 'MyBucket');
    let aspect = new ServiceInspectorAspect();
    Aspects.of(app).add(aspect);
    app.node.findAll().forEach(x => aspect.visit(x));
    expect(Object.keys(TreeInspectable.of(bucket).attributes).length).toEqual(4);
  });
});
