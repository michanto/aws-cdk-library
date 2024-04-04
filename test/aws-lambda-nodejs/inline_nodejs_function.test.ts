import { Stack, TreeInspector } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Construct } from 'constructs';
import { InlineNodejsFunction, InlineNodejsFunctionProps, MinifyEngine } from '../../src';

describe('InlineNodeJsFunction tests', () => {
  class MyInlineFunction extends InlineNodejsFunction {
    constructor(scope: Construct, id: string, props?: Partial<InlineNodejsFunctionProps>) {
      super(scope, id, {
        entry: `${__dirname}/test_lambda.js`,
        ...props,
      });
    }
  }

  test('InlineNodejsFunction added', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    new MyInlineFunction(stack, 'MyInlineFunction');

    // THEN
    let template = JSON.parse(JSON.stringify(Template.fromStack(stack)));
    expect(template).toMatchObject({
      Resources: {
        MyInlineFunction9974A7D0: {
          Type: 'AWS::Lambda::Function',
          Properties: {
            Code: {
              ZipFile: expect.stringContaining('handler'),
            },
            Role: {
            },
            Handler: 'index.handler',
            Runtime: 'nodejs18.x',
          },
        },
      },
    });
  });

  test('InlineNodejsFunction handler specified with "."', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    new MyInlineFunction(stack, 'MyInlineFunction', {
      handler: 'index.handler',
    });

    // THEN
    let template = JSON.parse(JSON.stringify(Template.fromStack(stack)));
    expect(template).toMatchObject({
      Resources: {
        MyInlineFunction9974A7D0: {
          Type: 'AWS::Lambda::Function',
          Properties: {
            Code: {
              ZipFile: expect.stringContaining('handler'),
            },
            Role: {
            },
            Handler: 'index.handler',
            Runtime: 'nodejs18.x',
          },
        },
      },
    });
  });

  test('InlineNodejsFunction handler specified without "."', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    new MyInlineFunction(stack, 'MyInlineFunction', {
      handler: 'handler',
    });

    // THEN
    let template = JSON.parse(JSON.stringify(Template.fromStack(stack)));
    expect(template).toMatchObject({
      Resources: {
        MyInlineFunction9974A7D0: {
          Type: 'AWS::Lambda::Function',
          Properties: {
            Code: {
              ZipFile: expect.stringContaining('handler'),
            },
            Role: {
            },
            Handler: 'index.handler',
            Runtime: 'nodejs18.x',
          },
        },
      },
    });
  });

  test.each([
    undefined,
    MinifyEngine.ES_BUILD,
    MinifyEngine.SIMPLE,
    MinifyEngine.NONE,
  ])('InlineNodejsFunction all minify', (engine) => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    let fn = new MyInlineFunction(stack, 'MyInlineFunction', {
      minifyEngine: engine,
    });

    // THEN
    let inspector = new TreeInspector();
    fn.inspect(inspector);
    if (engine == MinifyEngine.NONE) {
      expect(inspector.attributes[InlineNodejsFunction.TMP_FILE_ATTRIBUTE_NAME]).toBeUndefined();
    } else {
      expect(inspector.attributes[InlineNodejsFunction.TMP_FILE_ATTRIBUTE_NAME]).toContain('-test_lambda.js');
    }

    let template = JSON.parse(JSON.stringify(Template.fromStack(stack)));
    expect(template).toMatchObject({
      Resources: {
        MyInlineFunction9974A7D0: {
          Type: 'AWS::Lambda::Function',
          Properties: {
            Code: {
              ZipFile: expect.stringContaining('handler'),
            },
            Role: {
            },
            Handler: 'index.handler',
            Runtime: 'nodejs18.x',
          },
        },
      },
    });
  });

  test('InlineNodejsFunction no esbuild', () => {
    // GIVEN
    const stack = new Stack();

    // WHEN
    jest.mock('esbuild', () => {
      throw new Error();
    });

    // THEN
    expect(() => new MyInlineFunction(stack, 'MyInlineFunction', {
      minifyEngine: MinifyEngine.ES_BUILD,
    })).toThrow();
  });

});
