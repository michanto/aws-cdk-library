import { IAspect } from 'aws-cdk-lib';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { IConstruct } from 'constructs';
import { Logger } from './logger';

/**
 * Adds a LogLevel environment variable to each Function based on the construct log level.
 */
export class LoggingAspect implements IAspect {
  private static isFunction(x: IConstruct): x is Function {
    return typeof (x as any).addEnvironment == 'function';
  }
  visit(node: IConstruct): void {
    if (LoggingAspect.isFunction(node)) {
      node.addEnvironment('LogLevel', Number(Logger.of(node).logLevel).toString());
    }
  }
}