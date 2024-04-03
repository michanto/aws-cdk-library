# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfnTransform <a name="CfnTransform" id="@open-constructs/aws-cdk.CfnTransform"></a>

- *Implements:* <a href="#@open-constructs/aws-cdk.ICfnTransform">ICfnTransform</a>

This is the base class for CDK Transform constructs.

A CfnTransform class will have no affect on the template unless it is hosted.
The hosting construct must support Transform processing.  CfnTransformHostHook
ensures the construct is hosted by either the antecedent CfnElement, Stack, or by
another construct in the heirarchy (such as a TemplateImporter)

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.CfnTransform.Initializer"></a>

```typescript
import { CfnTransform } from '@open-constructs/aws-cdk'

new CfnTransform(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.CfnTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.CfnTransform.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.CfnTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.CfnTransform.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.CfnTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@open-constructs/aws-cdk.CfnTransform.apply">apply</a></code> | Modifies the template. |

---

##### `toString` <a name="toString" id="@open-constructs/aws-cdk.CfnTransform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `apply` <a name="apply" id="@open-constructs/aws-cdk.CfnTransform.apply"></a>

```typescript
public apply(template: any): any
```

Modifies the template.

###### `template`<sup>Required</sup> <a name="template" id="@open-constructs/aws-cdk.CfnTransform.apply.parameter.template"></a>

- *Type:* any

The template to transform.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.CfnTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@open-constructs/aws-cdk.CfnTransform.isCfnTransform">isCfnTransform</a></code> | Returns `true` if a construct is a CfnTransform. |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.CfnTransform.isConstruct"></a>

```typescript
import { CfnTransform } from '@open-constructs/aws-cdk'

CfnTransform.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.CfnTransform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransform` <a name="isCfnTransform" id="@open-constructs/aws-cdk.CfnTransform.isCfnTransform"></a>

```typescript
import { CfnTransform } from '@open-constructs/aws-cdk'

CfnTransform.isCfnTransform(x: any)
```

Returns `true` if a construct is a CfnTransform.

Uses duck-typing instead of `instanceof` to allow CfnTransforms from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.CfnTransform.isCfnTransform.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.CfnTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@open-constructs/aws-cdk.CfnTransform.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@open-constructs/aws-cdk.CfnTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.CfnTransform.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---


### CfnTransformHost <a name="CfnTransformHost" id="@open-constructs/aws-cdk.CfnTransformHost"></a>

Normally, transforms are hosted by a Stack or CfnElement, and they are applied during synthesis (calls to _toCloudFormation).

Adding a 
CfnTransform to a Stack or CfnElement will cause the _toCloudFormation
method to be proxied to apply Transforms.

But if you want transforms hosted for some other reason, this is the class you should use.
This class hosts transforms, but does not know what to do with them.
So anything can be done with the transforms hosted here, but they will not affect the stack itself.

This is used for import and other non-stack not-element scenarios.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.CfnTransformHost.Initializer"></a>

```typescript
import { CfnTransformHost } from '@open-constructs/aws-cdk'

new CfnTransformHost(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.CfnTransformHost.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.CfnTransformHost.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.CfnTransformHost.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.CfnTransformHost.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.CfnTransformHost.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@open-constructs/aws-cdk.CfnTransformHost.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.CfnTransformHost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@open-constructs/aws-cdk.CfnTransformHost.isCfnTransformHost">isCfnTransformHost</a></code> | Tells you if an object is a CfnTransformHost. |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.CfnTransformHost.isConstruct"></a>

```typescript
import { CfnTransformHost } from '@open-constructs/aws-cdk'

CfnTransformHost.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.CfnTransformHost.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransformHost` <a name="isCfnTransformHost" id="@open-constructs/aws-cdk.CfnTransformHost.isCfnTransformHost"></a>

```typescript
import { CfnTransformHost } from '@open-constructs/aws-cdk'

CfnTransformHost.isCfnTransformHost(scope: Construct)
```

Tells you if an object is a CfnTransformHost.

Duck-typing.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.CfnTransformHost.isCfnTransformHost.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.CfnTransformHost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@open-constructs/aws-cdk.CfnTransformHost.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### EncodeResource <a name="EncodeResource" id="@open-constructs/aws-cdk.EncodeResource"></a>

This transform base64-encodes any CustomResource it is applied to by moving all properties (other than ServiceToken) to EncodedProperties and applying {@link Fn.base64}. This resource will encode it's properties as a post-resolve step, It is meant to be used on CfnCustomResource (or any CfnResource with a ServiceToken), as it does not encode the ServiceToken.  If there is no ServiceToken, the resource is not encoded.

Why encode custom resources?  Because CloudFormation will turn numbers and booleans
into strings when it calls a custom resource Lambda, and that is not always desirable.
Encoding the properties prevents that conversion.  This is a CDK best-practice, and
is the recommended work-around for transmitting unaltered properties to a custom resource lambda.

Note that the lambda MUST base64 decode the EncodedProperties for use.  Example:
```
  // If the properties were encoded, decode them now.
 if ('EncodedProperties' in event.ResourceProperties) {
   event.ResourceProperties = JSON.parse(Buffer
     .from(event.ResourceProperties.EncodedProperties, 'base64')
     .toString('utf8'));
 }
```

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.EncodeResource.Initializer"></a>

```typescript
import { EncodeResource } from '@open-constructs/aws-cdk'

new EncodeResource(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.EncodeResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.EncodeResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.EncodeResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.EncodeResource.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.EncodeResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@open-constructs/aws-cdk.EncodeResource.apply">apply</a></code> | Modifies the template. |

---

##### `toString` <a name="toString" id="@open-constructs/aws-cdk.EncodeResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `apply` <a name="apply" id="@open-constructs/aws-cdk.EncodeResource.apply"></a>

```typescript
public apply(template: any): any
```

Modifies the template.

###### `template`<sup>Required</sup> <a name="template" id="@open-constructs/aws-cdk.EncodeResource.apply.parameter.template"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.EncodeResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@open-constructs/aws-cdk.EncodeResource.isCfnTransform">isCfnTransform</a></code> | Returns `true` if a construct is a CfnTransform. |
| <code><a href="#@open-constructs/aws-cdk.EncodeResource.encodeCustomResource">encodeCustomResource</a></code> | Encode an L1, L2 or L3 resource by calling this method instead of having to find the L1 yourself. |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.EncodeResource.isConstruct"></a>

```typescript
import { EncodeResource } from '@open-constructs/aws-cdk'

EncodeResource.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.EncodeResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnTransform` <a name="isCfnTransform" id="@open-constructs/aws-cdk.EncodeResource.isCfnTransform"></a>

```typescript
import { EncodeResource } from '@open-constructs/aws-cdk'

EncodeResource.isCfnTransform(x: any)
```

Returns `true` if a construct is a CfnTransform.

Uses duck-typing instead of `instanceof` to allow CfnTransforms from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.EncodeResource.isCfnTransform.parameter.x"></a>

- *Type:* any

---

##### `encodeCustomResource` <a name="encodeCustomResource" id="@open-constructs/aws-cdk.EncodeResource.encodeCustomResource"></a>

```typescript
import { EncodeResource } from '@open-constructs/aws-cdk'

EncodeResource.encodeCustomResource(scope: Construct, id?: string)
```

Encode an L1, L2 or L3 resource by calling this method instead of having to find the L1 yourself.

Throws if there are multiple custom resources under scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.EncodeResource.encodeCustomResource.parameter.scope"></a>

- *Type:* constructs.Construct

Construct containing one L1 custom resource construct.

---

###### `id`<sup>Optional</sup> <a name="id" id="@open-constructs/aws-cdk.EncodeResource.encodeCustomResource.parameter.id"></a>

- *Type:* string

Id for the EncodeResource transform.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.EncodeResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@open-constructs/aws-cdk.EncodeResource.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@open-constructs/aws-cdk.EncodeResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.EncodeResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---


### InlineNodejsFunction <a name="InlineNodejsFunction" id="@open-constructs/aws-cdk.InlineNodejsFunction"></a>

- *Implements:* aws-cdk-lib.IInspectable

Inline code version of NodejsFunction.  Write Lambda code in the CDK package, in either JavaScript or TypeScript.

Creates a Lambda from a single JavaScript file included in your package.
Pass a file like to the js file from the dist/output directory as
{@link InlineNodejsFunctionProps.entry}.

Inline Lambda runs only with the code in the .js entry file provided and the
AWS Lambda NodeJS runtime.  Thus while the entry file can export functions and
types to the rest of your CDK package, it cannot import anything
not available in the Lambda runtime.  The Lambda runtime includes the base Node library
(such as https://nodejs.org/docs/latest-v18.x/api/), along with aws-sdk and/or

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.InlineNodejsFunction.Initializer"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

new InlineNodejsFunction(scope: Construct, id: string, props: InlineNodejsFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.Initializer.parameter.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps">InlineNodejsFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.InlineNodejsFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.InlineNodejsFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps">InlineNodejsFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.grantInvokeCompositePrincipal">grantInvokeCompositePrincipal</a></code> | Grant multiple principals the ability to invoke this Lambda via CompositePrincipal. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.invalidateVersionBasedOn">invalidateVersionBasedOn</a></code> | Mix additional information into the hash of the Version object. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.inspect">inspect</a></code> | Examines construct. |

---

##### `toString` <a name="toString" id="@open-constructs/aws-cdk.InlineNodejsFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@open-constructs/aws-cdk.InlineNodejsFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@open-constructs/aws-cdk.InlineNodejsFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="@open-constructs/aws-cdk.InlineNodejsFunction.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the aws-cdk-lib/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="@open-constructs/aws-cdk.InlineNodejsFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="@open-constructs/aws-cdk.InlineNodejsFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.InlineNodejsFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@open-constructs/aws-cdk.InlineNodejsFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="@open-constructs/aws-cdk.InlineNodejsFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.InlineNodejsFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="@open-constructs/aws-cdk.InlineNodejsFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.InlineNodejsFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@open-constructs/aws-cdk.InlineNodejsFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="@open-constructs/aws-cdk.InlineNodejsFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="@open-constructs/aws-cdk.InlineNodejsFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="@open-constructs/aws-cdk.InlineNodejsFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="@open-constructs/aws-cdk.InlineNodejsFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="@open-constructs/aws-cdk.InlineNodejsFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.InlineNodejsFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="@open-constructs/aws-cdk.InlineNodejsFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="@open-constructs/aws-cdk.InlineNodejsFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@open-constructs/aws-cdk.InlineNodejsFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeCompositePrincipal` <a name="grantInvokeCompositePrincipal" id="@open-constructs/aws-cdk.InlineNodejsFunction.grantInvokeCompositePrincipal"></a>

```typescript
public grantInvokeCompositePrincipal(compositePrincipal: CompositePrincipal): Grant[]
```

Grant multiple principals the ability to invoke this Lambda via CompositePrincipal.

###### `compositePrincipal`<sup>Required</sup> <a name="compositePrincipal" id="@open-constructs/aws-cdk.InlineNodejsFunction.grantInvokeCompositePrincipal.parameter.compositePrincipal"></a>

- *Type:* aws-cdk-lib.aws_iam.CompositePrincipal

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="@open-constructs/aws-cdk.InlineNodejsFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@open-constructs/aws-cdk.InlineNodejsFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `metric` <a name="metric" id="@open-constructs/aws-cdk.InlineNodejsFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@open-constructs/aws-cdk.InlineNodejsFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="@open-constructs/aws-cdk.InlineNodejsFunction.addAlias"></a>

```typescript
public addAlias(aliasName: string, options?: AliasOptions): Alias
```

Defines an alias for this function.

The alias will automatically be updated to point to the latest version of
the function as it is being updated during a deployment.

```ts
declare const fn: lambda.Function;

fn.addAlias('Live');

// Is equivalent to

new lambda.Alias(this, 'AliasLive', {
  aliasName: 'Live',
  version: fn.currentVersion,
});
```

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="@open-constructs/aws-cdk.InlineNodejsFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.InlineNodejsFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="@open-constructs/aws-cdk.InlineNodejsFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="@open-constructs/aws-cdk.InlineNodejsFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="@open-constructs/aws-cdk.InlineNodejsFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.InlineNodejsFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="@open-constructs/aws-cdk.InlineNodejsFunction.addLayers"></a>

```typescript
public addLayers(layers: ILayerVersion): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="@open-constructs/aws-cdk.InlineNodejsFunction.addLayers.parameter.layers"></a>

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

the layers to be added.

---

##### `invalidateVersionBasedOn` <a name="invalidateVersionBasedOn" id="@open-constructs/aws-cdk.InlineNodejsFunction.invalidateVersionBasedOn"></a>

```typescript
public invalidateVersionBasedOn(x: string): void
```

Mix additional information into the hash of the Version object.

The Lambda Function construct does its best to automatically create a new
Version when anything about the Function changes (its code, its layers,
any of the other properties).

However, you can sometimes source information from places that the CDK cannot
look into, like the deploy-time values of SSM parameters. In those cases,
the CDK would not force the creation of a new Version object when it actually
should.

This method can be used to invalidate the current Version object. Pass in
any string into this method, and make sure the string changes when you know
a new Version needs to be created.

This method may be called more than once.

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.InlineNodejsFunction.invalidateVersionBasedOn.parameter.x"></a>

- *Type:* string

---

##### `inspect` <a name="inspect" id="@open-constructs/aws-cdk.InlineNodejsFunction.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines construct.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@open-constructs/aws-cdk.InlineNodejsFunction.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.minifyEngineFromProps">minifyEngineFromProps</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.InlineNodejsFunction.isConstruct"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.InlineNodejsFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@open-constructs/aws-cdk.InlineNodejsFunction.isOwnedResource"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@open-constructs/aws-cdk.InlineNodejsFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@open-constructs/aws-cdk.InlineNodejsFunction.isResource"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@open-constructs/aws-cdk.InlineNodejsFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="@open-constructs/aws-cdk.InlineNodejsFunction.classifyVersionProperty"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@open-constructs/aws-cdk.InlineNodejsFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="@open-constructs/aws-cdk.InlineNodejsFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionArn"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

For `Function.addPermissions()` to work on this imported lambda, make sure that is
in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionAttributes"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

For `Function.addPermissions()` to work on this imported lambda, set the sameEnvironment property to true
if this imported lambda is in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionName"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="@open-constructs/aws-cdk.InlineNodejsFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAll"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAllConcurrentExecutions"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAllDuration"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAllErrors"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAllInvocations"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAllThrottles"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `minifyEngineFromProps` <a name="minifyEngineFromProps" id="@open-constructs/aws-cdk.InlineNodejsFunction.minifyEngineFromProps"></a>

```typescript
import { InlineNodejsFunction } from '@open-constructs/aws-cdk'

InlineNodejsFunction.minifyEngineFromProps(props: InlineNodejsFunctionProps)
```

###### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.InlineNodejsFunction.minifyEngineFromProps.parameter.props"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps">InlineNodejsFunctionProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.tmpFile">tmpFile</a></code> | <code>string</code> | Path to the temporary file with the minified code. |

---

##### `node`<sup>Required</sup> <a name="node" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---

##### `tmpFile`<sup>Required</sup> <a name="tmpFile" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.tmpFile"></a>

```typescript
public readonly tmpFile: string;
```

- *Type:* string

Path to the temporary file with the minified code.

This path is also published via IInspectiable, and thus will appear in
the tree.json file as attribute "@open-constructs/aws-cdk.InlineNodejsFunction.tmpfile".

This makes it possible to get quick development turn around by
compiling your project and copying the minified code to the console.
Note the location will change for each compile, so re-query the tree.json file.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunction.property.TMP_FILE_ATTRIBUTE_NAME">TMP_FILE_ATTRIBUTE_NAME</a></code> | <code>string</code> | Link in tree.json to the file used for inline code. |

---

##### `TMP_FILE_ATTRIBUTE_NAME`<sup>Required</sup> <a name="TMP_FILE_ATTRIBUTE_NAME" id="@open-constructs/aws-cdk.InlineNodejsFunction.property.TMP_FILE_ATTRIBUTE_NAME"></a>

```typescript
public readonly TMP_FILE_ATTRIBUTE_NAME: string;
```

- *Type:* string

Link in tree.json to the file used for inline code.

---

### LateBoundStepFunctionsStartExecution <a name="LateBoundStepFunctionsStartExecution" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution"></a>

Calls a stepFunction who's ARN is not known until runtime.

This class can be used to create StepFunction wrappers.
Use it to add pre- or post-processing to any existing StepFunction.

Examples:
 - Wrapper that reads a file from S3, and passes that as input to the wrapped StepFunciton.
 - Wrapper that writes a portion of StepFunction output to S3.

Runs the state machine specified by {@link LateBoundStepFunctionsStartExecutionProps.stateMachineArnPath).}

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.Initializer"></a>

```typescript
import { LateBoundStepFunctionsStartExecution } from '@open-constructs/aws-cdk'

new LateBoundStepFunctionsStartExecution(scope: Construct, id: string, props: LateBoundStepFunctionsStartExecutionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.Initializer.parameter.props">props</a></code> | <code>@open-constructs/aws-cdk.aws_cur.CostReportProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.aws_cur.CostReport.Initializer.parameter.scope"></a>
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.Initializer.parameter.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.Initializer.parameter.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps">LateBoundStepFunctionsStartExecutionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.aws_cur.CostReport.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.aws_cur.CostReport.Initializer.parameter.props"></a>

- *Type:* @open-constructs/aws-cdk.aws_cur.CostReportProps
##### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.Initializer.parameter.id"></a>

- *Type:* string

Descriptive identifier for this chainable.

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.Initializer.parameter.props"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps">LateBoundStepFunctionsStartExecutionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@open-constructs/aws-cdk.aws_cur.CostReport.toString"></a>
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.addPrefix">addPrefix</a></code> | Add a prefix to the stateId of this state. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.bindToGraph">bindToGraph</a></code> | Register this state as part of the given graph. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.toStateJson">toStateJson</a></code> | Return the Amazon States Language object for this state. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.addCatch">addCatch</a></code> | Add a recovery handler for this state. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.addRetry">addRetry</a></code> | Add retry configuration for this state. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metric">metric</a></code> | Return the given named metric for this Task. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricFailed">metricFailed</a></code> | Metric for the number of times this activity fails. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricHeartbeatTimedOut">metricHeartbeatTimedOut</a></code> | Metric for the number of times the heartbeat times out for this activity. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricRunTime">metricRunTime</a></code> | The interval, in milliseconds, between the time the Task starts and the time it closes. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricScheduled">metricScheduled</a></code> | Metric for the number of times this activity is scheduled. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricScheduleTime">metricScheduleTime</a></code> | The interval, in milliseconds, for which the activity stays in the schedule state. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricStarted">metricStarted</a></code> | Metric for the number of times this activity is started. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricSucceeded">metricSucceeded</a></code> | Metric for the number of times this activity succeeds. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricTime">metricTime</a></code> | The interval, in milliseconds, between the time the activity is scheduled and the time it closes. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricTimedOut">metricTimedOut</a></code> | Metric for the number of times this activity times out. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.next">next</a></code> | Continue normal execution with the given state. |

---

##### `toString` <a name="toString" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addPrefix` <a name="addPrefix" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.addPrefix"></a>

```typescript
public addPrefix(x: string): void
```

Add a prefix to the stateId of this state.

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.addPrefix.parameter.x"></a>

- *Type:* string

---

##### `bindToGraph` <a name="bindToGraph" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.bindToGraph"></a>

```typescript
public bindToGraph(graph: StateGraph): void
```

Register this state as part of the given graph.

Don't call this. It will be called automatically when you work
with states normally.

###### `graph`<sup>Required</sup> <a name="graph" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.bindToGraph.parameter.graph"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.StateGraph

---

##### `toStateJson` <a name="toStateJson" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.toStateJson"></a>

```typescript
public toStateJson(): object
```

Return the Amazon States Language object for this state.

##### `addCatch` <a name="addCatch" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.addCatch"></a>

```typescript
public addCatch(handler: IChainable, props?: CatchProps): TaskStateBase
```

Add a recovery handler for this state.

When a particular error occurs, execution will continue at the error
handler instead of failing the state machine execution.

###### `handler`<sup>Required</sup> <a name="handler" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.addCatch.parameter.handler"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.addCatch.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.CatchProps

---

##### `addRetry` <a name="addRetry" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.addRetry"></a>

```typescript
public addRetry(props?: RetryProps): TaskStateBase
```

Add retry configuration for this state.

This controls if and how the execution will be retried if a particular
error occurs.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.addRetry.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.RetryProps

---

##### `metric` <a name="metric" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Task.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricFailed` <a name="metricFailed" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricFailed"></a>

```typescript
public metricFailed(props?: MetricOptions): Metric
```

Metric for the number of times this activity fails.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricFailed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricHeartbeatTimedOut` <a name="metricHeartbeatTimedOut" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricHeartbeatTimedOut"></a>

```typescript
public metricHeartbeatTimedOut(props?: MetricOptions): Metric
```

Metric for the number of times the heartbeat times out for this activity.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricHeartbeatTimedOut.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricRunTime` <a name="metricRunTime" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricRunTime"></a>

```typescript
public metricRunTime(props?: MetricOptions): Metric
```

The interval, in milliseconds, between the time the Task starts and the time it closes.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricRunTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricScheduled` <a name="metricScheduled" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricScheduled"></a>

```typescript
public metricScheduled(props?: MetricOptions): Metric
```

Metric for the number of times this activity is scheduled.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricScheduled.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricScheduleTime` <a name="metricScheduleTime" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricScheduleTime"></a>

```typescript
public metricScheduleTime(props?: MetricOptions): Metric
```

The interval, in milliseconds, for which the activity stays in the schedule state.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricScheduleTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStarted` <a name="metricStarted" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricStarted"></a>

```typescript
public metricStarted(props?: MetricOptions): Metric
```

Metric for the number of times this activity is started.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricStarted.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSucceeded` <a name="metricSucceeded" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricSucceeded"></a>

```typescript
public metricSucceeded(props?: MetricOptions): Metric
```

Metric for the number of times this activity succeeds.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricSucceeded.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTime` <a name="metricTime" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricTime"></a>

```typescript
public metricTime(props?: MetricOptions): Metric
```

The interval, in milliseconds, between the time the activity is scheduled and the time it closes.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTimedOut` <a name="metricTimedOut" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricTimedOut"></a>

```typescript
public metricTimedOut(props?: MetricOptions): Metric
```

Metric for the number of times this activity times out.

###### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.metricTimedOut.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `next` <a name="next" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.next"></a>

```typescript
public next(next: IChainable): Chain
```

Continue normal execution with the given state.

###### `next`<sup>Required</sup> <a name="next" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.next.parameter.next"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.IChainable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.aws_cur.CostReport.isConstruct"></a>

```typescript
import { aws_cur } from '@open-constructs/aws-cdk'

aws_cur.CostReport.isConstruct(x: any)
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.filterNextables">filterNextables</a></code> | Return only the states that allow chaining from an array of states. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.findReachableEndStates">findReachableEndStates</a></code> | Find the set of end states states reachable through transitions from the given start state. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.findReachableStates">findReachableStates</a></code> | Find the set of states reachable through transitions from the given start state. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.prefixStates">prefixStates</a></code> | Add a prefix to the stateId of all States found in a construct tree. |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.isConstruct"></a>

```typescript
import { LateBoundStepFunctionsStartExecution } from '@open-constructs/aws-cdk'

LateBoundStepFunctionsStartExecution.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.aws_cur.CostReport.isConstruct.parameter.x"></a>
###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `filterNextables` <a name="filterNextables" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.filterNextables"></a>

```typescript
import { LateBoundStepFunctionsStartExecution } from '@open-constructs/aws-cdk'

LateBoundStepFunctionsStartExecution.filterNextables(states: State[])
```

Return only the states that allow chaining from an array of states.

###### `states`<sup>Required</sup> <a name="states" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.filterNextables.parameter.states"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State[]

---

##### `findReachableEndStates` <a name="findReachableEndStates" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.findReachableEndStates"></a>

```typescript
import { LateBoundStepFunctionsStartExecution } from '@open-constructs/aws-cdk'

LateBoundStepFunctionsStartExecution.findReachableEndStates(start: State, options?: FindStateOptions)
```

Find the set of end states states reachable through transitions from the given start state.

###### `start`<sup>Required</sup> <a name="start" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.findReachableEndStates.parameter.start"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.findReachableEndStates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.FindStateOptions

---

##### `findReachableStates` <a name="findReachableStates" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.findReachableStates"></a>

```typescript
import { LateBoundStepFunctionsStartExecution } from '@open-constructs/aws-cdk'

LateBoundStepFunctionsStartExecution.findReachableStates(start: State, options?: FindStateOptions)
```

Find the set of states reachable through transitions from the given start state.

This does not retrieve states from within sub-graphs, such as states within a Parallel state's branch.

###### `start`<sup>Required</sup> <a name="start" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.findReachableStates.parameter.start"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.State

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.findReachableStates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_stepfunctions.FindStateOptions

---

##### `prefixStates` <a name="prefixStates" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.prefixStates"></a>

```typescript
import { LateBoundStepFunctionsStartExecution } from '@open-constructs/aws-cdk'

LateBoundStepFunctionsStartExecution.prefixStates(root: IConstruct, prefix: string)
```

Add a prefix to the stateId of all States found in a construct tree.

###### `root`<sup>Required</sup> <a name="root" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.prefixStates.parameter.root"></a>

- *Type:* constructs.IConstruct

---

###### `prefix`<sup>Required</sup> <a name="prefix" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.prefixStates.parameter.prefix"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.property.reportBucket">reportBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 bucket that stores the cost report. |

---

##### `node`<sup>Required</sup> <a name="node" id="@open-constructs/aws-cdk.aws_cur.CostReport.property.node"></a>
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.property.endStates">endStates</a></code> | <code>aws-cdk-lib.aws_stepfunctions.INextable[]</code> | Continuable states of this Chainable. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.property.id">id</a></code> | <code>string</code> | Descriptive identifier for this chainable. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.property.startState">startState</a></code> | <code>aws-cdk-lib.aws_stepfunctions.State</code> | First state of this Chainable. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.property.stateId">stateId</a></code> | <code>string</code> | Tokenized string that evaluates to the state's ID. |

---

##### `node`<sup>Required</sup> <a name="node" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `reportBucket`<sup>Required</sup> <a name="reportBucket" id="@open-constructs/aws-cdk.aws_cur.CostReport.property.reportBucket"></a>

```typescript
public readonly reportBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 bucket that stores the cost report.
##### `endStates`<sup>Required</sup> <a name="endStates" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.property.endStates"></a>

```typescript
public readonly endStates: INextable[];
```

- *Type:* aws-cdk-lib.aws_stepfunctions.INextable[]

Continuable states of this Chainable.

---

##### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Descriptive identifier for this chainable.

---

##### `startState`<sup>Required</sup> <a name="startState" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.property.startState"></a>

```typescript
public readonly startState: State;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.State

First state of this Chainable.

---

##### `stateId`<sup>Required</sup> <a name="stateId" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecution.property.stateId"></a>

```typescript
public readonly stateId: string;
```

- *Type:* string

Tokenized string that evaluates to the state's ID.

---


### StepFunctionTask <a name="StepFunctionTask" id="@open-constructs/aws-cdk.StepFunctionTask"></a>

This class creates multiple StepFunctionTaskStep resources to monitor the execution of a long-running step function.

The first StepFunctionTaskStep is created with the StateMachine
ARN and input so it can start the step function.  This resource
sets it's physical ID to the ExecutionArn.

Subsequent StepFunctionTaskStep resources are created with
the ExecutionArn so they can continue monitoring the StepFunction.

Once the StepFunction has finished running, subsequent
StepFunctionTaskStep resources (if any) will fast-succeed.
If the StepFunction fails, the subsequent StepFunctionTaskStep
resources will fast-fail.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.StepFunctionTask.Initializer"></a>

```typescript
import { StepFunctionTask } from '@open-constructs/aws-cdk'

new StepFunctionTask(scope: Construct, id: string, props: StepFunctionTaskProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTask.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTask.Initializer.parameter.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.StepFunctionTaskProps">StepFunctionTaskProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StepFunctionTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.StepFunctionTask.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.StepFunctionTask.Initializer.parameter.props"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.StepFunctionTaskProps">StepFunctionTaskProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTask.getAtt">getAtt</a></code> | See {@link CustomResource.getAtt }. |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTask.getAttString">getAttString</a></code> | See {@link CustomResource.getAttString }. |

---

##### `toString` <a name="toString" id="@open-constructs/aws-cdk.StepFunctionTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getAtt` <a name="getAtt" id="@open-constructs/aws-cdk.StepFunctionTask.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

See {@link CustomResource.getAtt }.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@open-constructs/aws-cdk.StepFunctionTask.getAtt.parameter.attributeName"></a>

- *Type:* string

---

##### `getAttString` <a name="getAttString" id="@open-constructs/aws-cdk.StepFunctionTask.getAttString"></a>

```typescript
public getAttString(attributeName: string): string
```

See {@link CustomResource.getAttString }.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@open-constructs/aws-cdk.StepFunctionTask.getAttString.parameter.attributeName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.StepFunctionTask.isConstruct"></a>

```typescript
import { StepFunctionTask } from '@open-constructs/aws-cdk'

StepFunctionTask.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.StepFunctionTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTask.property.numberOfSteps">numberOfSteps</a></code> | <code>number</code> | Total number of StepFunctionTaskStep resources created. |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTask.property.ref">ref</a></code> | <code>string</code> | The physical name of this custom resource. |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTask.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role. |

---

##### `node`<sup>Required</sup> <a name="node" id="@open-constructs/aws-cdk.StepFunctionTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `numberOfSteps`<sup>Required</sup> <a name="numberOfSteps" id="@open-constructs/aws-cdk.StepFunctionTask.property.numberOfSteps"></a>

```typescript
public readonly numberOfSteps: number;
```

- *Type:* number

Total number of StepFunctionTaskStep resources created.

---

##### `ref`<sup>Required</sup> <a name="ref" id="@open-constructs/aws-cdk.StepFunctionTask.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

The physical name of this custom resource.

---

##### `role`<sup>Required</sup> <a name="role" id="@open-constructs/aws-cdk.StepFunctionTask.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role.

---


## Structs <a name="Structs" id="Structs"></a>

### ConstructHostProps <a name="ConstructHostProps" id="@open-constructs/aws-cdk.ConstructHostProps"></a>

Properties for ConstructHost.

#### Initializer <a name="Initializer" id="@open-constructs/aws-cdk.ConstructHostProps.Initializer"></a>

```typescript
import { ConstructHostProps } from '@open-constructs/aws-cdk'

const constructHostProps: ConstructHostProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructHostProps.property.hostConstructTypeInfo">hostConstructTypeInfo</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo">ConstructRunTimeTypeInfo</a></code> | Host RTTI. |
| <code><a href="#@open-constructs/aws-cdk.ConstructHostProps.property.hostedConstructTypeInfo">hostedConstructTypeInfo</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo">ConstructRunTimeTypeInfo</a></code> | Hosted construct RTTI. |
| <code><a href="#@open-constructs/aws-cdk.ConstructHostProps.property.stopCondition">stopCondition</a></code> | <code><a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a></code> | Stop condition for searching for hosted constructs. |

---

##### `hostConstructTypeInfo`<sup>Required</sup> <a name="hostConstructTypeInfo" id="@open-constructs/aws-cdk.ConstructHostProps.property.hostConstructTypeInfo"></a>

```typescript
public readonly hostConstructTypeInfo: ConstructRunTimeTypeInfo;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo">ConstructRunTimeTypeInfo</a>

Host RTTI.

---

##### `hostedConstructTypeInfo`<sup>Required</sup> <a name="hostedConstructTypeInfo" id="@open-constructs/aws-cdk.ConstructHostProps.property.hostedConstructTypeInfo"></a>

```typescript
public readonly hostedConstructTypeInfo: ConstructRunTimeTypeInfo;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo">ConstructRunTimeTypeInfo</a>

Hosted construct RTTI.

---

##### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.ConstructHostProps.property.stopCondition"></a>

```typescript
public readonly stopCondition: IStopCondition;
```

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

Stop condition for searching for hosted constructs.

Normally this will at least exclude sub-stacks.

---

### ConstructServiceProps <a name="ConstructServiceProps" id="@open-constructs/aws-cdk.ConstructServiceProps"></a>

Properties for defining a construct service.

A construct service is a symbol-keyed property on a construct.  The CDK uses
symbol-keyed properties extensively for RTTI, service caches, such as the myStack cache on
constructs created after calling Stack.of (see Stack.of in Stack.ts in the CDK), and hosting constructs (such as the Stack hosting
CfnElements.  See cfnElements function in Stack.ts in the CDK).

The construct service classes take these CDK techniques and make them explicit.
Construct services are similar to construct context, but are settable after the construct has children.

There is no type associated with these symbols unless a typed accessor function is defined,
such as {@link Stack.of } or {@link CfnElement.isCfnElement }, just to name two CDK examples.

In regards to this technique the CDK says (wrt `CfnElement.isCfnElement`):

> Uses duck-typing instead of `instanceof` to allow stack elements from different
> versions of this library to be included in the same stack.

#### Initializer <a name="Initializer" id="@open-constructs/aws-cdk.ConstructServiceProps.Initializer"></a>

```typescript
import { ConstructServiceProps } from '@open-constructs/aws-cdk'

const constructServiceProps: ConstructServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructServiceProps.property.servicePropertyName">servicePropertyName</a></code> | <code>string</code> | The symbol property for this construct service. |
| <code><a href="#@open-constructs/aws-cdk.ConstructServiceProps.property.factory">factory</a></code> | <code><a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a></code> | This function is used when calling {@link ConstructService.searchUpOrCreate } or {@link ConstructService.searchSelfOrCreate} to optionally create a service when none is found. |

---

##### `servicePropertyName`<sup>Required</sup> <a name="servicePropertyName" id="@open-constructs/aws-cdk.ConstructServiceProps.property.servicePropertyName"></a>

```typescript
public readonly servicePropertyName: string;
```

- *Type:* string

The symbol property for this construct service.

This needs to be
unique, so namespacing symobls is recommended:
```
// Your package name
const NAMESPACE = "@open-constructs/aws-cdk"
// PackageName.ServiceName
Symbol.for(`${NAMESPACE}.CfnTransform`)
```
To ensure uniqueness.

---

##### `factory`<sup>Optional</sup> <a name="factory" id="@open-constructs/aws-cdk.ConstructServiceProps.property.factory"></a>

```typescript
public readonly factory: IConstructServiceFactory;
```

- *Type:* <a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a>

This function is used when calling {@link ConstructService.searchUpOrCreate } or {@link ConstructService.searchSelfOrCreate} to optionally create a service when none is found.

Note:  You can also store factories in the tree itself using ConstructService.setFactory.
If a factory is found instead of a service, then that factory will be used instead of this
default factory.

---

### ConstructTreeServiceProps <a name="ConstructTreeServiceProps" id="@open-constructs/aws-cdk.ConstructTreeServiceProps"></a>

Properties for ConstructTreeService.

#### Initializer <a name="Initializer" id="@open-constructs/aws-cdk.ConstructTreeServiceProps.Initializer"></a>

```typescript
import { ConstructTreeServiceProps } from '@open-constructs/aws-cdk'

const constructTreeServiceProps: ConstructTreeServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps.property.servicePropertyName">servicePropertyName</a></code> | <code>string</code> | The symbol property for this construct service. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps.property.factory">factory</a></code> | <code><a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a></code> | This function is used when calling {@link ConstructService.searchUpOrCreate } or {@link ConstructService.searchSelfOrCreate} to optionally create a service when none is found. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps.property.stopCondition">stopCondition</a></code> | <code><a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a></code> | The `stopCondition` function is used in two cases:. |

---

##### `servicePropertyName`<sup>Required</sup> <a name="servicePropertyName" id="@open-constructs/aws-cdk.ConstructTreeServiceProps.property.servicePropertyName"></a>

```typescript
public readonly servicePropertyName: string;
```

- *Type:* string

The symbol property for this construct service.

This needs to be
unique, so namespacing symobls is recommended:
```
// Your package name
const NAMESPACE = "@open-constructs/aws-cdk"
// PackageName.ServiceName
Symbol.for(`${NAMESPACE}.CfnTransform`)
```
To ensure uniqueness.

---

##### `factory`<sup>Optional</sup> <a name="factory" id="@open-constructs/aws-cdk.ConstructTreeServiceProps.property.factory"></a>

```typescript
public readonly factory: IConstructServiceFactory;
```

- *Type:* <a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a>

This function is used when calling {@link ConstructService.searchUpOrCreate } or {@link ConstructService.searchSelfOrCreate} to optionally create a service when none is found.

Note:  You can also store factories in the tree itself using ConstructService.setFactory.
If a factory is found instead of a service, then that factory will be used instead of this
default factory.

---

##### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.ConstructTreeServiceProps.property.stopCondition"></a>

```typescript
public readonly stopCondition: IStopCondition;
```

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

The `stopCondition` function is used in two cases:.

1. To determine when to stop searching up the tree when calling
{@link ConstructService.searchUpOrCreate }.  For example, this function can be used to stop
searching up the tree when we reach a Stack object.

2. To stop recursion down the tree when calling {@link ConstructService.searchDown}.
Recursion will continue with the next child, unless that child also meets the stopCondition.
For example, this function can be used to stop recursion into sub-stacks.

If not defined, recursion will stop when we reach either the top or bottom of the tree,
depending on search direction.

A typical condition would be something like:
```
(c) => Stack.isStack(c)
```
Which would cause the search to stop at a stack (or sub-stack depending on direction of the search).

The stopCondition is not applied when calling  {@link ConstructService.searchSelf}
or {@link ConstructService.searchSelfOrCreate}.

---

### InlineNodejsFunctionProps <a name="InlineNodejsFunctionProps" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps"></a>

Properties for InlineNodejsFunction.

#### Initializer <a name="Initializer" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.Initializer"></a>

```typescript
import { InlineNodejsFunctionProps } from '@open-constructs/aws-cdk'

const inlineNodejsFunctionProps: InlineNodejsFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.adotInstrumentation">adotInstrumentation</a></code> | <code>aws-cdk-lib.aws_lambda.AdotInstrumentationConfig</code> | Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | Sets the application log level for the function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.logFormat">logFormat</a></code> | <code>string</code> | Sets the logFormat for the function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | Sets the log group name for the function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.paramsAndSecrets">paramsAndSecrets</a></code> | <code>aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion</code> | Specify the configuration of Parameters and Secrets Extension. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.runtimeManagementMode">runtimeManagementMode</a></code> | <code>aws-cdk-lib.aws_lambda.RuntimeManagementMode</code> | Sets the runtime management configuration for a function's version. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.snapStart">snapStart</a></code> | <code>aws-cdk-lib.aws_lambda.SnapStartConf</code> | Enable SnapStart for Lambda Function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | Sets the system log level for the function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.entry">entry</a></code> | <code>string</code> | Path to the entry file (JavaScript only). |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.handler">handler</a></code> | <code>string</code> | The name of the exported handler in the entry file. |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.minifyEngine">minifyEngine</a></code> | <code><a href="#@open-constructs/aws-cdk.MinifyEngine">MinifyEngine</a></code> | Default is "SIMPLE". |
| <code><a href="#@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime environment. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `adotInstrumentation`<sup>Optional</sup> <a name="adotInstrumentation" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.adotInstrumentation"></a>

```typescript
public readonly adotInstrumentation: AdotInstrumentationConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.AdotInstrumentationConfig
- *Default:* No ADOT instrumentation

Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation.

> [https://aws-otel.github.io/docs/getting-started/lambda](https://aws-otel.github.io/docs/getting-started/lambda)

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllOutbound` directly on the security group.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### `applicationLogLevel`<sup>Optional</sup> <a name="applicationLogLevel" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string
- *Default:* INFO

Sets the application log level for the function.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string
- *Default:* Text format

Sets the logFormat for the function.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* `/aws/lambda/${this.functionName}` default log group name created by Lambda

Sets the log group name for the function.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `paramsAndSecrets`<sup>Optional</sup> <a name="paramsAndSecrets" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.paramsAndSecrets"></a>

```typescript
public readonly paramsAndSecrets: ParamsAndSecretsLayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion
- *Default:* No Parameters and Secrets Extension

Specify the configuration of Parameters and Secrets Extension.

> [https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html)

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `runtimeManagementMode`<sup>Optional</sup> <a name="runtimeManagementMode" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.runtimeManagementMode"></a>

```typescript
public readonly runtimeManagementMode: RuntimeManagementMode;
```

- *Type:* aws-cdk-lib.aws_lambda.RuntimeManagementMode
- *Default:* Auto

Sets the runtime management configuration for a function's version.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.snapStart"></a>

```typescript
public readonly snapStart: SnapStartConf;
```

- *Type:* aws-cdk-lib.aws_lambda.SnapStartConf
- *Default:* No snapstart

Enable SnapStart for Lambda Function.

SnapStart is currently supported only for Java 11, 17 runtime

---

##### `systemLogLevel`<sup>Optional</sup> <a name="systemLogLevel" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string
- *Default:* INFO

Sets the system log level for the function.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

This requires `vpc` to be specified in order for interfaces to actually be
placed in the subnets. If `vpc` is not specify, this will raise an error.

Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).

---

##### `entry`<sup>Optional</sup> <a name="entry" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.entry"></a>

```typescript
public readonly entry: string;
```

- *Type:* string

Path to the entry file (JavaScript only).

If you are using typescript, just pass the path to the compiled .js file.

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string
- *Default:* index.handler

The name of the exported handler in the entry file.

---

##### `minifyEngine`<sup>Optional</sup> <a name="minifyEngine" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.minifyEngine"></a>

```typescript
public readonly minifyEngine: MinifyEngine;
```

- *Type:* <a href="#@open-constructs/aws-cdk.MinifyEngine">MinifyEngine</a>

Default is "SIMPLE".

See {@link MinifyEngine} for values.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@open-constructs/aws-cdk.InlineNodejsFunctionProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime
- *Default:* Runtime.NODEJS_18_X

The runtime environment.

Only runtimes of the Node.js family are
supported.

---

### LateBoundStepFunctionsStartExecutionProps <a name="LateBoundStepFunctionsStartExecutionProps" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps"></a>

Properties for LateBoundStepFunctionsStartExecution.

#### Initializer <a name="Initializer" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.Initializer"></a>

```typescript
import { LateBoundStepFunctionsStartExecutionProps } from '@open-constructs/aws-cdk'

const lateBoundStepFunctionsStartExecutionProps: LateBoundStepFunctionsStartExecutionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReportProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket to place the cost report into. |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReportProps.property.costReportName">costReportName</a></code> | <code>string</code> | The name of the cost report. |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReportProps.property.format">format</a></code> | <code>@open-constructs/aws-cdk.aws_cur.CurFormat</code> | The format to use for the cost and usage report. |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReportProps.property.reportGranularity">reportGranularity</a></code> | <code>@open-constructs/aws-cdk.aws_cur.ReportGranularity</code> | The granularity of the line items in the report. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@open-constructs/aws-cdk.aws_cur.CostReportProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* a new bucket will be created.

The bucket to place the cost report into.

If non is provided, a new bucket will be created.

---

##### `costReportName`<sup>Optional</sup> <a name="costReportName" id="@open-constructs/aws-cdk.aws_cur.CostReportProps.property.costReportName"></a>

```typescript
public readonly costReportName: string;
```

- *Type:* string
- *Default:* 'default-cur'

The name of the cost report.

---

##### `format`<sup>Optional</sup> <a name="format" id="@open-constructs/aws-cdk.aws_cur.CostReportProps.property.format"></a>

```typescript
public readonly format: CurFormat;
```

- *Type:* @open-constructs/aws-cdk.aws_cur.CurFormat
- *Default:* TEXT_OR_CSV

The format to use for the cost and usage report.

---

##### `reportGranularity`<sup>Optional</sup> <a name="reportGranularity" id="@open-constructs/aws-cdk.aws_cur.CostReportProps.property.reportGranularity"></a>

```typescript
public readonly reportGranularity: ReportGranularity;
```

- *Type:* @open-constructs/aws-cdk.aws_cur.ReportGranularity
- *Default:* HOURLY

The granularity of the line items in the report.
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.comment">comment</a></code> | <code>string</code> | An optional description for this state. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Credentials</code> | Credentials for an IAM Role that the State Machine assumes for executing the task. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.heartbeat">heartbeat</a></code> | <code>aws-cdk-lib.Duration</code> | Timeout for the heartbeat. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.heartbeatTimeout">heartbeatTimeout</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Timeout</code> | Timeout for the heartbeat. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.inputPath">inputPath</a></code> | <code>string</code> | JSONPath expression to select part of the state to be the input to this state. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.integrationPattern">integrationPattern</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IntegrationPattern</code> | AWS Step Functions integrates with services directly in the Amazon States Language. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.outputPath">outputPath</a></code> | <code>string</code> | JSONPath expression to select select a portion of the state output to pass to the next state. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.resultPath">resultPath</a></code> | <code>string</code> | JSONPath expression to indicate where to inject the state's output. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.resultSelector">resultSelector</a></code> | <code>{[ key: string ]: any}</code> | The JSON that will replace the state's raw result and become the effective result before ResultPath is applied. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.stateName">stateName</a></code> | <code>string</code> | Optional name for this state. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.taskTimeout">taskTimeout</a></code> | <code>aws-cdk-lib.aws_stepfunctions.Timeout</code> | Timeout for the task. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | Timeout for the task. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.associateWithParent">associateWithParent</a></code> | <code>boolean</code> | Pass the execution ID from the context object to the execution input. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.input">input</a></code> | <code>aws-cdk-lib.aws_stepfunctions.TaskInput</code> | The JSON input for the execution, same as that of StartExecution. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.name">name</a></code> | <code>string</code> | The name of the execution, same as that of StartExecution. |
| <code><a href="#@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.stateMachineArnPath">stateMachineArnPath</a></code> | <code>string</code> | Where in the event the arn of the stateMachine to call is stored. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string
- *Default:* No comment

An optional description for this state.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.credentials"></a>

```typescript
public readonly credentials: Credentials;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Credentials
- *Default:* None (Task is executed using the State Machine's execution role)

Credentials for an IAM Role that the State Machine assumes for executing the task.

This enables cross-account resource invocations.

> [https://docs.aws.amazon.com/step-functions/latest/dg/concepts-access-cross-acct-resources.html](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-access-cross-acct-resources.html)

---

##### ~~`heartbeat`~~<sup>Optional</sup> <a name="heartbeat" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.heartbeat"></a>

- *Deprecated:* use `heartbeatTimeout`

```typescript
public readonly heartbeat: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* None

Timeout for the heartbeat.

---

##### `heartbeatTimeout`<sup>Optional</sup> <a name="heartbeatTimeout" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.heartbeatTimeout"></a>

```typescript
public readonly heartbeatTimeout: Timeout;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Timeout
- *Default:* None

Timeout for the heartbeat.

[disable-awslint:duration-prop-type] is needed because all props interface in
aws-stepfunctions-tasks extend this interface

---

##### `inputPath`<sup>Optional</sup> <a name="inputPath" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.inputPath"></a>

```typescript
public readonly inputPath: string;
```

- *Type:* string
- *Default:* The entire task input (JSON path '$')

JSONPath expression to select part of the state to be the input to this state.

May also be the special value JsonPath.DISCARD, which will cause the effective
input to be the empty object {}.

---

##### `integrationPattern`<sup>Optional</sup> <a name="integrationPattern" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.integrationPattern"></a>

```typescript
public readonly integrationPattern: IntegrationPattern;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.IntegrationPattern
- *Default:* `IntegrationPattern.REQUEST_RESPONSE` for most tasks. `IntegrationPattern.RUN_JOB` for the following exceptions: `BatchSubmitJob`, `EmrAddStep`, `EmrCreateCluster`, `EmrTerminationCluster`, and `EmrContainersStartJobRun`.

AWS Step Functions integrates with services directly in the Amazon States Language.

You can control these AWS services using service integration patterns

> [https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token)

---

##### `outputPath`<sup>Optional</sup> <a name="outputPath" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.outputPath"></a>

```typescript
public readonly outputPath: string;
```

- *Type:* string
- *Default:* The entire JSON node determined by the state input, the task result, and resultPath is passed to the next state (JSON path '$')

JSONPath expression to select select a portion of the state output to pass to the next state.

May also be the special value JsonPath.DISCARD, which will cause the effective
output to be the empty object {}.

---

##### `resultPath`<sup>Optional</sup> <a name="resultPath" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.resultPath"></a>

```typescript
public readonly resultPath: string;
```

- *Type:* string
- *Default:* Replaces the entire input with the result (JSON path '$')

JSONPath expression to indicate where to inject the state's output.

May also be the special value JsonPath.DISCARD, which will cause the state's
input to become its output.

---

##### `resultSelector`<sup>Optional</sup> <a name="resultSelector" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.resultSelector"></a>

```typescript
public readonly resultSelector: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* None

The JSON that will replace the state's raw result and become the effective result before ResultPath is applied.

You can use ResultSelector to create a payload with values that are static
or selected from the state's raw result.

> [https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-resultselector](https://docs.aws.amazon.com/step-functions/latest/dg/input-output-inputpath-params.html#input-output-resultselector)

---

##### `stateName`<sup>Optional</sup> <a name="stateName" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.stateName"></a>

```typescript
public readonly stateName: string;
```

- *Type:* string
- *Default:* The construct ID will be used as state name

Optional name for this state.

---

##### `taskTimeout`<sup>Optional</sup> <a name="taskTimeout" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.taskTimeout"></a>

```typescript
public readonly taskTimeout: Timeout;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.Timeout
- *Default:* None

Timeout for the task.

[disable-awslint:duration-prop-type] is needed because all props interface in
aws-stepfunctions-tasks extend this interface

---

##### ~~`timeout`~~<sup>Optional</sup> <a name="timeout" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.timeout"></a>

- *Deprecated:* use `taskTimeout`

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* None

Timeout for the task.

---

##### `associateWithParent`<sup>Optional</sup> <a name="associateWithParent" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.associateWithParent"></a>

```typescript
public readonly associateWithParent: boolean;
```

- *Type:* boolean
- *Default:* false

Pass the execution ID from the context object to the execution input.

This allows the Step Functions UI to link child executions from parent executions, making it easier to trace execution flow across state machines.

If you set this property to `true`, the `input` property must be an object (provided by `TaskInput.fromObject`) or omitted entirely.

> [https://docs.aws.amazon.com/step-functions/latest/dg/concepts-nested-workflows.html#nested-execution-startid](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-nested-workflows.html#nested-execution-startid)

---

##### `input`<sup>Optional</sup> <a name="input" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.input"></a>

```typescript
public readonly input: TaskInput;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.TaskInput
- *Default:* The state input (JSON path '$')

The JSON input for the execution, same as that of StartExecution.

> [https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html)

---

##### `name`<sup>Optional</sup> <a name="name" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* None

The name of the execution, same as that of StartExecution.

> [https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html)

---

##### `stateMachineArnPath`<sup>Optional</sup> <a name="stateMachineArnPath" id="@open-constructs/aws-cdk.LateBoundStepFunctionsStartExecutionProps.property.stateMachineArnPath"></a>

```typescript
public readonly stateMachineArnPath: string;
```

- *Type:* string
- *Default:* "$.stateMachineArn"

Where in the event the arn of the stateMachine to call is stored.

---

### LoggerProps <a name="LoggerProps" id="@open-constructs/aws-cdk.LoggerProps"></a>

#### Initializer <a name="Initializer" id="@open-constructs/aws-cdk.LoggerProps.Initializer"></a>

```typescript
import { LoggerProps } from '@open-constructs/aws-cdk'

const loggerProps: LoggerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.LoggerProps.property.logLevel">logLevel</a></code> | <code>number</code> | # Note: This is a number to support custom log levels (e.g. FATAL = 0.5). |

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@open-constructs/aws-cdk.LoggerProps.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

# Note: This is a number to support custom log levels (e.g. FATAL = 0.5).

---

### ServiceQueryResult <a name="ServiceQueryResult" id="@open-constructs/aws-cdk.ServiceQueryResult"></a>

The result of a service query.

#### Initializer <a name="Initializer" id="@open-constructs/aws-cdk.ServiceQueryResult.Initializer"></a>

```typescript
import { ServiceQueryResult } from '@open-constructs/aws-cdk'

const serviceQueryResult: ServiceQueryResult = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ServiceQueryResult.property.scope">scope</a></code> | <code>constructs.IConstruct</code> | A scope with that value for it's service property. |
| <code><a href="#@open-constructs/aws-cdk.ServiceQueryResult.property.service">service</a></code> | <code>any</code> | The service property of the scope. |
| <code><a href="#@open-constructs/aws-cdk.ServiceQueryResult.property.servicePropertyName">servicePropertyName</a></code> | <code>string</code> | The particular service that was queried. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ServiceQueryResult.property.scope"></a>

```typescript
public readonly scope: IConstruct;
```

- *Type:* constructs.IConstruct

A scope with that value for it's service property.

---

##### `service`<sup>Required</sup> <a name="service" id="@open-constructs/aws-cdk.ServiceQueryResult.property.service"></a>

```typescript
public readonly service: any;
```

- *Type:* any

The service property of the scope.

---

##### `servicePropertyName`<sup>Required</sup> <a name="servicePropertyName" id="@open-constructs/aws-cdk.ServiceQueryResult.property.servicePropertyName"></a>

```typescript
public readonly servicePropertyName: string;
```

- *Type:* string

The particular service that was queried.

---

### StepFunctionTaskProps <a name="StepFunctionTaskProps" id="@open-constructs/aws-cdk.StepFunctionTaskProps"></a>

Properties for StepFunctionTask.

#### Initializer <a name="Initializer" id="@open-constructs/aws-cdk.StepFunctionTaskProps.Initializer"></a>

```typescript
import { StepFunctionTaskProps } from '@open-constructs/aws-cdk'

const stepFunctionTaskProps: StepFunctionTaskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTaskProps.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IStateMachine</code> | The state machine to execute. |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTaskProps.property.defaults">defaults</a></code> | <code>{[ key: string ]: string}</code> | Default attribute values to use when the StepFunction output does not contain a requested value. |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTaskProps.property.inputEvent">inputEvent</a></code> | <code>any</code> | The event to start the state machine with. |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTaskProps.property.prefix">prefix</a></code> | <code>string</code> | Prefix for the execution. |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTaskProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Role for execution and monitoring.  Must have permission to execute and describe the state machine, as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```. |
| <code><a href="#@open-constructs/aws-cdk.StepFunctionTaskProps.property.totalTimeout">totalTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | Total timeout for the entire operation. |

---

##### `stateMachine`<sup>Required</sup> <a name="stateMachine" id="@open-constructs/aws-cdk.StepFunctionTaskProps.property.stateMachine"></a>

```typescript
public readonly stateMachine: IStateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.IStateMachine

The state machine to execute.

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@open-constructs/aws-cdk.StepFunctionTaskProps.property.defaults"></a>

```typescript
public readonly defaults: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Default attribute values to use when the StepFunction output does not contain a requested value.

---

##### `inputEvent`<sup>Optional</sup> <a name="inputEvent" id="@open-constructs/aws-cdk.StepFunctionTaskProps.property.inputEvent"></a>

```typescript
public readonly inputEvent: any;
```

- *Type:* any

The event to start the state machine with.

Should only be provided with stateMachine, not with stateMachineExecutionArn.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@open-constructs/aws-cdk.StepFunctionTaskProps.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Prefix for the execution.

---

##### `role`<sup>Optional</sup> <a name="role" id="@open-constructs/aws-cdk.StepFunctionTaskProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Role for execution and monitoring.  Must have permission to execute and describe the state machine, as well as ```ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole")```.

If not provided, a role will be created.

---

##### `totalTimeout`<sup>Optional</sup> <a name="totalTimeout" id="@open-constructs/aws-cdk.StepFunctionTaskProps.property.totalTimeout"></a>

```typescript
public readonly totalTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(2)

Total timeout for the entire operation.

The maximum timeout is unknown, but less than 500 hours (yes, it can
exceed the AWS Lambda 15 minutes)

---

## Classes <a name="Classes" id="Classes"></a>

### AppConstructTreeService <a name="AppConstructTreeService" id="@open-constructs/aws-cdk.AppConstructTreeService"></a>

An App-scoped service that is found by looking up the tree.

Found services are cached on the querying scope to speed up subsequent lookups.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.AppConstructTreeService.Initializer"></a>

```typescript
import { AppConstructTreeService } from '@open-constructs/aws-cdk'

new AppConstructTreeService(treeServiceProps: ConstructTreeServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.Initializer.parameter.treeServiceProps">treeServiceProps</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="@open-constructs/aws-cdk.AppConstructTreeService.Initializer.parameter.treeServiceProps"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.of">of</a></code> | Returns the cached service on an object, or creates one if none is available up the hierarchy. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.searchUpOrCreate">searchUpOrCreate</a></code> | Searches towards the root for a value. |

---

##### `get` <a name="get" id="@open-constructs/aws-cdk.AppConstructTreeService.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppConstructTreeService.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="@open-constructs/aws-cdk.AppConstructTreeService.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppConstructTreeService.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="@open-constructs/aws-cdk.AppConstructTreeService.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppConstructTreeService.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.AppConstructTreeService.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="@open-constructs/aws-cdk.AppConstructTreeService.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppConstructTreeService.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="@open-constructs/aws-cdk.AppConstructTreeService.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppConstructTreeService.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="@open-constructs/aws-cdk.AppConstructTreeService.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppConstructTreeService.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.AppConstructTreeService.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="@open-constructs/aws-cdk.AppConstructTreeService.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppConstructTreeService.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="@open-constructs/aws-cdk.AppConstructTreeService.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="@open-constructs/aws-cdk.AppConstructTreeService.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppConstructTreeService.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="@open-constructs/aws-cdk.AppConstructTreeService.setFactory.parameter.factory"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a>

---

##### `of` <a name="of" id="@open-constructs/aws-cdk.AppConstructTreeService.of"></a>

```typescript
public of(scope: IConstruct): any
```

Returns the cached service on an object, or creates one if none is available up the hierarchy.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppConstructTreeService.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUpOrCreate` <a name="searchUpOrCreate" id="@open-constructs/aws-cdk.AppConstructTreeService.searchUpOrCreate"></a>

```typescript
public searchUpOrCreate(scope: IConstruct): ServiceQueryResult
```

Searches towards the root for a value.

If the value is found,
cache the value on the scope (to speed up future gets) and
return the pair.  If not, call the factory to create a value and
cache it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppConstructTreeService.searchUpOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="@open-constructs/aws-cdk.AppConstructTreeService.isFactory"></a>

```typescript
import { AppConstructTreeService } from '@open-constructs/aws-cdk'

AppConstructTreeService.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="@open-constructs/aws-cdk.AppConstructTreeService.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="@open-constructs/aws-cdk.AppConstructTreeService.scopeOf"></a>

```typescript
import { AppConstructTreeService } from '@open-constructs/aws-cdk'

AppConstructTreeService.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@open-constructs/aws-cdk.AppConstructTreeService.scopeOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="@open-constructs/aws-cdk.AppConstructTreeService.scopesOf"></a>

```typescript
import { AppConstructTreeService } from '@open-constructs/aws-cdk'

AppConstructTreeService.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="@open-constructs/aws-cdk.AppConstructTreeService.scopesOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="@open-constructs/aws-cdk.AppConstructTreeService.serviceOf"></a>

```typescript
import { AppConstructTreeService } from '@open-constructs/aws-cdk'

AppConstructTreeService.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@open-constructs/aws-cdk.AppConstructTreeService.serviceOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.property.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.property.treeServiceProps">treeServiceProps</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.AppConstructTreeService.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a>

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="@open-constructs/aws-cdk.AppConstructTreeService.property.treeServiceProps"></a>

```typescript
public readonly treeServiceProps: ConstructTreeServiceProps;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---


### AppToken <a name="AppToken" id="@open-constructs/aws-cdk.AppToken"></a>

Provides a way to map named tokens to their producers.

Names should be unique within the app.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.AppToken.Initializer"></a>

```typescript
import { AppToken } from '@open-constructs/aws-cdk'

new AppToken()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.AppToken.any">any</a></code> | Creates a named token. |
| <code><a href="#@open-constructs/aws-cdk.AppToken.list">list</a></code> | Creates a named token. |
| <code><a href="#@open-constructs/aws-cdk.AppToken.number">number</a></code> | Creates a named token. |
| <code><a href="#@open-constructs/aws-cdk.AppToken.resolveAny">resolveAny</a></code> | Registers a resolver for the named token. |
| <code><a href="#@open-constructs/aws-cdk.AppToken.resolveList">resolveList</a></code> | Registers a resolver for the named token. |
| <code><a href="#@open-constructs/aws-cdk.AppToken.resolveNumber">resolveNumber</a></code> | Registers a resolver for the named token. |
| <code><a href="#@open-constructs/aws-cdk.AppToken.resolveString">resolveString</a></code> | Registers a resolver for the named token. |
| <code><a href="#@open-constructs/aws-cdk.AppToken.string">string</a></code> | Creates a named token. |

---

##### `any` <a name="any" id="@open-constructs/aws-cdk.AppToken.any"></a>

```typescript
import { AppToken } from '@open-constructs/aws-cdk'

AppToken.any(scope: IConstruct, name: string, options?: LazyAnyValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppToken.any.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.AppToken.any.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.AppToken.any.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyAnyValueOptions

---

##### `list` <a name="list" id="@open-constructs/aws-cdk.AppToken.list"></a>

```typescript
import { AppToken } from '@open-constructs/aws-cdk'

AppToken.list(scope: IConstruct, name: string, options?: LazyListValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppToken.list.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.AppToken.list.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.AppToken.list.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyListValueOptions

---

##### `number` <a name="number" id="@open-constructs/aws-cdk.AppToken.number"></a>

```typescript
import { AppToken } from '@open-constructs/aws-cdk'

AppToken.number(scope: IConstruct, name: string)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppToken.number.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.AppToken.number.parameter.name"></a>

- *Type:* string

---

##### `resolveAny` <a name="resolveAny" id="@open-constructs/aws-cdk.AppToken.resolveAny"></a>

```typescript
import { AppToken } from '@open-constructs/aws-cdk'

AppToken.resolveAny(scope: IConstruct, name: string, producer: IStableAnyProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppToken.resolveAny.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.AppToken.resolveAny.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@open-constructs/aws-cdk.AppToken.resolveAny.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableAnyProducer

---

##### `resolveList` <a name="resolveList" id="@open-constructs/aws-cdk.AppToken.resolveList"></a>

```typescript
import { AppToken } from '@open-constructs/aws-cdk'

AppToken.resolveList(scope: IConstruct, name: string, producer: IStableListProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppToken.resolveList.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.AppToken.resolveList.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@open-constructs/aws-cdk.AppToken.resolveList.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableListProducer

---

##### `resolveNumber` <a name="resolveNumber" id="@open-constructs/aws-cdk.AppToken.resolveNumber"></a>

```typescript
import { AppToken } from '@open-constructs/aws-cdk'

AppToken.resolveNumber(scope: IConstruct, name: string, producer: IStableNumberProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppToken.resolveNumber.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.AppToken.resolveNumber.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@open-constructs/aws-cdk.AppToken.resolveNumber.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableNumberProducer

---

##### `resolveString` <a name="resolveString" id="@open-constructs/aws-cdk.AppToken.resolveString"></a>

```typescript
import { AppToken } from '@open-constructs/aws-cdk'

AppToken.resolveString(scope: IConstruct, name: string, producer: IStableStringProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppToken.resolveString.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.AppToken.resolveString.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@open-constructs/aws-cdk.AppToken.resolveString.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableStringProducer

---

##### `string` <a name="string" id="@open-constructs/aws-cdk.AppToken.string"></a>

```typescript
import { AppToken } from '@open-constructs/aws-cdk'

AppToken.string(scope: IConstruct, name: string, options?: LazyStringValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppToken.string.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.AppToken.string.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.AppToken.string.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyStringValueOptions

---



### CfnElementUtilities <a name="CfnElementUtilities" id="@open-constructs/aws-cdk.CfnElementUtilities"></a>

Utilities for use with CfnElement.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.CfnElementUtilities.Initializer"></a>

```typescript
import { CfnElementUtilities } from '@open-constructs/aws-cdk'

new CfnElementUtilities()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.CfnElementUtilities.cfnElementHost">cfnElementHost</a></code> | Returns the antecedent cnfElement in the tree  (if any). |
| <code><a href="#@open-constructs/aws-cdk.CfnElementUtilities.cfnElements">cfnElements</a></code> | Returns a list of all L1 construct descendents of the scope. |

---

##### `cfnElementHost` <a name="cfnElementHost" id="@open-constructs/aws-cdk.CfnElementUtilities.cfnElementHost"></a>

```typescript
public cfnElementHost(scope: Construct): IConstruct
```

Returns the antecedent cnfElement in the tree  (if any).

Basially, CfnElement.of (like Stack.of).

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.CfnElementUtilities.cfnElementHost.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `cfnElements` <a name="cfnElements" id="@open-constructs/aws-cdk.CfnElementUtilities.cfnElements"></a>

```typescript
public cfnElements(scope: Construct): CfnElement[]
```

Returns a list of all L1 construct descendents of the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.CfnElementUtilities.cfnElements.parameter.scope"></a>

- *Type:* constructs.Construct

---




### CfnIncludeToCdk <a name="CfnIncludeToCdk" id="@open-constructs/aws-cdk.CfnIncludeToCdk"></a>

Utilities for converting resources from CfnInclude to a CDK L2-derived class.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.CfnIncludeToCdk.Initializer"></a>

```typescript
import { CfnIncludeToCdk } from '@open-constructs/aws-cdk'

new CfnIncludeToCdk()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.CfnIncludeToCdk.findIncluded">findIncluded</a></code> | Finds a construct from CfnIncludes in scope with the given logicalId. |
| <code><a href="#@open-constructs/aws-cdk.CfnIncludeToCdk.isCfnInclude">isCfnInclude</a></code> | Returns true if the given construct is an instance of CfnInclude. |
| <code><a href="#@open-constructs/aws-cdk.CfnIncludeToCdk.removeIncluded">removeIncluded</a></code> | Removes a construct from CfnInclude with the given logicalId. |
| <code><a href="#@open-constructs/aws-cdk.CfnIncludeToCdk.replaceIncluded">replaceIncluded</a></code> | Replaces an L1 construct in a CfnInclude with an L1 or L2 CDK construct of your choosing. |
| <code><a href="#@open-constructs/aws-cdk.CfnIncludeToCdk.setLogicalId">setLogicalId</a></code> | Sets the logical ID of the resource to the Node ID of the construct. |

---

##### `findIncluded` <a name="findIncluded" id="@open-constructs/aws-cdk.CfnIncludeToCdk.findIncluded"></a>

```typescript
import { CfnIncludeToCdk } from '@open-constructs/aws-cdk'

CfnIncludeToCdk.findIncluded(logicalId: string, scope: Construct)
```

Finds a construct from CfnIncludes in scope with the given logicalId.

###### `logicalId`<sup>Required</sup> <a name="logicalId" id="@open-constructs/aws-cdk.CfnIncludeToCdk.findIncluded.parameter.logicalId"></a>

- *Type:* string

---

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.CfnIncludeToCdk.findIncluded.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `isCfnInclude` <a name="isCfnInclude" id="@open-constructs/aws-cdk.CfnIncludeToCdk.isCfnInclude"></a>

```typescript
import { CfnIncludeToCdk } from '@open-constructs/aws-cdk'

CfnIncludeToCdk.isCfnInclude(x?: IConstruct)
```

Returns true if the given construct is an instance of CfnInclude.

###### `x`<sup>Optional</sup> <a name="x" id="@open-constructs/aws-cdk.CfnIncludeToCdk.isCfnInclude.parameter.x"></a>

- *Type:* constructs.IConstruct

---

##### `removeIncluded` <a name="removeIncluded" id="@open-constructs/aws-cdk.CfnIncludeToCdk.removeIncluded"></a>

```typescript
import { CfnIncludeToCdk } from '@open-constructs/aws-cdk'

CfnIncludeToCdk.removeIncluded(logicalId: string, scope: Construct)
```

Removes a construct from CfnInclude with the given logicalId.

Finds the CfnInclude in the stack of the given scope.

###### `logicalId`<sup>Required</sup> <a name="logicalId" id="@open-constructs/aws-cdk.CfnIncludeToCdk.removeIncluded.parameter.logicalId"></a>

- *Type:* string

---

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.CfnIncludeToCdk.removeIncluded.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `replaceIncluded` <a name="replaceIncluded" id="@open-constructs/aws-cdk.CfnIncludeToCdk.replaceIncluded"></a>

```typescript
import { CfnIncludeToCdk } from '@open-constructs/aws-cdk'

CfnIncludeToCdk.replaceIncluded(logicalId: string, replacementConstruct: Construct)
```

Replaces an L1 construct in a CfnInclude with an L1 or L2 CDK construct of your choosing.

Removes the original imported L1 for the construct from the CfnInclude.
- Sets the logical resource ID of the replacement to the correct value so it acts as a drop-in replacement.

If the L1 cannot be found, this function assumes the related CfnInclude is converted
and was removed from the stack.

FUTURE: Ensure the new construct is of the same resource type as the old one?  Is that useful?

###### `logicalId`<sup>Required</sup> <a name="logicalId" id="@open-constructs/aws-cdk.CfnIncludeToCdk.replaceIncluded.parameter.logicalId"></a>

- *Type:* string

Logical ID of the construct we are replacing.

---

###### `replacementConstruct`<sup>Required</sup> <a name="replacementConstruct" id="@open-constructs/aws-cdk.CfnIncludeToCdk.replaceIncluded.parameter.replacementConstruct"></a>

- *Type:* constructs.Construct

Construct that should be replacing the included construct.

---

##### `setLogicalId` <a name="setLogicalId" id="@open-constructs/aws-cdk.CfnIncludeToCdk.setLogicalId"></a>

```typescript
import { CfnIncludeToCdk } from '@open-constructs/aws-cdk'

CfnIncludeToCdk.setLogicalId(construct: Construct, id?: string)
```

Sets the logical ID of the resource to the Node ID of the construct.

This should be used when you want the resource ID to be the same as the Node ID.
Such as when you are replicating an existing hand-crafted template.

Note:  This function L1 or L2 constructs, or any case where there is one L1 in the
sub-tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@open-constructs/aws-cdk.CfnIncludeToCdk.setLogicalId.parameter.construct"></a>

- *Type:* constructs.Construct

The resource construct.

---

###### `id`<sup>Optional</sup> <a name="id" id="@open-constructs/aws-cdk.CfnIncludeToCdk.setLogicalId.parameter.id"></a>

- *Type:* string

---



### ConstructHost <a name="ConstructHost" id="@open-constructs/aws-cdk.ConstructHost"></a>

Helper class to make it easier for a construct to "host" constructs of a specific type, as defined by Construct RTTI.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.ConstructHost.Initializer"></a>

```typescript
import { ConstructHost } from '@open-constructs/aws-cdk'

new ConstructHost(props: ConstructHostProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructHost.Initializer.parameter.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructHostProps">ConstructHostProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.ConstructHost.Initializer.parameter.props"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructHostProps">ConstructHostProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructHost.getHostedConstructs">getHostedConstructs</a></code> | Returns constructs that match the hosted type that are under scope. |

---

##### `getHostedConstructs` <a name="getHostedConstructs" id="@open-constructs/aws-cdk.ConstructHost.getHostedConstructs"></a>

```typescript
public getHostedConstructs(scope: IConstruct): IConstruct[]
```

Returns constructs that match the hosted type that are under scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructHost.getHostedConstructs.parameter.scope"></a>

- *Type:* constructs.IConstruct

Scope for the search.

Not required to be the host.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructHost.property.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructHostProps">ConstructHostProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.ConstructHost.property.props"></a>

```typescript
public readonly props: ConstructHostProps;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructHostProps">ConstructHostProps</a>

---


### ConstructRunTimeTypeInfo <a name="ConstructRunTimeTypeInfo" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo"></a>

This class should be used for symbol-based Construct RTTI.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.Initializer"></a>

```typescript
import { ConstructRunTimeTypeInfo } from '@open-constructs/aws-cdk'

new ConstructRunTimeTypeInfo(props: ConstructServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.Initializer.parameter.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.Initializer.parameter.props"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.addRtti">addRtti</a></code> | Sets the RTTI of the construct.  Should be called from a Construct constructor. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.hasRtti">hasRtti</a></code> | Returns true if the construct has this RTTI set on it. |

---

##### `get` <a name="get" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.setFactory.parameter.factory"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a>

---

##### `addRtti` <a name="addRtti" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.addRtti"></a>

```typescript
public addRtti(scope: IConstruct): any
```

Sets the RTTI of the construct.  Should be called from a Construct constructor.

Obviously a construct can have many of these, so be thoughtful.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.addRtti.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `hasRtti` <a name="hasRtti" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.hasRtti"></a>

```typescript
public hasRtti(scope: IConstruct): boolean
```

Returns true if the construct has this RTTI set on it.

Used to implement ConstructXXX:isConstructXXX functions.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.hasRtti.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.isFactory"></a>

```typescript
import { ConstructRunTimeTypeInfo } from '@open-constructs/aws-cdk'

ConstructRunTimeTypeInfo.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.scopeOf"></a>

```typescript
import { ConstructRunTimeTypeInfo } from '@open-constructs/aws-cdk'

ConstructRunTimeTypeInfo.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.scopeOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.scopesOf"></a>

```typescript
import { ConstructRunTimeTypeInfo } from '@open-constructs/aws-cdk'

ConstructRunTimeTypeInfo.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.scopesOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.serviceOf"></a>

```typescript
import { ConstructRunTimeTypeInfo } from '@open-constructs/aws-cdk'

ConstructRunTimeTypeInfo.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.serviceOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.property.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a>

---


### ConstructService <a name="ConstructService" id="@open-constructs/aws-cdk.ConstructService"></a>

Defines a service (symbol-keyed property) that can be stored on a construct.

Symbol-keyed properties are rarely used directly by end users.  Usage is normally
through construct methods, such as Stack.of and Stack.isStack in the CDK.

This class and it's derivatives make it easier to use symbol-keyed properites in the CDK.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.ConstructService.Initializer"></a>

```typescript
import { ConstructService } from '@open-constructs/aws-cdk'

new ConstructService(props: ConstructServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.Initializer.parameter.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.ConstructService.Initializer.parameter.props"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |

---

##### `get` <a name="get" id="@open-constructs/aws-cdk.ConstructService.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructService.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="@open-constructs/aws-cdk.ConstructService.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructService.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="@open-constructs/aws-cdk.ConstructService.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructService.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.ConstructService.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="@open-constructs/aws-cdk.ConstructService.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructService.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="@open-constructs/aws-cdk.ConstructService.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructService.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="@open-constructs/aws-cdk.ConstructService.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructService.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.ConstructService.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="@open-constructs/aws-cdk.ConstructService.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructService.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="@open-constructs/aws-cdk.ConstructService.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="@open-constructs/aws-cdk.ConstructService.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructService.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="@open-constructs/aws-cdk.ConstructService.setFactory.parameter.factory"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="@open-constructs/aws-cdk.ConstructService.isFactory"></a>

```typescript
import { ConstructService } from '@open-constructs/aws-cdk'

ConstructService.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="@open-constructs/aws-cdk.ConstructService.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="@open-constructs/aws-cdk.ConstructService.scopeOf"></a>

```typescript
import { ConstructService } from '@open-constructs/aws-cdk'

ConstructService.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@open-constructs/aws-cdk.ConstructService.scopeOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="@open-constructs/aws-cdk.ConstructService.scopesOf"></a>

```typescript
import { ConstructService } from '@open-constructs/aws-cdk'

ConstructService.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="@open-constructs/aws-cdk.ConstructService.scopesOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="@open-constructs/aws-cdk.ConstructService.serviceOf"></a>

```typescript
import { ConstructService } from '@open-constructs/aws-cdk'

ConstructService.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@open-constructs/aws-cdk.ConstructService.serviceOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.property.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.ConstructService.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a>

---


### ConstructTreeSearch <a name="ConstructTreeSearch" id="@open-constructs/aws-cdk.ConstructTreeSearch"></a>

Searches the construct tree based on predicate and stopConditions.

Three searches are supported: {@link searchSelf}, {@link searchDown}
and {@link searchUp}.

QueryResult should either be, or contain (as a property), the construct itself,
so you know which construct to associate with the query result.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.ConstructTreeSearch.Initializer"></a>

```typescript
import { ConstructTreeSearch } from '@open-constructs/aws-cdk'

new ConstructTreeSearch(predicate: IConstructPredicate)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeSearch.Initializer.parameter.predicate">predicate</a></code> | <code><a href="#@open-constructs/aws-cdk.IConstructPredicate">IConstructPredicate</a></code> | *No description.* |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@open-constructs/aws-cdk.ConstructTreeSearch.Initializer.parameter.predicate"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IConstructPredicate">IConstructPredicate</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeSearch.searchDown">searchDown</a></code> | Returns array of results based on predicate, searching the sub-tree starting at scope. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeSearch.searchSelf">searchSelf</a></code> | Returns T or undefined for the scope, based on predicate. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeSearch.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty. |

---

##### `searchDown` <a name="searchDown" id="@open-constructs/aws-cdk.ConstructTreeSearch.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition, into?: IConstruct[]): IConstruct[]
```

Returns array of results based on predicate, searching the sub-tree starting at scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeSearch.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

Start for search.

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.ConstructTreeSearch.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

End for search (such as sub stack).

---

###### `into`<sup>Optional</sup> <a name="into" id="@open-constructs/aws-cdk.ConstructTreeSearch.searchDown.parameter.into"></a>

- *Type:* constructs.IConstruct[]

Array of results.

Same as return value.

---

##### `searchSelf` <a name="searchSelf" id="@open-constructs/aws-cdk.ConstructTreeSearch.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): IConstruct
```

Returns T or undefined for the scope, based on predicate.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeSearch.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="@open-constructs/aws-cdk.ConstructTreeSearch.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): IConstruct
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty.

Uses stopCondition to decide where to stop the searchUp, defaults to root.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeSearch.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.ConstructTreeSearch.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeSearch.for">for</a></code> | Helper for finding constructs using ConstructTreeSearch with XXX.isXXX functions (such as Stack.isStack and CfnElement.isCfnElement).  Returns a construct predicate that itself returns only the construct, as opposed to ConstructService which returns both the construct and the service. |

---

##### `for` <a name="for" id="@open-constructs/aws-cdk.ConstructTreeSearch.for"></a>

```typescript
import { ConstructTreeSearch } from '@open-constructs/aws-cdk'

ConstructTreeSearch.for(test: IConstuctTest)
```

Helper for finding constructs using ConstructTreeSearch with XXX.isXXX functions (such as Stack.isStack and CfnElement.isCfnElement).  Returns a construct predicate that itself returns only the construct, as opposed to ConstructService which returns both the construct and the service.

###### `test`<sup>Required</sup> <a name="test" id="@open-constructs/aws-cdk.ConstructTreeSearch.for.parameter.test"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IConstuctTest">IConstuctTest</a>

Test to use when finding constructs.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeSearch.property.predicate">predicate</a></code> | <code><a href="#@open-constructs/aws-cdk.IConstructPredicate">IConstructPredicate</a></code> | *No description.* |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@open-constructs/aws-cdk.ConstructTreeSearch.property.predicate"></a>

```typescript
public readonly predicate: IConstructPredicate;
```

- *Type:* <a href="#@open-constructs/aws-cdk.IConstructPredicate">IConstructPredicate</a>

---


### ConstructTreeService <a name="ConstructTreeService" id="@open-constructs/aws-cdk.ConstructTreeService"></a>

An IOC service stored in the construct tree with heirarchical lookup.

If the service is not found on a consturct, it is looked for up the tree and then is cached on
the construct.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.ConstructTreeService.Initializer"></a>

```typescript
import { ConstructTreeService } from '@open-constructs/aws-cdk'

new ConstructTreeService(treeServiceProps: ConstructTreeServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.Initializer.parameter.treeServiceProps">treeServiceProps</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="@open-constructs/aws-cdk.ConstructTreeService.Initializer.parameter.treeServiceProps"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.of">of</a></code> | Returns the cached service on an object, or creates one if none is available up the hierarchy. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.searchUpOrCreate">searchUpOrCreate</a></code> | Searches towards the root for a value. |

---

##### `get` <a name="get" id="@open-constructs/aws-cdk.ConstructTreeService.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeService.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="@open-constructs/aws-cdk.ConstructTreeService.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeService.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="@open-constructs/aws-cdk.ConstructTreeService.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeService.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.ConstructTreeService.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="@open-constructs/aws-cdk.ConstructTreeService.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeService.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="@open-constructs/aws-cdk.ConstructTreeService.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeService.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="@open-constructs/aws-cdk.ConstructTreeService.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeService.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.ConstructTreeService.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="@open-constructs/aws-cdk.ConstructTreeService.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeService.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="@open-constructs/aws-cdk.ConstructTreeService.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="@open-constructs/aws-cdk.ConstructTreeService.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeService.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="@open-constructs/aws-cdk.ConstructTreeService.setFactory.parameter.factory"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a>

---

##### `of` <a name="of" id="@open-constructs/aws-cdk.ConstructTreeService.of"></a>

```typescript
public of(scope: IConstruct): any
```

Returns the cached service on an object, or creates one if none is available up the hierarchy.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeService.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUpOrCreate` <a name="searchUpOrCreate" id="@open-constructs/aws-cdk.ConstructTreeService.searchUpOrCreate"></a>

```typescript
public searchUpOrCreate(scope: IConstruct): ServiceQueryResult
```

Searches towards the root for a value.

If the value is found,
cache the value on the scope (to speed up future gets) and
return the pair.  If not, call the factory to create a value and
cache it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeService.searchUpOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="@open-constructs/aws-cdk.ConstructTreeService.isFactory"></a>

```typescript
import { ConstructTreeService } from '@open-constructs/aws-cdk'

ConstructTreeService.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="@open-constructs/aws-cdk.ConstructTreeService.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="@open-constructs/aws-cdk.ConstructTreeService.scopeOf"></a>

```typescript
import { ConstructTreeService } from '@open-constructs/aws-cdk'

ConstructTreeService.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@open-constructs/aws-cdk.ConstructTreeService.scopeOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="@open-constructs/aws-cdk.ConstructTreeService.scopesOf"></a>

```typescript
import { ConstructTreeService } from '@open-constructs/aws-cdk'

ConstructTreeService.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="@open-constructs/aws-cdk.ConstructTreeService.scopesOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="@open-constructs/aws-cdk.ConstructTreeService.serviceOf"></a>

```typescript
import { ConstructTreeService } from '@open-constructs/aws-cdk'

ConstructTreeService.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@open-constructs/aws-cdk.ConstructTreeService.serviceOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.property.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.property.treeServiceProps">treeServiceProps</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.ConstructTreeService.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a>

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="@open-constructs/aws-cdk.ConstructTreeService.property.treeServiceProps"></a>

```typescript
public readonly treeServiceProps: ConstructTreeServiceProps;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---


### CustomResourceUtilities <a name="CustomResourceUtilities" id="@open-constructs/aws-cdk.CustomResourceUtilities"></a>

Utilities for creating custom resources.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.CustomResourceUtilities.Initializer"></a>

```typescript
import { CustomResourceUtilities } from '@open-constructs/aws-cdk'

new CustomResourceUtilities()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.CustomResourceUtilities.findCustomResource">findCustomResource</a></code> | Returns the CfnResource that produces the custom resource. |
| <code><a href="#@open-constructs/aws-cdk.CustomResourceUtilities.runResourceAlways">runResourceAlways</a></code> | Always run a custom resource. |

---

##### `findCustomResource` <a name="findCustomResource" id="@open-constructs/aws-cdk.CustomResourceUtilities.findCustomResource"></a>

```typescript
public findCustomResource(target: Construct): CfnResource
```

Returns the CfnResource that produces the custom resource.

This function throws
if there are none (or more than one).

###### `target`<sup>Required</sup> <a name="target" id="@open-constructs/aws-cdk.CustomResourceUtilities.findCustomResource.parameter.target"></a>

- *Type:* constructs.Construct

---

##### `runResourceAlways` <a name="runResourceAlways" id="@open-constructs/aws-cdk.CustomResourceUtilities.runResourceAlways"></a>

```typescript
public runResourceAlways(target: Construct): void
```

Always run a custom resource.

Throws if it cannot find one custom resource under target.

###### `target`<sup>Required</sup> <a name="target" id="@open-constructs/aws-cdk.CustomResourceUtilities.runResourceAlways.parameter.target"></a>

- *Type:* constructs.Construct

CustomResource, AwsCustomResource or similar.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.CustomResourceUtilities.isCustomResource">isCustomResource</a></code> | *No description.* |

---

##### `isCustomResource` <a name="isCustomResource" id="@open-constructs/aws-cdk.CustomResourceUtilities.isCustomResource"></a>

```typescript
import { CustomResourceUtilities } from '@open-constructs/aws-cdk'

CustomResourceUtilities.isCustomResource(elt: Construct)
```

###### `elt`<sup>Required</sup> <a name="elt" id="@open-constructs/aws-cdk.CustomResourceUtilities.isCustomResource.parameter.elt"></a>

- *Type:* constructs.Construct

---



### Log <a name="Log" id="@open-constructs/aws-cdk.Log"></a>

Scoped logging.

Allows users to turn logging on and off for individual constructs or whole sub-trees
of the construct tree.  LoggingAspect will set the LogLevel of

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.Log.Initializer"></a>

```typescript
import { Log } from '@open-constructs/aws-cdk'

new Log(scope: Construct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.Log.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.Log.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.Log.debug">debug</a></code> | {@link Logger} will log this via {@link console.debug}. |
| <code><a href="#@open-constructs/aws-cdk.Log.error">error</a></code> | {@link Logger} will log this via {@link console.error}. |
| <code><a href="#@open-constructs/aws-cdk.Log.info">info</a></code> | {@link Logger} will log this via {@link console.info}. |
| <code><a href="#@open-constructs/aws-cdk.Log.warn">warn</a></code> | {@link Logger} will log this via {@link console.warn}. |

---

##### `debug` <a name="debug" id="@open-constructs/aws-cdk.Log.debug"></a>

```typescript
public debug(msg: string | IStringProvider): void
```

{@link Logger} will log this via {@link console.debug}.

###### `msg`<sup>Required</sup> <a name="msg" id="@open-constructs/aws-cdk.Log.debug.parameter.msg"></a>

- *Type:* string | <a href="#@open-constructs/aws-cdk.IStringProvider">IStringProvider</a>

---

##### `error` <a name="error" id="@open-constructs/aws-cdk.Log.error"></a>

```typescript
public error(msg: string | IStringProvider): void
```

{@link Logger} will log this via {@link console.error}.

###### `msg`<sup>Required</sup> <a name="msg" id="@open-constructs/aws-cdk.Log.error.parameter.msg"></a>

- *Type:* string | <a href="#@open-constructs/aws-cdk.IStringProvider">IStringProvider</a>

---

##### `info` <a name="info" id="@open-constructs/aws-cdk.Log.info"></a>

```typescript
public info(msg: string | IStringProvider): void
```

{@link Logger} will log this via {@link console.info}.

###### `msg`<sup>Required</sup> <a name="msg" id="@open-constructs/aws-cdk.Log.info.parameter.msg"></a>

- *Type:* string | <a href="#@open-constructs/aws-cdk.IStringProvider">IStringProvider</a>

---

##### `warn` <a name="warn" id="@open-constructs/aws-cdk.Log.warn"></a>

```typescript
public warn(msg: string | IStringProvider): void
```

{@link Logger} will log this via {@link console.warn}.

###### `msg`<sup>Required</sup> <a name="msg" id="@open-constructs/aws-cdk.Log.warn.parameter.msg"></a>

- *Type:* string | <a href="#@open-constructs/aws-cdk.IStringProvider">IStringProvider</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.Log.of">of</a></code> | *No description.* |

---

##### `of` <a name="of" id="@open-constructs/aws-cdk.Log.of"></a>

```typescript
import { Log } from '@open-constructs/aws-cdk'

Log.of(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.Log.of.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.Log.property.logger">logger</a></code> | <code><a href="#@open-constructs/aws-cdk.ILogger">ILogger</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.Log.property.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |

---

##### `logger`<sup>Required</sup> <a name="logger" id="@open-constructs/aws-cdk.Log.property.logger"></a>

```typescript
public readonly logger: ILogger;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ILogger">ILogger</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.Log.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* constructs.Construct

---


### Logger <a name="Logger" id="@open-constructs/aws-cdk.Logger"></a>

- *Implements:* <a href="#@open-constructs/aws-cdk.ILogger">ILogger</a>

Node console logger.

Provides scoped logging to a construct.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.Logger.Initializer"></a>

```typescript
import { Logger } from '@open-constructs/aws-cdk'

new Logger(props?: LoggerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.Logger.Initializer.parameter.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.LoggerProps">LoggerProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@open-constructs/aws-cdk.Logger.Initializer.parameter.props"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.LoggerProps">LoggerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.Logger.levelColor">levelColor</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.Logger.levelName">levelName</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.Logger.log">log</a></code> | *No description.* |

---

##### `levelColor` <a name="levelColor" id="@open-constructs/aws-cdk.Logger.levelColor"></a>

```typescript
public levelColor(logLevel: number): string
```

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@open-constructs/aws-cdk.Logger.levelColor.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

##### `levelName` <a name="levelName" id="@open-constructs/aws-cdk.Logger.levelName"></a>

```typescript
public levelName(logLevel: number): string
```

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@open-constructs/aws-cdk.Logger.levelName.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

##### `log` <a name="log" id="@open-constructs/aws-cdk.Logger.log"></a>

```typescript
public log(scope: Construct, logLevel: number, message: string | IStringProvider): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.Logger.log.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@open-constructs/aws-cdk.Logger.log.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

###### `message`<sup>Required</sup> <a name="message" id="@open-constructs/aws-cdk.Logger.log.parameter.message"></a>

- *Type:* string | <a href="#@open-constructs/aws-cdk.IStringProvider">IStringProvider</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.Logger.of">of</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.Logger.set">set</a></code> | *No description.* |

---

##### `of` <a name="of" id="@open-constructs/aws-cdk.Logger.of"></a>

```typescript
import { Logger } from '@open-constructs/aws-cdk'

Logger.of(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.Logger.of.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `set` <a name="set" id="@open-constructs/aws-cdk.Logger.set"></a>

```typescript
import { Logger } from '@open-constructs/aws-cdk'

Logger.set(scope: Construct, logger: ILogger)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.Logger.set.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `logger`<sup>Required</sup> <a name="logger" id="@open-constructs/aws-cdk.Logger.set.parameter.logger"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ILogger">ILogger</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.Logger.property.logLevel">logLevel</a></code> | <code>number</code> | Returns the current log level. |
| <code><a href="#@open-constructs/aws-cdk.Logger.property.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.LoggerProps">LoggerProps</a></code> | *No description.* |

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@open-constructs/aws-cdk.Logger.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

Returns the current log level.

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.Logger.property.props"></a>

```typescript
public readonly props: LoggerProps;
```

- *Type:* <a href="#@open-constructs/aws-cdk.LoggerProps">LoggerProps</a>

---


### NoOpLogger <a name="NoOpLogger" id="@open-constructs/aws-cdk.NoOpLogger"></a>

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.NoOpLogger.Initializer"></a>

```typescript
import { NoOpLogger } from '@open-constructs/aws-cdk'

new NoOpLogger()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.NoOpLogger.levelColor">levelColor</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.NoOpLogger.levelName">levelName</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.NoOpLogger.log">log</a></code> | *No description.* |

---

##### `levelColor` <a name="levelColor" id="@open-constructs/aws-cdk.NoOpLogger.levelColor"></a>

```typescript
public levelColor(logLevel: number): string
```

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@open-constructs/aws-cdk.NoOpLogger.levelColor.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

##### `levelName` <a name="levelName" id="@open-constructs/aws-cdk.NoOpLogger.levelName"></a>

```typescript
public levelName(logLevel: number): string
```

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@open-constructs/aws-cdk.NoOpLogger.levelName.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

##### `log` <a name="log" id="@open-constructs/aws-cdk.NoOpLogger.log"></a>

```typescript
public log(scope: Construct, logLevel: number, message: string | IStringProvider): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.NoOpLogger.log.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@open-constructs/aws-cdk.NoOpLogger.log.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

###### `message`<sup>Required</sup> <a name="message" id="@open-constructs/aws-cdk.NoOpLogger.log.parameter.message"></a>

- *Type:* string | <a href="#@open-constructs/aws-cdk.IStringProvider">IStringProvider</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.NoOpLogger.of">of</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.NoOpLogger.set">set</a></code> | *No description.* |

---

##### `of` <a name="of" id="@open-constructs/aws-cdk.NoOpLogger.of"></a>

```typescript
import { NoOpLogger } from '@open-constructs/aws-cdk'

NoOpLogger.of(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.NoOpLogger.of.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `set` <a name="set" id="@open-constructs/aws-cdk.NoOpLogger.set"></a>

```typescript
import { NoOpLogger } from '@open-constructs/aws-cdk'

NoOpLogger.set(scope: Construct, logger: ILogger)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.NoOpLogger.set.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `logger`<sup>Required</sup> <a name="logger" id="@open-constructs/aws-cdk.NoOpLogger.set.parameter.logger"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ILogger">ILogger</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.NoOpLogger.property.logLevel">logLevel</a></code> | <code>number</code> | Returns the current log level. |
| <code><a href="#@open-constructs/aws-cdk.NoOpLogger.property.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.LoggerProps">LoggerProps</a></code> | *No description.* |

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@open-constructs/aws-cdk.NoOpLogger.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

Returns the current log level.

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.NoOpLogger.property.props"></a>

```typescript
public readonly props: LoggerProps;
```

- *Type:* <a href="#@open-constructs/aws-cdk.LoggerProps">LoggerProps</a>

---


### PostResolveToken <a name="PostResolveToken" id="@open-constructs/aws-cdk.PostResolveToken"></a>

- *Implements:* aws-cdk-lib.IResolvable, aws-cdk-lib.IPostProcessor

Copied out of the CDK.

Because not public.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.PostResolveToken.Initializer"></a>

```typescript
import { PostResolveToken } from '@open-constructs/aws-cdk'

new PostResolveToken(value: any, processor: IProcessor)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.PostResolveToken.Initializer.parameter.value">value</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.PostResolveToken.Initializer.parameter.processor">processor</a></code> | <code><a href="#@open-constructs/aws-cdk.IProcessor">IProcessor</a></code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="@open-constructs/aws-cdk.PostResolveToken.Initializer.parameter.value"></a>

- *Type:* any

---

##### `processor`<sup>Required</sup> <a name="processor" id="@open-constructs/aws-cdk.PostResolveToken.Initializer.parameter.processor"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IProcessor">IProcessor</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.PostResolveToken.postProcess">postProcess</a></code> | Process the completely resolved value, after full recursion/resolution has happened. |
| <code><a href="#@open-constructs/aws-cdk.PostResolveToken.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@open-constructs/aws-cdk.PostResolveToken.toJSON">toJSON</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.PostResolveToken.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `postProcess` <a name="postProcess" id="@open-constructs/aws-cdk.PostResolveToken.postProcess"></a>

```typescript
public postProcess(o: any, _context: IResolveContext): any
```

Process the completely resolved value, after full recursion/resolution has happened.

###### `o`<sup>Required</sup> <a name="o" id="@open-constructs/aws-cdk.PostResolveToken.postProcess.parameter.o"></a>

- *Type:* any

---

###### `_context`<sup>Required</sup> <a name="_context" id="@open-constructs/aws-cdk.PostResolveToken.postProcess.parameter._context"></a>

- *Type:* aws-cdk-lib.IResolveContext

---

##### `resolve` <a name="resolve" id="@open-constructs/aws-cdk.PostResolveToken.resolve"></a>

```typescript
public resolve(context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `context`<sup>Required</sup> <a name="context" id="@open-constructs/aws-cdk.PostResolveToken.resolve.parameter.context"></a>

- *Type:* aws-cdk-lib.IResolveContext

---

##### `toJSON` <a name="toJSON" id="@open-constructs/aws-cdk.PostResolveToken.toJSON"></a>

```typescript
public toJSON(): any
```

##### `toString` <a name="toString" id="@open-constructs/aws-cdk.PostResolveToken.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.PostResolveToken.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@open-constructs/aws-cdk.PostResolveToken.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

This may return an array with a single informational element indicating how
to get this property populated, if it was skipped for performance reasons.

---


### ServiceInspectorAspect <a name="ServiceInspectorAspect" id="@open-constructs/aws-cdk.ServiceInspectorAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

Writes the names and types of all symbols on a construct to tree.json.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.ServiceInspectorAspect.Initializer"></a>

```typescript
import { ServiceInspectorAspect } from '@open-constructs/aws-cdk'

new ServiceInspectorAspect()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ServiceInspectorAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="@open-constructs/aws-cdk.ServiceInspectorAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@open-constructs/aws-cdk.ServiceInspectorAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### Singleton <a name="Singleton" id="@open-constructs/aws-cdk.Singleton"></a>

Manages singletons in the stack.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.Singleton.create">create</a></code> | Creates or returns a singleton object. |
| <code><a href="#@open-constructs/aws-cdk.Singleton.isSingleton">isSingleton</a></code> | True if the construct has been marked as Singleton by this class. |
| <code><a href="#@open-constructs/aws-cdk.Singleton.mark">mark</a></code> | Marks an existing construct as a singleton. |

---

##### `create` <a name="create" id="@open-constructs/aws-cdk.Singleton.create"></a>

```typescript
import { Singleton } from '@open-constructs/aws-cdk'

Singleton.create(scope: Construct, id: string, factory: IConstructFactory)
```

Creates or returns a singleton object.

Throws if the existing object was not created or marked by this class.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.Singleton.create.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.Singleton.create.parameter.id"></a>

- *Type:* string

---

###### `factory`<sup>Required</sup> <a name="factory" id="@open-constructs/aws-cdk.Singleton.create.parameter.factory"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IConstructFactory">IConstructFactory</a>

---

##### `isSingleton` <a name="isSingleton" id="@open-constructs/aws-cdk.Singleton.isSingleton"></a>

```typescript
import { Singleton } from '@open-constructs/aws-cdk'

Singleton.isSingleton(x: IConstruct)
```

True if the construct has been marked as Singleton by this class.

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.Singleton.isSingleton.parameter.x"></a>

- *Type:* constructs.IConstruct

---

##### `mark` <a name="mark" id="@open-constructs/aws-cdk.Singleton.mark"></a>

```typescript
import { Singleton } from '@open-constructs/aws-cdk'

Singleton.mark(scope: IConstruct)
```

Marks an existing construct as a singleton.

This allows Singletons created outside this class to be used
with this class.
Throws if the construct is not a direct child of a stack.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.Singleton.mark.parameter.scope"></a>

- *Type:* constructs.IConstruct

---



### CurFormat <a name="CurFormat" id="@open-constructs/aws-cdk.aws_cur.CurFormat"></a>

Enum for the possible formats of a cost report.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.aws_cur.CurFormat.Initializer"></a>

```typescript
import { aws_cur } from '@open-constructs/aws-cdk'

new aws_cur.CurFormat(compression: string, format: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CurFormat.Initializer.parameter.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CurFormat.Initializer.parameter.format">format</a></code> | <code>string</code> | *No description.* |

---

##### `compression`<sup>Required</sup> <a name="compression" id="@open-constructs/aws-cdk.aws_cur.CurFormat.Initializer.parameter.compression"></a>

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@open-constructs/aws-cdk.aws_cur.CurFormat.Initializer.parameter.format"></a>

- *Type:* string

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CurFormat.for">for</a></code> | Returns a CurFormat instance for the given compression and format string values. |

---

##### `for` <a name="for" id="@open-constructs/aws-cdk.aws_cur.CurFormat.for"></a>

```typescript
import { aws_cur } from '@open-constructs/aws-cdk'

aws_cur.CurFormat.for(compression: string, format: string)
```

Returns a CurFormat instance for the given compression and format string values.

###### `compression`<sup>Required</sup> <a name="compression" id="@open-constructs/aws-cdk.aws_cur.CurFormat.for.parameter.compression"></a>

- *Type:* string

The compression string value.

---

###### `format`<sup>Required</sup> <a name="format" id="@open-constructs/aws-cdk.aws_cur.CurFormat.for.parameter.format"></a>

- *Type:* string

The format string value.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CurFormat.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CurFormat.property.format">format</a></code> | <code>string</code> | *No description.* |

---

##### `compression`<sup>Required</sup> <a name="compression" id="@open-constructs/aws-cdk.aws_cur.CurFormat.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@open-constructs/aws-cdk.aws_cur.CurFormat.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CurFormat.property.PARQUET">PARQUET</a></code> | <code>@open-constructs/aws-cdk.aws_cur.CurFormat</code> | Parquet format. |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CurFormat.property.TEXT_OR_CSV">TEXT_OR_CSV</a></code> | <code>@open-constructs/aws-cdk.aws_cur.CurFormat</code> | GZIP compressed text or CSV format. |

---

##### `PARQUET`<sup>Required</sup> <a name="PARQUET" id="@open-constructs/aws-cdk.aws_cur.CurFormat.property.PARQUET"></a>

```typescript
public readonly PARQUET: CurFormat;
```

- *Type:* @open-constructs/aws-cdk.aws_cur.CurFormat

Parquet format.

---

##### `TEXT_OR_CSV`<sup>Required</sup> <a name="TEXT_OR_CSV" id="@open-constructs/aws-cdk.aws_cur.CurFormat.property.TEXT_OR_CSV"></a>

```typescript
public readonly TEXT_OR_CSV: CurFormat;
```

- *Type:* @open-constructs/aws-cdk.aws_cur.CurFormat

GZIP compressed text or CSV format.

---

### ReportGranularity <a name="ReportGranularity" id="@open-constructs/aws-cdk.aws_cur.ReportGranularity"></a>

Enum for the possible granularities of a cost report.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.aws_cur.ReportGranularity.Initializer"></a>

```typescript
import { aws_cur } from '@open-constructs/aws-cdk'

new aws_cur.ReportGranularity(value: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.ReportGranularity.Initializer.parameter.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="@open-constructs/aws-cdk.aws_cur.ReportGranularity.Initializer.parameter.value"></a>

- *Type:* string

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.ReportGranularity.for">for</a></code> | Returns a ReportGranularity instance for the given granularity string value. |

---

##### `for` <a name="for" id="@open-constructs/aws-cdk.aws_cur.ReportGranularity.for"></a>

```typescript
import { aws_cur } from '@open-constructs/aws-cdk'

aws_cur.ReportGranularity.for(granularity: string)
```

Returns a ReportGranularity instance for the given granularity string value.

###### `granularity`<sup>Required</sup> <a name="granularity" id="@open-constructs/aws-cdk.aws_cur.ReportGranularity.for.parameter.granularity"></a>

- *Type:* string

The granularity string value to create an instance for.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.ReportGranularity.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="@open-constructs/aws-cdk.aws_cur.ReportGranularity.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.ReportGranularity.property.DAILY">DAILY</a></code> | <code>@open-constructs/aws-cdk.aws_cur.ReportGranularity</code> | Daily granularity. |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.ReportGranularity.property.HOURLY">HOURLY</a></code> | <code>@open-constructs/aws-cdk.aws_cur.ReportGranularity</code> | Hourly granularity. |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.ReportGranularity.property.MONTHLY">MONTHLY</a></code> | <code>@open-constructs/aws-cdk.aws_cur.ReportGranularity</code> | Weekly granularity. |

---

##### `DAILY`<sup>Required</sup> <a name="DAILY" id="@open-constructs/aws-cdk.aws_cur.ReportGranularity.property.DAILY"></a>

```typescript
public readonly DAILY: ReportGranularity;
```

- *Type:* @open-constructs/aws-cdk.aws_cur.ReportGranularity

Daily granularity.

---

##### `HOURLY`<sup>Required</sup> <a name="HOURLY" id="@open-constructs/aws-cdk.aws_cur.ReportGranularity.property.HOURLY"></a>

```typescript
public readonly HOURLY: ReportGranularity;
```

- *Type:* @open-constructs/aws-cdk.aws_cur.ReportGranularity

Hourly granularity.

---

##### `MONTHLY`<sup>Required</sup> <a name="MONTHLY" id="@open-constructs/aws-cdk.aws_cur.ReportGranularity.property.MONTHLY"></a>

```typescript
public readonly MONTHLY: ReportGranularity;
```

- *Type:* @open-constructs/aws-cdk.aws_cur.ReportGranularity

Weekly granularity.

---

### StackConstructTreeService <a name="StackConstructTreeService" id="@open-constructs/aws-cdk.StackConstructTreeService"></a>

A stack-scoped service that is found by looking up the tree.

Found services are cached on the querying scope to speed up subsequent lookups.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.StackConstructTreeService.Initializer"></a>

```typescript
import { StackConstructTreeService } from '@open-constructs/aws-cdk'

new StackConstructTreeService(treeServiceProps: ConstructTreeServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.Initializer.parameter.treeServiceProps">treeServiceProps</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="@open-constructs/aws-cdk.StackConstructTreeService.Initializer.parameter.treeServiceProps"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.get">get</a></code> | Gets the serviceSymbol property of the Construct. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.has">has</a></code> | Returns the construct if the construct has the service, otherwise undefined; |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.searchDown">searchDown</a></code> | Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope). |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.searchSelf">searchSelf</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.searchSelfOrCreate">searchSelfOrCreate</a></code> | Returns a ServiceQueryResult if the scope has the service. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.searchUp">searchUp</a></code> | Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope). |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.set">set</a></code> | Sets the given value on the scope as the serviceProperty property. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.setFactory">setFactory</a></code> | Sets a construct service factory on a construct. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.of">of</a></code> | Return the stack service for the construct. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.searchUpOrCreate">searchUpOrCreate</a></code> | Searches towards the root for a value. |

---

##### `get` <a name="get" id="@open-constructs/aws-cdk.StackConstructTreeService.get"></a>

```typescript
public get(scope: IConstruct): any
```

Gets the serviceSymbol property of the Construct.

Returns undefined if the service is not on the construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackConstructTreeService.get.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `has` <a name="has" id="@open-constructs/aws-cdk.StackConstructTreeService.has"></a>

```typescript
public has(scope: IConstruct): IConstruct
```

Returns the construct if the construct has the service, otherwise undefined;

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackConstructTreeService.has.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchDown` <a name="searchDown" id="@open-constructs/aws-cdk.StackConstructTreeService.searchDown"></a>

```typescript
public searchDown(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult[]
```

Returns array of ServiceQueryResult for constructs in the sub-tree that have the service (including the given scope).

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackConstructTreeService.searchDown.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.StackConstructTreeService.searchDown.parameter.stopCondition"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

---

##### `searchSelf` <a name="searchSelf" id="@open-constructs/aws-cdk.StackConstructTreeService.searchSelf"></a>

```typescript
public searchSelf(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackConstructTreeService.searchSelf.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchSelfOrCreate` <a name="searchSelfOrCreate" id="@open-constructs/aws-cdk.StackConstructTreeService.searchSelfOrCreate"></a>

```typescript
public searchSelfOrCreate(scope: IConstruct): ServiceQueryResult
```

Returns a ServiceQueryResult if the scope has the service.

If the scope does not have the service, calls the factory to create the service
and caches it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackConstructTreeService.searchSelfOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `searchUp` <a name="searchUp" id="@open-constructs/aws-cdk.StackConstructTreeService.searchUp"></a>

```typescript
public searchUp(scope: IConstruct, stopCondition?: IStopCondition): ServiceQueryResult
```

Check the hierarchy to see if there is an ascendent object of scope that defines the serviceProperty (including scope).

Uses stopCondition to decide where to stop the searchUp.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackConstructTreeService.searchUp.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `stopCondition`<sup>Optional</sup> <a name="stopCondition" id="@open-constructs/aws-cdk.StackConstructTreeService.searchUp.parameter.stopCondition"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

---

##### `set` <a name="set" id="@open-constructs/aws-cdk.StackConstructTreeService.set"></a>

```typescript
public set(scope: IConstruct, service: any): any
```

Sets the given value on the scope as the serviceProperty property.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackConstructTreeService.set.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `service`<sup>Required</sup> <a name="service" id="@open-constructs/aws-cdk.StackConstructTreeService.set.parameter.service"></a>

- *Type:* any

---

##### `setFactory` <a name="setFactory" id="@open-constructs/aws-cdk.StackConstructTreeService.setFactory"></a>

```typescript
public setFactory(scope: IConstruct, factory: IConstructServiceFactory): any
```

Sets a construct service factory on a construct.

Use case: Set a factory for AWSCredentials on the app.  When a stack needs to make an AWS call, it gets credentials from the
factory.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackConstructTreeService.setFactory.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `factory`<sup>Required</sup> <a name="factory" id="@open-constructs/aws-cdk.StackConstructTreeService.setFactory.parameter.factory"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a>

---

##### `of` <a name="of" id="@open-constructs/aws-cdk.StackConstructTreeService.of"></a>

```typescript
public of(construct: IConstruct): any
```

Return the stack service for the construct.

###### `construct`<sup>Required</sup> <a name="construct" id="@open-constructs/aws-cdk.StackConstructTreeService.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `searchUpOrCreate` <a name="searchUpOrCreate" id="@open-constructs/aws-cdk.StackConstructTreeService.searchUpOrCreate"></a>

```typescript
public searchUpOrCreate(scope: IConstruct): ServiceQueryResult
```

Searches towards the root for a value.

If the value is found,
cache the value on the scope (to speed up future gets) and
return the pair.  If not, call the factory to create a value and
cache it on the scope.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackConstructTreeService.searchUpOrCreate.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isFactory` <a name="isFactory" id="@open-constructs/aws-cdk.StackConstructTreeService.isFactory"></a>

```typescript
import { StackConstructTreeService } from '@open-constructs/aws-cdk'

StackConstructTreeService.isFactory(factory: any)
```

Returns true if a service value is actualy a factory.

###### `factory`<sup>Required</sup> <a name="factory" id="@open-constructs/aws-cdk.StackConstructTreeService.isFactory.parameter.factory"></a>

- *Type:* any

---

##### `scopeOf` <a name="scopeOf" id="@open-constructs/aws-cdk.StackConstructTreeService.scopeOf"></a>

```typescript
import { StackConstructTreeService } from '@open-constructs/aws-cdk'

StackConstructTreeService.scopeOf(found?: ServiceQueryResult)
```

Returns the scope of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@open-constructs/aws-cdk.StackConstructTreeService.scopeOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>

---

##### `scopesOf` <a name="scopesOf" id="@open-constructs/aws-cdk.StackConstructTreeService.scopesOf"></a>

```typescript
import { StackConstructTreeService } from '@open-constructs/aws-cdk'

StackConstructTreeService.scopesOf(found: ServiceQueryResult[])
```

Returns the scopes from an array of ServiceQueryResults.

###### `found`<sup>Required</sup> <a name="found" id="@open-constructs/aws-cdk.StackConstructTreeService.scopesOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>[]

---

##### `serviceOf` <a name="serviceOf" id="@open-constructs/aws-cdk.StackConstructTreeService.serviceOf"></a>

```typescript
import { StackConstructTreeService } from '@open-constructs/aws-cdk'

StackConstructTreeService.serviceOf(found?: ServiceQueryResult)
```

Returns the value of the property from a ServiceQueryResult.

###### `found`<sup>Optional</sup> <a name="found" id="@open-constructs/aws-cdk.StackConstructTreeService.serviceOf.parameter.found"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ServiceQueryResult">ServiceQueryResult</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.property.props">props</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.property.treeServiceProps">treeServiceProps</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps">ConstructTreeServiceProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.StackConstructTreeService.property.props"></a>

```typescript
public readonly props: ConstructServiceProps;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructServiceProps">ConstructServiceProps</a>

---

##### `treeServiceProps`<sup>Required</sup> <a name="treeServiceProps" id="@open-constructs/aws-cdk.StackConstructTreeService.property.treeServiceProps"></a>

```typescript
public readonly treeServiceProps: ConstructTreeServiceProps;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructTreeServiceProps">ConstructTreeServiceProps</a>

---


### StackToken <a name="StackToken" id="@open-constructs/aws-cdk.StackToken"></a>

Provides a way to map named tokens to their producers.

Names should be unique within a stack.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.StackToken.Initializer"></a>

```typescript
import { StackToken } from '@open-constructs/aws-cdk'

new StackToken()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.StackToken.any">any</a></code> | Creates a named token. |
| <code><a href="#@open-constructs/aws-cdk.StackToken.list">list</a></code> | Creates a named token. |
| <code><a href="#@open-constructs/aws-cdk.StackToken.number">number</a></code> | Creates a named token. |
| <code><a href="#@open-constructs/aws-cdk.StackToken.resolveAny">resolveAny</a></code> | Registers a resolver for the named token. |
| <code><a href="#@open-constructs/aws-cdk.StackToken.resolveList">resolveList</a></code> | Registers a resolver for the named token. |
| <code><a href="#@open-constructs/aws-cdk.StackToken.resolveNumber">resolveNumber</a></code> | Registers a resolver for the named token. |
| <code><a href="#@open-constructs/aws-cdk.StackToken.resolveString">resolveString</a></code> | Registers a resolver for the named token. |
| <code><a href="#@open-constructs/aws-cdk.StackToken.string">string</a></code> | Creates a named token. |

---

##### `any` <a name="any" id="@open-constructs/aws-cdk.StackToken.any"></a>

```typescript
import { StackToken } from '@open-constructs/aws-cdk'

StackToken.any(scope: IConstruct, name: string, options?: LazyAnyValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackToken.any.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.StackToken.any.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.StackToken.any.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyAnyValueOptions

---

##### `list` <a name="list" id="@open-constructs/aws-cdk.StackToken.list"></a>

```typescript
import { StackToken } from '@open-constructs/aws-cdk'

StackToken.list(scope: IConstruct, name: string, options?: LazyListValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackToken.list.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.StackToken.list.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.StackToken.list.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyListValueOptions

---

##### `number` <a name="number" id="@open-constructs/aws-cdk.StackToken.number"></a>

```typescript
import { StackToken } from '@open-constructs/aws-cdk'

StackToken.number(scope: IConstruct, name: string)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackToken.number.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.StackToken.number.parameter.name"></a>

- *Type:* string

---

##### `resolveAny` <a name="resolveAny" id="@open-constructs/aws-cdk.StackToken.resolveAny"></a>

```typescript
import { StackToken } from '@open-constructs/aws-cdk'

StackToken.resolveAny(scope: IConstruct, name: string, producer: IStableAnyProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackToken.resolveAny.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.StackToken.resolveAny.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@open-constructs/aws-cdk.StackToken.resolveAny.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableAnyProducer

---

##### `resolveList` <a name="resolveList" id="@open-constructs/aws-cdk.StackToken.resolveList"></a>

```typescript
import { StackToken } from '@open-constructs/aws-cdk'

StackToken.resolveList(scope: IConstruct, name: string, producer: IStableListProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackToken.resolveList.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.StackToken.resolveList.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@open-constructs/aws-cdk.StackToken.resolveList.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableListProducer

---

##### `resolveNumber` <a name="resolveNumber" id="@open-constructs/aws-cdk.StackToken.resolveNumber"></a>

```typescript
import { StackToken } from '@open-constructs/aws-cdk'

StackToken.resolveNumber(scope: IConstruct, name: string, producer: IStableNumberProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackToken.resolveNumber.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.StackToken.resolveNumber.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@open-constructs/aws-cdk.StackToken.resolveNumber.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableNumberProducer

---

##### `resolveString` <a name="resolveString" id="@open-constructs/aws-cdk.StackToken.resolveString"></a>

```typescript
import { StackToken } from '@open-constructs/aws-cdk'

StackToken.resolveString(scope: IConstruct, name: string, producer: IStableStringProducer)
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackToken.resolveString.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.StackToken.resolveString.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@open-constructs/aws-cdk.StackToken.resolveString.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableStringProducer

---

##### `string` <a name="string" id="@open-constructs/aws-cdk.StackToken.string"></a>

```typescript
import { StackToken } from '@open-constructs/aws-cdk'

StackToken.string(scope: IConstruct, name: string, options?: LazyStringValueOptions)
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackToken.string.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.StackToken.string.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.StackToken.string.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyStringValueOptions

---



### TokenService <a name="TokenService" id="@open-constructs/aws-cdk.TokenService"></a>

Service for tokens scoped to a construct.

Allows the user to cleanly separate token usage and resolution.
Users should use AppTokens or StackTokens instead of directly using this class.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.TokenService.Initializer"></a>

```typescript
import { TokenService } from '@open-constructs/aws-cdk'

new TokenService(service: ConstructTreeService)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.TokenService.Initializer.parameter.service">service</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructTreeService">ConstructTreeService</a></code> | *No description.* |

---

##### `service`<sup>Required</sup> <a name="service" id="@open-constructs/aws-cdk.TokenService.Initializer.parameter.service"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructTreeService">ConstructTreeService</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.TokenService.any">any</a></code> | Creates a named token. |
| <code><a href="#@open-constructs/aws-cdk.TokenService.list">list</a></code> | Creates a named token. |
| <code><a href="#@open-constructs/aws-cdk.TokenService.number">number</a></code> | Creates a named token. |
| <code><a href="#@open-constructs/aws-cdk.TokenService.resolveAny">resolveAny</a></code> | Registers a resolver for the named token. |
| <code><a href="#@open-constructs/aws-cdk.TokenService.resolveList">resolveList</a></code> | Registers a resolver for the named token. |
| <code><a href="#@open-constructs/aws-cdk.TokenService.resolveNumber">resolveNumber</a></code> | Registers a resolver for the named token. |
| <code><a href="#@open-constructs/aws-cdk.TokenService.resolveString">resolveString</a></code> | Registers a resolver for the named token. |
| <code><a href="#@open-constructs/aws-cdk.TokenService.string">string</a></code> | Creates a named token. |

---

##### `any` <a name="any" id="@open-constructs/aws-cdk.TokenService.any"></a>

```typescript
public any(scope: IConstruct, name: string, options?: LazyAnyValueOptions): IResolvable
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TokenService.any.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.TokenService.any.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.TokenService.any.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyAnyValueOptions

---

##### `list` <a name="list" id="@open-constructs/aws-cdk.TokenService.list"></a>

```typescript
public list(scope: IConstruct, name: string, options?: LazyListValueOptions): string[]
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TokenService.list.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.TokenService.list.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.TokenService.list.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyListValueOptions

---

##### `number` <a name="number" id="@open-constructs/aws-cdk.TokenService.number"></a>

```typescript
public number(scope: IConstruct, name: string): number
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TokenService.number.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.TokenService.number.parameter.name"></a>

- *Type:* string

---

##### `resolveAny` <a name="resolveAny" id="@open-constructs/aws-cdk.TokenService.resolveAny"></a>

```typescript
public resolveAny(scope: IConstruct, name: string, producer: IStableAnyProducer): void
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TokenService.resolveAny.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.TokenService.resolveAny.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@open-constructs/aws-cdk.TokenService.resolveAny.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableAnyProducer

---

##### `resolveList` <a name="resolveList" id="@open-constructs/aws-cdk.TokenService.resolveList"></a>

```typescript
public resolveList(scope: IConstruct, name: string, producer: IStableListProducer): void
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TokenService.resolveList.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.TokenService.resolveList.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@open-constructs/aws-cdk.TokenService.resolveList.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableListProducer

---

##### `resolveNumber` <a name="resolveNumber" id="@open-constructs/aws-cdk.TokenService.resolveNumber"></a>

```typescript
public resolveNumber(scope: IConstruct, name: string, producer: IStableNumberProducer): void
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TokenService.resolveNumber.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.TokenService.resolveNumber.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@open-constructs/aws-cdk.TokenService.resolveNumber.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableNumberProducer

---

##### `resolveString` <a name="resolveString" id="@open-constructs/aws-cdk.TokenService.resolveString"></a>

```typescript
public resolveString(scope: IConstruct, name: string, producer: IStableStringProducer): void
```

Registers a resolver for the named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TokenService.resolveString.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.TokenService.resolveString.parameter.name"></a>

- *Type:* string

---

###### `producer`<sup>Required</sup> <a name="producer" id="@open-constructs/aws-cdk.TokenService.resolveString.parameter.producer"></a>

- *Type:* aws-cdk-lib.IStableStringProducer

---

##### `string` <a name="string" id="@open-constructs/aws-cdk.TokenService.string"></a>

```typescript
public string(scope: IConstruct, name: string, options?: LazyStringValueOptions): string
```

Creates a named token.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TokenService.string.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

###### `name`<sup>Required</sup> <a name="name" id="@open-constructs/aws-cdk.TokenService.string.parameter.name"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@open-constructs/aws-cdk.TokenService.string.parameter.options"></a>

- *Type:* aws-cdk-lib.LazyStringValueOptions

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.TokenService.property.service">service</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructTreeService">ConstructTreeService</a></code> | *No description.* |

---

##### `service`<sup>Required</sup> <a name="service" id="@open-constructs/aws-cdk.TokenService.property.service"></a>

```typescript
public readonly service: ConstructTreeService;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructTreeService">ConstructTreeService</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.TokenService.property.TOKEN_SERVICE_FACTORY">TOKEN_SERVICE_FACTORY</a></code> | <code><a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a></code> | *No description.* |

---

##### `TOKEN_SERVICE_FACTORY`<sup>Required</sup> <a name="TOKEN_SERVICE_FACTORY" id="@open-constructs/aws-cdk.TokenService.property.TOKEN_SERVICE_FACTORY"></a>

```typescript
public readonly TOKEN_SERVICE_FACTORY: IConstructServiceFactory;
```

- *Type:* <a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a>

---

### TransformHost <a name="TransformHost" id="@open-constructs/aws-cdk.TransformHost"></a>

Static helpers.

#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.TransformHost.Initializer"></a>

```typescript
import { TransformHost } from '@open-constructs/aws-cdk'

new TransformHost()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.TransformHost.ensureHosted">ensureHosted</a></code> | Ensures that a Transform is hosted by modifying the ancestor CfnElement or Stack (if necessary) so they can host transforms. |
| <code><a href="#@open-constructs/aws-cdk.TransformHost.hook">hook</a></code> | This turns a Stack or CfnElement into a transform host. |
| <code><a href="#@open-constructs/aws-cdk.TransformHost.isTransformHost">isTransformHost</a></code> | Returns true for any Stack or CfnElement that is a transform host, as well as for all CfnTransformHost constructs. |
| <code><a href="#@open-constructs/aws-cdk.TransformHost.mark">mark</a></code> | Marks a construct as a TransformHost, isolating the transforms under it from the Stack. |
| <code><a href="#@open-constructs/aws-cdk.TransformHost.of">of</a></code> | Note: This returns the transform host, which may be either a Stack, a CfnElement, or a CfnTransformHost. |

---

##### `ensureHosted` <a name="ensureHosted" id="@open-constructs/aws-cdk.TransformHost.ensureHosted"></a>

```typescript
import { TransformHost } from '@open-constructs/aws-cdk'

TransformHost.ensureHosted(scope: Construct)
```

Ensures that a Transform is hosted by modifying the ancestor CfnElement or Stack (if necessary) so they can host transforms.

Ensures that Tranforms under a CfnElement apply to the CfnElement, and Transforms under
a Stack apply to the Stack.

Not being able to do this may not be fatal, so we don't throw.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TransformHost.ensureHosted.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `hook` <a name="hook" id="@open-constructs/aws-cdk.TransformHost.hook"></a>

```typescript
import { TransformHost } from '@open-constructs/aws-cdk'

TransformHost.hook(construct: IConstruct)
```

This turns a Stack or CfnElement into a transform host.

Can be used from the stack constructor, or via the
provided cfnTransformHost decorator.

###### `construct`<sup>Required</sup> <a name="construct" id="@open-constructs/aws-cdk.TransformHost.hook.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isTransformHost` <a name="isTransformHost" id="@open-constructs/aws-cdk.TransformHost.isTransformHost"></a>

```typescript
import { TransformHost } from '@open-constructs/aws-cdk'

TransformHost.isTransformHost(scope: Construct)
```

Returns true for any Stack or CfnElement that is a transform host, as well as for all CfnTransformHost constructs.

It does NOT tell you that the object is of type CfnTransformHost.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TransformHost.isTransformHost.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `mark` <a name="mark" id="@open-constructs/aws-cdk.TransformHost.mark"></a>

```typescript
import { TransformHost } from '@open-constructs/aws-cdk'

TransformHost.mark(scope: Construct)
```

Marks a construct as a TransformHost, isolating the transforms under it from the Stack.

Host decides when to apply the descendent transforms.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TransformHost.mark.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `of` <a name="of" id="@open-constructs/aws-cdk.TransformHost.of"></a>

```typescript
import { TransformHost } from '@open-constructs/aws-cdk'

TransformHost.of(scope: Construct)
```

Note: This returns the transform host, which may be either a Stack, a CfnElement, or a CfnTransformHost.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TransformHost.of.parameter.scope"></a>

- *Type:* constructs.Construct

---



### Transforms <a name="Transforms" id="@open-constructs/aws-cdk.Transforms"></a>

This helper class can extract ICfnTransforms from a construct tree so they can be applied to a template.

This class is used by the framework to apply transforms, and can be used to import templates into
a CfnInclude construct.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.Transforms.apply">apply</a></code> | Applies the transforms on a scope to a template. |
| <code><a href="#@open-constructs/aws-cdk.Transforms.get">get</a></code> | Returns all transforms attached to the scope as descendents. |

---

##### `apply` <a name="apply" id="@open-constructs/aws-cdk.Transforms.apply"></a>

```typescript
public apply(template: any): any
```

Applies the transforms on a scope to a template.

###### `template`<sup>Required</sup> <a name="template" id="@open-constructs/aws-cdk.Transforms.apply.parameter.template"></a>

- *Type:* any

---

##### `get` <a name="get" id="@open-constructs/aws-cdk.Transforms.get"></a>

```typescript
public get(): ICfnTransform[]
```

Returns all transforms attached to the scope as descendents.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.Transforms.of">of</a></code> | Returns a transforms object for the scope. |

---

##### `of` <a name="of" id="@open-constructs/aws-cdk.Transforms.of"></a>

```typescript
import { Transforms } from '@open-constructs/aws-cdk'

Transforms.of(scope: IConstruct)
```

Returns a transforms object for the scope.

This object has access to all transforms attached to the scope
as descendents.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.Transforms.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.Transforms.property.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.Transforms.property.scope"></a>

```typescript
public readonly scope: IConstruct;
```

- *Type:* constructs.IConstruct

---


### TreeInspectable <a name="TreeInspectable" id="@open-constructs/aws-cdk.TreeInspectable"></a>

- *Implements:* aws-cdk-lib.IInspectable

Makes any construct IInspectable so it can add metadata to the tree.json file without creating new constructs.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.TreeInspectable.addAttribute">addAttribute</a></code> | Adds attribute to bag. |
| <code><a href="#@open-constructs/aws-cdk.TreeInspectable.inspect">inspect</a></code> | Called by the CDK to write attribute to tree.json file. |

---

##### `addAttribute` <a name="addAttribute" id="@open-constructs/aws-cdk.TreeInspectable.addAttribute"></a>

```typescript
public addAttribute(key: string, value: any): void
```

Adds attribute to bag.

Keys should be added by convention to prevent conflicts
i.e. L1 constructs will contain attributes with keys prefixed with aws:cdk:cloudformation

###### `key`<sup>Required</sup> <a name="key" id="@open-constructs/aws-cdk.TreeInspectable.addAttribute.parameter.key"></a>

- *Type:* string

key for metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="@open-constructs/aws-cdk.TreeInspectable.addAttribute.parameter.value"></a>

- *Type:* any

value of metadata.

---

##### `inspect` <a name="inspect" id="@open-constructs/aws-cdk.TreeInspectable.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Called by the CDK to write attribute to tree.json file.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@open-constructs/aws-cdk.TreeInspectable.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.TreeInspectable.isInspectable">isInspectable</a></code> | True if a construct supports IInspectable interface. |
| <code><a href="#@open-constructs/aws-cdk.TreeInspectable.of">of</a></code> | Returns or creates a TreeInspectable for the given construct. |

---

##### `isInspectable` <a name="isInspectable" id="@open-constructs/aws-cdk.TreeInspectable.isInspectable"></a>

```typescript
import { TreeInspectable } from '@open-constructs/aws-cdk'

TreeInspectable.isInspectable(inspectable: any)
```

True if a construct supports IInspectable interface.

###### `inspectable`<sup>Required</sup> <a name="inspectable" id="@open-constructs/aws-cdk.TreeInspectable.isInspectable.parameter.inspectable"></a>

- *Type:* any

---

##### `of` <a name="of" id="@open-constructs/aws-cdk.TreeInspectable.of"></a>

```typescript
import { TreeInspectable } from '@open-constructs/aws-cdk'

TreeInspectable.of(scope: IConstruct)
```

Returns or creates a TreeInspectable for the given construct.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TreeInspectable.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.TreeInspectable.property.attributes">attributes</a></code> | <code>{[ key: string ]: any}</code> | Represents the bag of attributes as key-value pairs. |
| <code><a href="#@open-constructs/aws-cdk.TreeInspectable.property.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@open-constructs/aws-cdk.TreeInspectable.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Represents the bag of attributes as key-value pairs.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.TreeInspectable.property.scope"></a>

```typescript
public readonly scope: IConstruct;
```

- *Type:* constructs.IConstruct

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.TreeInspectable.property.TREE_INSPECTABLE_SERVICE">TREE_INSPECTABLE_SERVICE</a></code> | <code><a href="#@open-constructs/aws-cdk.ConstructService">ConstructService</a></code> | *No description.* |

---

##### `TREE_INSPECTABLE_SERVICE`<sup>Required</sup> <a name="TREE_INSPECTABLE_SERVICE" id="@open-constructs/aws-cdk.TreeInspectable.property.TREE_INSPECTABLE_SERVICE"></a>

```typescript
public readonly TREE_INSPECTABLE_SERVICE: ConstructService;
```

- *Type:* <a href="#@open-constructs/aws-cdk.ConstructService">ConstructService</a>

---

## Protocols <a name="Protocols" id="Protocols"></a>

### ICfnTransform <a name="ICfnTransform" id="@open-constructs/aws-cdk.ICfnTransform"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* <a href="#@open-constructs/aws-cdk.CfnTransform">CfnTransform</a>, <a href="#@open-constructs/aws-cdk.EncodeResource">EncodeResource</a>, <a href="#@open-constructs/aws-cdk.ICfnTransform">ICfnTransform</a>

The base interface for CDK Transforms.

A CDK Transform is a construct that can take
input, such as CloudFormation, and transform it, most likely into slightly different
CloudFormation.

CDK Transforms have two use-cases:  Preprocessing CloudFormation before it is imported to the CDK,
and post-processing CloudFormation produced by the CDK before it is written to a file in cdk.out.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ICfnTransform.apply">apply</a></code> | *No description.* |

---

##### `apply` <a name="apply" id="@open-constructs/aws-cdk.ICfnTransform.apply"></a>

```typescript
public apply(template: any): any
```

###### `template`<sup>Required</sup> <a name="template" id="@open-constructs/aws-cdk.ICfnTransform.apply.parameter.template"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ICfnTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@open-constructs/aws-cdk.ICfnTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

### IConstructFactory <a name="IConstructFactory" id="@open-constructs/aws-cdk.IConstructFactory"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.IConstructFactory">IConstructFactory</a>

Interface for creating a construct.



### IConstructPredicate <a name="IConstructPredicate" id="@open-constructs/aws-cdk.IConstructPredicate"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.IConstructPredicate">IConstructPredicate</a>

Generalized little-l lambda for a construct.



### IConstructServiceFactory <a name="IConstructServiceFactory" id="@open-constructs/aws-cdk.IConstructServiceFactory"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a>

Factory for a construct service.



### IConstuctTest <a name="IConstuctTest" id="@open-constructs/aws-cdk.IConstuctTest"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.IConstuctTest">IConstuctTest</a>

A construct predicate type assertion.

Enables using CDK XXX.isXXX methods with ConstructTreeSearch and
IConstructPredicate.
Such as CfnElement.isCfnElement or Stack.isStack.

Usage:



### ILogger <a name="ILogger" id="@open-constructs/aws-cdk.ILogger"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.Logger">Logger</a>, <a href="#@open-constructs/aws-cdk.NoOpLogger">NoOpLogger</a>, <a href="#@open-constructs/aws-cdk.ILogger">ILogger</a>

Interface for scoped logging backend.

See {@link Logger}.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ILogger.log">log</a></code> | *No description.* |

---

##### `log` <a name="log" id="@open-constructs/aws-cdk.ILogger.log"></a>

```typescript
public log(scope: Construct, logLevel: number, message: string | IStringProvider): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ILogger.log.parameter.scope"></a>

- *Type:* constructs.Construct

Scope for the log line.

---

###### `logLevel`<sup>Required</sup> <a name="logLevel" id="@open-constructs/aws-cdk.ILogger.log.parameter.logLevel"></a>

- *Type:* number

a number to support custom levels (e.g. FATAL = 0.5).

---

###### `message`<sup>Required</sup> <a name="message" id="@open-constructs/aws-cdk.ILogger.log.parameter.message"></a>

- *Type:* string | <a href="#@open-constructs/aws-cdk.IStringProvider">IStringProvider</a>

The message.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ILogger.property.logLevel">logLevel</a></code> | <code>number</code> | Returns the current log level. |

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@open-constructs/aws-cdk.ILogger.property.logLevel"></a>

```typescript
public readonly logLevel: number;
```

- *Type:* number

Returns the current log level.

---

### IProcessor <a name="IProcessor" id="@open-constructs/aws-cdk.IProcessor"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.IProcessor">IProcessor</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.IProcessor.process">process</a></code> | *No description.* |

---

##### `process` <a name="process" id="@open-constructs/aws-cdk.IProcessor.process"></a>

```typescript
public process(x: any): any
```

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.IProcessor.process.parameter.x"></a>

- *Type:* any

---


### IStopCondition <a name="IStopCondition" id="@open-constructs/aws-cdk.IStopCondition"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

Defines where to stop when navigating the construct tree.

If not provided, we stop either at the top or bottom of the tree (depending
on search direction).



### IStringProvider <a name="IStringProvider" id="@open-constructs/aws-cdk.IStringProvider"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.IStringProvider">IStringProvider</a>

Delayed log-line construction.



## Enums <a name="Enums" id="Enums"></a>

### LogLevel <a name="LogLevel" id="@open-constructs/aws-cdk.LogLevel"></a>

The Node logging levels (from the console object).

# Note:

The logging interfaces take numbers for logLevel instead of this enum.
This allows the user to define custom log levels (e.g.
FATAL = 0.5).  Subclass Log and Logger to support custom log levels.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.LogLevel.OFF">OFF</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.LogLevel.ERROR">ERROR</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.LogLevel.WARNING">WARNING</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.LogLevel.INFO">INFO</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.LogLevel.DEBUG">DEBUG</a></code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.LogLevel.ALL">ALL</a></code> | *No description.* |

---

##### `OFF` <a name="OFF" id="@open-constructs/aws-cdk.LogLevel.OFF"></a>

---


##### `ERROR` <a name="ERROR" id="@open-constructs/aws-cdk.LogLevel.ERROR"></a>

---


##### `WARNING` <a name="WARNING" id="@open-constructs/aws-cdk.LogLevel.WARNING"></a>

---


##### `INFO` <a name="INFO" id="@open-constructs/aws-cdk.LogLevel.INFO"></a>

---


##### `DEBUG` <a name="DEBUG" id="@open-constructs/aws-cdk.LogLevel.DEBUG"></a>

---


##### `ALL` <a name="ALL" id="@open-constructs/aws-cdk.LogLevel.ALL"></a>

---


### MinifyEngine <a name="MinifyEngine" id="@open-constructs/aws-cdk.MinifyEngine"></a>

Minification engine enum.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.MinifyEngine.NONE">NONE</a></code> | No minification. |
| <code><a href="#@open-constructs/aws-cdk.MinifyEngine.ES_BUILD">ES_BUILD</a></code> | Uses esbuild for minification. |
| <code><a href="#@open-constructs/aws-cdk.MinifyEngine.SIMPLE">SIMPLE</a></code> | Removes comments and trims leading/trailing spaces from lines. |

---

##### `NONE` <a name="NONE" id="@open-constructs/aws-cdk.MinifyEngine.NONE"></a>

No minification.

---


##### `ES_BUILD` <a name="ES_BUILD" id="@open-constructs/aws-cdk.MinifyEngine.ES_BUILD"></a>

Uses esbuild for minification.

Add the following to your package.json file:
```
"esbuild": "^0.18.6"
```

---


##### `SIMPLE` <a name="SIMPLE" id="@open-constructs/aws-cdk.MinifyEngine.SIMPLE"></a>

Removes comments and trims leading/trailing spaces from lines.

---

