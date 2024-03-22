import { App, Stack } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct, IConstruct } from 'constructs';
import { ConstructRunTimeTypeInfo, ConstructTreeSearch } from '../../src';
import { NAMESPACE } from '../../src/core/private/internals';

/** A construct with RTTI for testing. */
export class TypedConstruct extends Construct {
  static readonly TREE_INSPECTABLE_SERVICE = new ConstructRunTimeTypeInfo({
    servicePropertyName: `${NAMESPACE}.TreeInspectable`,
  });

  static isTypedConstruct(x: IConstruct): x is TypedConstruct {
    return TypedConstruct.TREE_INSPECTABLE_SERVICE.hasRtti(x);
  }

  constructor(scope: Construct, id: string) {
    super(scope, id);
    TypedConstruct.TREE_INSPECTABLE_SERVICE.addRtti(this);
  }
}

describe('Construct RTTI tests', () => {
  it('Finds constructs using all methods.', () => {
    let app = new App();
    let typedScope1 = new TypedConstruct(app, 'One');

    let stack1 = new Stack(app, 'TestStack');
    let typedScope2 = new TypedConstruct(stack1, 'Two');
    let bucket = new Bucket(typedScope2, 'Bucket');

    expect(TypedConstruct.isTypedConstruct(app)).toBeFalsy();
    expect(TypedConstruct.isTypedConstruct(bucket)).toBeFalsy();
    expect(TypedConstruct.isTypedConstruct(typedScope1)).toBeTruthy();
    expect(TypedConstruct.isTypedConstruct(typedScope2)).toBeTruthy();

    let search = ConstructTreeSearch.for(TypedConstruct.isTypedConstruct);
    expect(search.searchDown(app).length).toBe(2);
    expect(search.searchDown(app, Stack.isStack).length).toBe(1);
    expect(search.searchUp(bucket, Stack.isStack)).toBe(typedScope2);
    expect(search.searchSelf(typedScope2)).toBeTruthy();
  });
});
