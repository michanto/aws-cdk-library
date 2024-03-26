import { CfnResource, CfnResourceProps, Fn, Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CustomResourceUtilities } from './custom_resources_utilities';
import { CfnTransform } from '../transforms';

/**
 *
 */
export class EncodeResource extends CfnTransform {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  apply(template: any): any {
    for (let resId in template.Resources) {
      let res = template.Resources[resId];
      if (res.Properties?.EncodedProperties) {
        // Already encoded
        continue;
      }
      if (!res.Properties?.ServiceToken) {
        // Does not need to be encoded.
        continue;
      }
      let serviceToken = res.Properties.ServiceToken;
      delete res.Properties.ServiceToken;
      let encodedProperties = {
        ServiceToken: serviceToken,
        EncodedProperties: Fn.base64(Stack.of(this).toJsonString(res.Properties)),
      };
      res.Properties = encodedProperties;
    }
    return template;
  }
}

/**
 * This resource will encode it's properties as a post-resolve step,
 * It is meant to be used for CfnCustomResource, as it does not
 * encode the ServiceToken, and it expects one to be there.
 *
 * Why encode resources?  Because CloudFormation will turn numbers and booleans
 * into strings when it calls a custom resource Lambda, and that is not always desirable.
 * Encoding the properties prevents that conversion.
 *
 * This is done a lot in the CDK, and is the recommended work-around for transmitting unaltered
 * properties to the custom resource lambda.
 *
 * Note that the lambda MUST convert the properties back from encoded properties to unencoded properties.
 */
export class CfnEncodingResource extends CfnResource {
  static makeEncodingResource(customResource: Construct) {
    let cfnCustomResource = new CustomResourceUtilities().findCfnCustomResource(customResource);
    new EncodeResource(cfnCustomResource, 'EncodeResource');
  }

  constructor(scope: Construct, id: string, props: CfnResourceProps) {
    super(scope, id, props);
    new EncodeResource(this, 'EncodeResource');
  }
}
