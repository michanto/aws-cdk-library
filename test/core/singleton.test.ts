import { Stack } from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { Singleton } from '../../src';

describe('Singleton tests', () => {
  test('Creates a singleton.', () => {
    let stack = new Stack();
    let construct = new Construct(stack, 'AConstruct');
    let fn = Singleton.create(construct, 'Function', (s, id) => new Function(s, id, {
      code: Code.fromInline('bad code'),
      handler: 'handler',
      runtime: Runtime.NODEJS_18_X,
    })) as Function;
    expect(fn).toBeTruthy();
    expect(Singleton.isSingleton(fn)).toBeTruthy();
    expect(Stack.isStack(fn.node.scope)).toBeTruthy();
  });

  test('Marked singleton is a singleton.', () => {
    let stack = new Stack();
    let fn = new Function(stack, 'Function', {
      code: Code.fromInline('bad code'),
      handler: 'handler',
      runtime: Runtime.NODEJS_18_X,
    });
    expect(fn).toBeTruthy();
    expect(Singleton.isSingleton(fn)).toBeFalsy();
    Singleton.mark(fn);
    expect(Singleton.isSingleton(fn)).toBeTruthy();
    let fn2 = Singleton.create(stack, 'Function', (s, id) => new Function(s, id, {
      code: Code.fromInline('bad code'),
      handler: 'handler',
      runtime: Runtime.NODEJS_18_X,
    })) as Function;
    expect(fn2).toBe(fn);
  });
});
