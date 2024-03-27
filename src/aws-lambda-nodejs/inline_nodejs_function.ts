/* eslint @typescript-eslint/no-require-imports: "off" */
/* eslint import/no-extraneous-dependencies: "off" */
/* eslint no-bitwise: "off" */

import fs = require('fs');
import { FileSystem, IInspectable, TreeInspector } from 'aws-cdk-lib';
import { Code, Function, FunctionOptions, Runtime } from 'aws-cdk-lib/aws-lambda';
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
 * @param code
 */
function stripComments(code: string) {
  return code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
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
 * Returns a minified version of the javascript generated by the lambdas.
 *
 * This allows one to keep the lambda typescript code readable, and still deploy it
 * as inline-code.
 *
 * Uses simple minification.
 *
 * @param entry
 * @param minifyEngine What engine to use.
 */
function getInlineCode(entry: string, minifyEngine: number): string {
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

  return inlineCode;
}

/**
 * @returns A randomish alphanumeric string of up to 6 characters.
 */
function upToSixRandomChars() {
  return (Math.random() + 1).toString(36).substring(7);
}


function getMinifiedTmpFile(entry: string) {
  let fileName = function (str: string) {
    return str.split('\\').pop()!.split('/').pop()!;
  }(entry);

  return `${minifiedOutDir()}/${upToSixRandomChars()}-${fileName}`;
}

function getSimpleMinification(entry: string) {
  let code = trimLines(stripComments(fs.readFileSync(entry, { encoding: 'utf-8' })));

  // Write the minified code to a tmp file so the user can copy it into the console easily.
  let tmpFile = getMinifiedTmpFile(entry);
  fs.writeFileSync(tmpFile, code, { encoding: 'utf-8' });

  return code;
}

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

  // Write the minified code to a tmp file so the user can copy it into the console easily.
  let tmpFile = getMinifiedTmpFile(entry);
  fs.writeFileSync(tmpFile, code, { encoding: 'utf-8' });

  return code as string;
}

/**
 * Which minification engine to use.
 */
export enum MinifyEngine {
  /** No minification. */
  NONE = 0,
  /**
   * Uses esbuild for minification.
   * Add the following to your package.json file:
   * ```
   * "esbuild": "^0.12.28"
   * ```
   */
  ES_BUILD = 1,
  /**
   * Removes comments and trims leading/trailing spaces from lines.
   */
  SIMPLE = 2
}

/**
 * Properties for a inline NodejsFunction.
 */
export interface InlineNodejsFunctionProps extends FunctionOptions {
  /**
   * Path to the entry file (JavaScript only).
   *
   * If you are using typescript, just pass the path to the compiled .js file.
   */
  readonly entry?: string;

  /**
   * The name of the exported handler in the entry file.
   *
   * @default index.handler
   */
  readonly handler?: string;

  /**
   * The runtime environment. Only runtimes of the Node.js family are
   * supported.
   *
   * @default Runtime.NODEJS_16_X
   */
  readonly runtime?: Runtime;

  /**
    * Default is "SIMPLE".  See {@link MinifyEngine} for values.
    */
  readonly minifyEngine?: MinifyEngine;
}

/**
 * Inline code version of NodejsFunction.
 *
 * This class minifies your JavaScript code, so you can feel free to add comments
 * and proper variables names in your inline code.  They will be stripped away,
 * depending on which minification engine you use (See {@link MinifyEngine}).
 *
 * This class writes out the minified javascript code to
 * `${process.env.TMPDIR}/minified-${RANDOM_CHARS}/${OTHER_RANDOM_CHARS}-<entryfile>.js`.
 * This allows the user to find the file and copy updated JavaScript right to the AWS lambda console.
 * It reduces your turn around time when coding a new lambda.
 *
 * It's amazing how much can be accomplished using small, inline TypeScript Lambdas.
 * Use cases:  StepFunction lambdas.  Provider-based Custom Resource handlers.
 *
 * InlineNodejsFunction.tmpFileName contains the path of the temporary file with the
 * minified code.  This path is also published to tree.json via IInspectiable.
 * This enables quick development turn around by
 * compiling your project and copying the minified code to the console.
 */
export class InlineNodejsFunction extends Function implements IInspectable {
  /** Link in tree.json to the file used for inline code. */
  static readonly TMP_FILE_ATTRIBUTE_NAME = `${NAMESPACE}.InlineNodejsFunction.tmpfile`;

  static minifyEngineFromProps(props: InlineNodejsFunctionProps) {
    return (props.minifyEngine == undefined) ? MinifyEngine.SIMPLE : props.minifyEngine;
  }

  /**
   * Path to the temporary file with the minified code.
   * This path is also published via IInspectiable, and thus will appear in
   * the tree.json file as attribute "@open-constructs/aws-cdk.InlineNodejsFunction.tmpfile".
   *
   * This makes it possible to get quick development turn around by
   * compiling your project and copying the minified code to the console.
   * Note the location will change for each compile, so re-query the tree.json file.
   */
  readonly tmpFile: string;

  constructor(scope: Construct, id: string,
    private readonly props: InlineNodejsFunctionProps) {
    super(scope, id, {
      ...props as FunctionOptions,
      code: Code.fromInline(getInlineCode(props.entry!,
        InlineNodejsFunction.minifyEngineFromProps(props))),
      runtime: props.runtime ?? Runtime.NODEJS_16_X,
      handler: props.handler ?? 'index.handler',
    });

    this.tmpFile = getMinifiedTmpFile(this.props.entry!);
  }

  inspect(inspector: TreeInspector): void {
    inspector.addAttribute(InlineNodejsFunction.TMP_FILE_ATTRIBUTE_NAME, this.tmpFile);
  }
}
