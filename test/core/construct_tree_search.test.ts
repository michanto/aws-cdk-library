import { App, CfnResource, Resource, Stack } from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { ConstructTreeSearch } from '../../src';

describe('ConstructTreeSearch tests', () => {
  it('Finds constructs using all methods.', () => {
    let app = new App();

    let stack1 = new Stack(app, 'TestStack');
    let bucket1 = new Bucket(stack1, 'TestBucket');
    let stack2 = new Stack(app, 'TestStack2');
    let stack3 = new Stack(app, 'TestStack3');
    let cfnBucket2 = new CfnBucket(stack2, 'TestBucket');
    let stackSearch = new ConstructTreeSearch(x => Stack.isStack(x) ? x : undefined);
    let l1seearch = new ConstructTreeSearch(x => CfnResource.isCfnResource(x) ? x : undefined);
    let l2seearch = new ConstructTreeSearch(x => Resource.isResource(x) ? x : undefined);
    let stackSearchFor = ConstructTreeSearch.for(Stack.isStack);

    // Find stacks
    expect(stackSearch.searchSelf(stack1)).toBeTruthy();
    expect(stackSearch.searchSelf(bucket1)).toBeFalsy();
    expect(stackSearch.searchUp(bucket1)).toBeTruthy();
    expect(stackSearch.searchDown(app).length).toEqual(3);
    expect(stackSearchFor.searchDown(app).length).toEqual(3);

    // Find L1 constructs
    expect(l1seearch.searchDown(app).length).toEqual(2);
    expect(l1seearch.searchDown(stack1).length).toEqual(1);
    expect(l1seearch.searchDown(stack2).length).toEqual(1);
    expect(l1seearch.searchDown(stack3).length).toEqual(0);
    expect(l1seearch.searchSelf(bucket1)).toBeFalsy();
    expect(l1seearch.searchSelf(cfnBucket2)).toBeTruthy();

    // Find L2 constructs
    expect(l2seearch.searchDown(app).length).toEqual(1);
    expect(l2seearch.searchDown(stack1).length).toEqual(1);
    expect(l2seearch.searchDown(stack2).length).toEqual(0);
    expect(l2seearch.searchDown(stack3).length).toEqual(0);
    expect(l2seearch.searchSelf(bucket1)).toBeTruthy();
    expect(l2seearch.searchSelf(cfnBucket2)).toBeFalsy();

    // Find with StopCondition.

    // Find all L1's without a parent L2 (note:  Could have a child L2).
    expect(l1seearch.searchDown(app, Resource.isResource).length).toEqual(1);
    expect(l1seearch.searchDown(stack1, Resource.isResource).length).toEqual(0);
    expect(l1seearch.searchDown(stack2, Resource.isResource).length).toEqual(1);
    // Search up from the L1 bucket for a stack, but stop if there is an L2.
    expect(stackSearch.searchUp(bucket1.node.defaultChild!, Resource.isResource)).toBeFalsy();
    expect(stackSearch.searchUp(cfnBucket2, Resource.isResource)).toBeTruthy();
  });
});
