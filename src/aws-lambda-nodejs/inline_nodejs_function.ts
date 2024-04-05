/* eslint @typescript-eslint/no-require-imports: "off" */

import crypto = require('crypto')
import fs = require('fs');
import { FeatureFlags, FileSystem, IInspectable, TreeInspector } from 'aws-cdk-lib';
import { Code, Function, FunctionOptions, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LAMBDA_NODEJS_USE_LATEST_RUNTIME } from 'aws-cdk-lib/cx-api';
import { Construct } from 'constructs';
import { NAMESPACE } from '../core/private/internals';

/**
 * Trims lines from inline JS
 *
 * @param code
 */
function trimLines(code: string) {
  return code.split('\n').map(x => x.trim()).join('\n');
}

/**
 * Strips comments from inline JS
 *
 * From: https://stackoverflow.com/questions/5989315/regex-for-match-replacing-javascript-comments-both-multiline-and-inline
 * See: https://gist.github.com/DesignByOnyx/05c2241affc9dc498379e0d819c4d756
 *
 * @param code
 */
function stripComments(code: string) {
  return code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1').trim();
}

/**
 * Returns a new directory under tmp folder.
 */
const minifiedOutDir = (function () {
  let _minifiedOutDir: string | undefined = undefined;
  return function () {
    if (!_minifiedOutDir) {
      _minifiedOutDir = FileSystem.mkdtemp('minified-');
    }
    return _minifiedOutDir;
  };
})();

/**
 * Returns the minified code temporary file for the construct.
 * @param constructPath Path to construct (construct.node.path).
 * @param entry Javascript file path.
 */
function getMinifiedTmpFile(constructPath: string, entry: string) {
  let fileName = function (str: string) {
    return str.split('\\').pop()!.split('/').pop()!;
  }(entry);
  // Good enough for git, good enough here.
  let hash = crypto
    .createHash('sha1')
    .update(constructPath)
    .digest('hex')
    .substring(0, 8);

  return `${minifiedOutDir()}/${hash}-${fileName}`;
}

/**
 * Trims whitespace and removes comments.
 * @param constructPath Path to construct (construct.node.path).
 * @param entry Javascript file path.
 */
function getSimpleMinification(entry: string) {
  return trimLines(stripComments(fs.readFileSync(entry, { encoding: 'utf-8' })));
}

/**
 * EsBuild minifier.
 * @param constructPath Path to construct (construct.node.path).
 * @param entry Javascript file path.
 * @returns Minified code.
 */
function getInlineCodeEsBuild(entry: string) {
  let esBuild: any;
  try {
    esBuild = require('esbuild');
  } catch (e) {
    throw new Error('esbuild must be installed to use Minification.ES_BUILD (the default).  ' +
    'Add esbuild to your package.json file or switch your InlineNodejsFunction to ' +
    'MinifyEngine.SIMPLE or MinifyEngine.NONE');
  }
  let code = esBuild.transformSync(fs.readFileSync(entry, { encoding: 'utf-8' }), {
    minify: true,
  }).code;

  return code as string;
}

/**
 * Returns a minified version of the javascript generated by the lambdas.
 *
 * This allows one to add generous comments to the lambda typescript code,
 * and still deploy it as inline-code.
 *
 * @param constructPath Path to construct (construct.node.path).
 * @param entry Javascript file path.
 * @param minifyEngine Which minification engine to use.
 */
function getInlineCode(constructPath: string, entry: string, minifyEngine: MinifyEngine): string {
  let inlineCode: string | undefined;

  if (!inlineCode && minifyEngine == MinifyEngine.ES_BUILD) {
    inlineCode = getInlineCodeEsBuild(entry);
  }
  if (!inlineCode && minifyEngine == MinifyEngine.SIMPLE) {
    inlineCode = getSimpleMinification(entry);
  }

  if (!inlineCode) {
    inlineCode = fs.readFileSync(entry, { encoding: 'utf-8' });
  }
  if (inlineCode) {
    // Write the minified code to a tmp file so the user can copy it into the console easily.
    let tmpFile = getMinifiedTmpFile(constructPath, entry);
    fs.writeFileSync(tmpFile, inlineCode, { encoding: 'utf-8' });
  }
  return inlineCode;
}

/**
 * Copied from aws-cdk NodejsFunction class.
 * Check if the feature flag is enabled and default to NODEJS_LATEST if so.
 * Otherwise default to NODEJS_18_X.
 */
function getRuntime(scope: Construct, props: InlineNodejsFunctionProps): Runtime {
  const defaultRuntime = FeatureFlags.of(scope).isEnabled(LAMBDA_NODEJS_USE_LATEST_RUNTIME)
    ? Runtime.NODEJS_LATEST
    : Runtime.NODEJS_18_X;
  return props.runtime ?? defaultRuntime;
}


/**
 * Minification engine enum.
 *
 * The default minification engine is SIMPLE.
 */
export enum MinifyEngine {
  /** No minification. */
  NONE = 0,
  /**
   * Uses esbuild for minification.
   * Add the following to your package.json file:
   * ```
   * "esbuild": "^0.18.6"
   * ```
   */
  ES_BUILD = 1,
  /**
   * Removes comments and trims leading/trailing spaces from lines.
   *
   * The advantages of SIMPLE minification are readability and simplicity - your line breaks
   * and variable names are preserved, and you do not need
   * to take a dependency on esbuild.
   *
   * Unlike ES_BUILD, SIMPLE minification does NOT use a parser.  It uses a RegEx to
   * remove comments.  There are limits to this technique, and they are fully described
   * in this gist file: https://gist.github.com/DesignByOnyx/05c2241affc9dc498379e0d819c4d756.
   *
   * In short:
   *  - Comments in a string, such as:
   * ```
   * let baz = "There's no way to tell that this // is not a single line comment";
   * ```
   *  - glob patterns (\/**\/)
   *  - Dangling property values:
   * ```
   * bar:// regex cannot distinguish "bar://" from "http://"
   *   "the value for bar is dangling down here - this is valid"
   * ```
   *
   * If your code falls under one of these categories, modify the code or switch to ES_BUILD
   * minification, which handles these cases correctly.
   */
  SIMPLE = 2
}

/**
 * Properties for an InlineNodejsFunction.
 */
export interface InlineNodejsFunctionProps extends FunctionOptions {
  /**
   * Path to the entry file (JavaScript only).
   *
   * If you are using typescript, just pass the path to the compiled .js file.
   *
   * To support unit testing your constructs, it is best to pass a relative path to the code, such as:
   * ```
   * `${__dirname}/../../../dist/lib/constructs/handlers/my_handler.js`
   * ```
   * Otherwise the unit tests may not be able to find the javascript file.
   */
  readonly entry: string;

  /**
   * The name of the exported handler in the entry file.
   *
   * The handler is prefixed with `index.` unless the specified handler value contains a `.`,
   * in which case it is used as-is.
   *
   * @default index.handler
   */
  readonly handler?: string;

  /**
   * The runtime environment. Only runtimes of the Node.js family are
   * supported.
   *
   * @default Runtime.NODEJS_18_X
   */
  readonly runtime?: Runtime;

  /**
    * Default is "SIMPLE".  See {@link MinifyEngine} for values.
    */
  readonly minifyEngine?: MinifyEngine;

  /**
   * Whether to automatically reuse TCP connections when working with the AWS
   * SDK for JavaScript.
   *
   * This sets the `AWS_NODEJS_CONNECTION_REUSE_ENABLED` environment variable
   * to `1`.
   *
   * @see https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-reusing-connections.html
   *
   * @default true
   */
  readonly awsSdkConnectionReuse?: boolean;
}

/**
 * Inline code version of NodejsFunction.  Write Lambda code in the CDK package,
 * in either JavaScript or TypeScript.
 *
 * Creates a Lambda from a single JavaScript file included in your package.
 * Pass a file like to the js file from the dist/output directory as
 * {@link InlineNodejsFunctionProps.entry}.
 *
 * Inline Lambda runs only with the code in the .js entry file provided and the
 * AWS Lambda NodeJS runtime.  Thus while the entry file can export functions and
 * types to the rest of your CDK package, it cannot import anything
 * not available in the Lambda runtime.  The Lambda runtime includes the base Node library
 * (such as https://nodejs.org/docs/latest-v18.x/api/), along with aws-sdk and/or @aws-sdk
 * (see https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html).
 * If you require any additional bundling, use NodejsFunction, which supports the full
 * suite of esbuild options.
 *
 * This class minifies your JavaScript code, so you can feel free to add comments
 * and proper variables names in your inline code.  They will be stripped away,
 * depending on which minification engine you use (See {@link MinifyEngine}).
 * See {@link MinifyEngine.SIMPLE} for a note on the limitations of RegEx comment removal.
 *
 * It's amazing how much can be accomplished using small, inline TypeScript Lambdas.
 * Typical use cases:  StepFunction lambdas.  Provider-based Custom Resource handlers.
 *
 * Code size is limited by AWS Lambda (and CFN) to 4096 characters.
 *
 * InlineNodejsFunction.tmpFileName contains the path of the temporary file with the
 * minified code.  This path is also published to tree.json via IInspectiable.
 * This enables quick development turn around by
 * copying the minified code to the Lambda console.
 */
export class InlineNodejsFunction extends Function implements IInspectable {
  /** Link in tree.json to the file used for inline code. */
  static readonly TMP_FILE_ATTRIBUTE_NAME = `${NAMESPACE}.InlineNodejsFunction.tmpfile`;

  static minifyEngineFromProps(props: InlineNodejsFunctionProps) {
    return (props.minifyEngine == undefined) ? MinifyEngine.SIMPLE : props.minifyEngine;
  }

  /**
   * Path to the temporary file with the minified code (if any).
   * This path is also published via IInspectiable, and thus will appear in
   * the tree.json file as attribute "@open-constructs/aws-cdk.InlineNodejsFunction.tmpfile".
   *
   * This makes it possible to get quick development turn around by
   * compiling your project and copying the minified code to the console.
   * Note the location will change to a new temporary directory each time the code
   * is compiled.
   */
  readonly tmpFile: string | undefined;

  constructor(scope: Construct, id: string,
    private readonly props: InlineNodejsFunctionProps) {
    super(scope, id, {
      ...props as FunctionOptions,
      code: Code.fromInline(getInlineCode(scope.node.path + '/' + id, props.entry!,
        InlineNodejsFunction.minifyEngineFromProps(props))),
      runtime: getRuntime(scope, props),
      handler: props.handler ? (props.handler.indexOf('.') !== -1 ? `${
        props.handler}` : `index.${props.handler}`) : 'index.handler',
    });

    // Enable connection reuse for aws-sdk
    if (props.awsSdkConnectionReuse ?? true) {
      this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
    }
    let minifyEngine = InlineNodejsFunction.minifyEngineFromProps(props);
    if (minifyEngine != MinifyEngine.NONE) {
      this.tmpFile = getMinifiedTmpFile(scope.node.path + '/' + id, this.props.entry!);
    }
  }

  inspect(inspector: TreeInspector): void {
    if (this.tmpFile) {
      inspector.addAttribute(InlineNodejsFunction.TMP_FILE_ATTRIBUTE_NAME, this.tmpFile);
    }
  }
}
