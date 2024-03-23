# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostReport <a name="CostReport" id="@open-constructs/aws-cdk.aws_cur.CostReport"></a>

Represents a Cost Report construct in AWS CDK.

This class creates an AWS Cost and Usage Report, stored in an S3 bucket, and configures the necessary permissions.

*Example*

```typescript
const report = new CostReport(stack, 'MyReport', {
  costReportName: 'business-report',
  reportGranularity: ReportGranularity.MONTHLY,
  format: CurFormat.PARQUET
});
```


#### Initializers <a name="Initializers" id="@open-constructs/aws-cdk.aws_cur.CostReport.Initializer"></a>

```typescript
import { aws_cur } from '@open-constructs/aws-cdk'

new aws_cur.CostReport(scope: Construct, id: string, props: CostReportProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.Initializer.parameter.props">props</a></code> | <code>@open-constructs/aws-cdk.aws_cur.CostReportProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.aws_cur.CostReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@open-constructs/aws-cdk.aws_cur.CostReport.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@open-constructs/aws-cdk.aws_cur.CostReport.Initializer.parameter.props"></a>

- *Type:* @open-constructs/aws-cdk.aws_cur.CostReportProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@open-constructs/aws-cdk.aws_cur.CostReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.aws_cur.CostReport.isConstruct"></a>

```typescript
import { aws_cur } from '@open-constructs/aws-cdk'

aws_cur.CostReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@open-constructs/aws-cdk.aws_cur.CostReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@open-constructs/aws-cdk.aws_cur.CostReport.property.reportBucket">reportBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 bucket that stores the cost report. |

---

##### `node`<sup>Required</sup> <a name="node" id="@open-constructs/aws-cdk.aws_cur.CostReport.property.node"></a>

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

---


## Structs <a name="Structs" id="Structs"></a>

### ConstructServiceProps <a name="ConstructServiceProps" id="@open-constructs/aws-cdk.ConstructServiceProps"></a>

Properties for defining a construct service.

A ConstructService is a service stored on a construct as a runtime-defined Symbol property
(hereafter referred to as the serviceProperty) rather than as a typescript compile-time property.

There is no type associated with these symbols unless an accessor function is defined,
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
unique, so define your symbol this way:
```
// Your package name
const NAMESPACE = "cdk-long-promise"
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

This is useful for IOC services stored in the construct tree, similar to how
Annotations works.

Note:  You can also store factories in the tree itself, and those factories (when found) will be used instead of
this default factory.

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
unique, so define your symbol this way:
```
// Your package name
const NAMESPACE = "cdk-long-promise"
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

This is useful for IOC services stored in the construct tree, similar to how
Annotations works.

Note:  You can also store factories in the tree itself, and those factories (when found) will be used instead of
this default factory.

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

### CostReportProps <a name="CostReportProps" id="@open-constructs/aws-cdk.aws_cur.CostReportProps"></a>

Properties for defining a Cost and Usage Report.

#### Initializer <a name="Initializer" id="@open-constructs/aws-cdk.aws_cur.CostReportProps.Initializer"></a>

```typescript
import { aws_cur } from '@open-constructs/aws-cdk'

const costReportProps: aws_cur.CostReportProps = { ... }
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

Se.

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
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.isConstruct">isConstruct</a></code> | Construct.isConstruct does not always work because the property is set on the prototype. And if prototypes worked across library versions, we wouldn't need symbol-based RTTI in the CDK. See https://github.com/aws/constructs/issues/1403. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@open-constructs/aws-cdk.AppConstructTreeService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.AppConstructTreeService.isConstruct"></a>

```typescript
import { AppConstructTreeService } from '@open-constructs/aws-cdk'

AppConstructTreeService.isConstruct(scope: any)
```

Construct.isConstruct does not always work because the property is set on the prototype. And if prototypes worked across library versions, we wouldn't need symbol-based RTTI in the CDK. See https://github.com/aws/constructs/issues/1403.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.AppConstructTreeService.isConstruct.parameter.scope"></a>

- *Type:* any

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

Se.

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
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.isConstruct">isConstruct</a></code> | Construct.isConstruct does not always work because the property is set on the prototype. And if prototypes worked across library versions, we wouldn't need symbol-based RTTI in the CDK. See https://github.com/aws/constructs/issues/1403. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.isConstruct"></a>

```typescript
import { ConstructRunTimeTypeInfo } from '@open-constructs/aws-cdk'

ConstructRunTimeTypeInfo.isConstruct(scope: any)
```

Construct.isConstruct does not always work because the property is set on the prototype. And if prototypes worked across library versions, we wouldn't need symbol-based RTTI in the CDK. See https://github.com/aws/constructs/issues/1403.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructRunTimeTypeInfo.isConstruct.parameter.scope"></a>

- *Type:* any

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

Defines a service (object-valued symbol property) that can be stored on a construct.

This class is not meant to be used directly by end users, but rather
wrapped by another class (or classes) that define and use the ConstructService.

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

Se.

---

###### `factory`<sup>Required</sup> <a name="factory" id="@open-constructs/aws-cdk.ConstructService.setFactory.parameter.factory"></a>

- *Type:* <a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.isConstruct">isConstruct</a></code> | Construct.isConstruct does not always work because the property is set on the prototype. And if prototypes worked across library versions, we wouldn't need symbol-based RTTI in the CDK. See https://github.com/aws/constructs/issues/1403. |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@open-constructs/aws-cdk.ConstructService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.ConstructService.isConstruct"></a>

```typescript
import { ConstructService } from '@open-constructs/aws-cdk'

ConstructService.isConstruct(scope: any)
```

Construct.isConstruct does not always work because the property is set on the prototype. And if prototypes worked across library versions, we wouldn't need symbol-based RTTI in the CDK. See https://github.com/aws/constructs/issues/1403.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructService.isConstruct.parameter.scope"></a>

- *Type:* any

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

Se.

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
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.isConstruct">isConstruct</a></code> | Construct.isConstruct does not always work because the property is set on the prototype. And if prototypes worked across library versions, we wouldn't need symbol-based RTTI in the CDK. See https://github.com/aws/constructs/issues/1403. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@open-constructs/aws-cdk.ConstructTreeService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.ConstructTreeService.isConstruct"></a>

```typescript
import { ConstructTreeService } from '@open-constructs/aws-cdk'

ConstructTreeService.isConstruct(scope: any)
```

Construct.isConstruct does not always work because the property is set on the prototype. And if prototypes worked across library versions, we wouldn't need symbol-based RTTI in the CDK. See https://github.com/aws/constructs/issues/1403.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.ConstructTreeService.isConstruct.parameter.scope"></a>

- *Type:* any

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

Se.

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
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.isConstruct">isConstruct</a></code> | Construct.isConstruct does not always work because the property is set on the prototype. And if prototypes worked across library versions, we wouldn't need symbol-based RTTI in the CDK. See https://github.com/aws/constructs/issues/1403. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.isFactory">isFactory</a></code> | Returns true if a service value is actualy a factory. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.scopeOf">scopeOf</a></code> | Returns the scope of the property from a ServiceQueryResult. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.scopesOf">scopesOf</a></code> | Returns the scopes from an array of ServiceQueryResults. |
| <code><a href="#@open-constructs/aws-cdk.StackConstructTreeService.serviceOf">serviceOf</a></code> | Returns the value of the property from a ServiceQueryResult. |

---

##### `isConstruct` <a name="isConstruct" id="@open-constructs/aws-cdk.StackConstructTreeService.isConstruct"></a>

```typescript
import { StackConstructTreeService } from '@open-constructs/aws-cdk'

StackConstructTreeService.isConstruct(scope: any)
```

Construct.isConstruct does not always work because the property is set on the prototype. And if prototypes worked across library versions, we wouldn't need symbol-based RTTI in the CDK. See https://github.com/aws/constructs/issues/1403.

###### `scope`<sup>Required</sup> <a name="scope" id="@open-constructs/aws-cdk.StackConstructTreeService.isConstruct.parameter.scope"></a>

- *Type:* any

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


## Protocols <a name="Protocols" id="Protocols"></a>

### IConstructFactory <a name="IConstructFactory" id="@open-constructs/aws-cdk.IConstructFactory"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.IConstructFactory">IConstructFactory</a>

Interface for creating a construct.



### IConstructPredicate <a name="IConstructPredicate" id="@open-constructs/aws-cdk.IConstructPredicate"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.IConstructPredicate">IConstructPredicate</a>

Generalized little-l lambda for a construct.



### IConstructServiceFactory <a name="IConstructServiceFactory" id="@open-constructs/aws-cdk.IConstructServiceFactory"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.IConstructServiceFactory">IConstructServiceFactory</a>

Factory for a construct service.

Like IStopCondition,
this is optional based on your use-case.



### IConstuctTest <a name="IConstuctTest" id="@open-constructs/aws-cdk.IConstuctTest"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.IConstuctTest">IConstuctTest</a>

A construct predicate type assertion.

Enables using CDK XXX.isXXX methods with ConstructTreeSearch and
IConstructPredicate.
Such as CfnElement.isCfnElement or Stack.isStack.

Usage:



### IStopCondition <a name="IStopCondition" id="@open-constructs/aws-cdk.IStopCondition"></a>

- *Implemented By:* <a href="#@open-constructs/aws-cdk.IStopCondition">IStopCondition</a>

Defines where to stop when navigating the construct tree.

If not provided, we stop either at the top or bottom of the tree (depending
on search direction).



