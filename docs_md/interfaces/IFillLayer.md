[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / IFillLayer

# Interface: IFillLayer

Defined in: index.d.ts:433

## Extends

- [`ILayerVector`](ILayerVector.md)

## Properties

### dbId?

> `optional` **dbId**: `string`

Defined in: index.d.ts:847

数据库id

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`dbId`](ILayerVector.md#dbid)

***

### editable

> **editable**: `boolean`

Defined in: index.d.ts:427

是否可编辑
所有图层中只能同时有一个可编辑的图层

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`editable`](ILayerVector.md#editable)

***

### geometryType

> **geometryType**: `"fill"`

Defined in: index.d.ts:434

数据源内几何对象类型

#### Overrides

[`ILayerVector`](ILayerVector.md).[`geometryType`](ILayerVector.md#geometrytype)

***

### id

> **id**: `string`

Defined in: index.d.ts:843

图层id

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`id`](ILayerVector.md#id)

***

### maxVisibleScale

> **maxVisibleScale**: `number`

Defined in: index.d.ts:855

最大可见比例尺

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`maxVisibleScale`](ILayerVector.md#maxvisiblescale)

***

### metadata?

> `optional` **metadata**: `unknown`

Defined in: index.d.ts:863

自定义数据

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`metadata`](ILayerVector.md#metadata)

***

### minVisibleScale

> **minVisibleScale**: `number`

Defined in: index.d.ts:859

最小可见比例尺

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`minVisibleScale`](ILayerVector.md#minvisiblescale)

***

### name

> **name**: `string`

Defined in: index.d.ts:839

图层名

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`name`](ILayerVector.md#name)

***

### selectable

> **selectable**: `boolean`

Defined in: index.d.ts:422

是否可选

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`selectable`](ILayerVector.md#selectable)

***

### selectionStyle

> **selectionStyle**: `Partial`\<[`IGeoStyle`](../type-aliases/IGeoStyle.md)\>

Defined in: index.d.ts:431

选择集风格

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`selectionStyle`](ILayerVector.md#selectionstyle)

***

### sourceId

> **sourceId**: `string`

Defined in: index.d.ts:406

数据源id

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`sourceId`](ILayerVector.md#sourceid)

***

### sourceLayer?

> `optional` **sourceLayer**: `string`

Defined in: index.d.ts:410

指定mvt数据源中的 source layer

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`sourceLayer`](ILayerVector.md#sourcelayer)

***

### style

> **style**: `Partial`\<[`IFillStyle`](IFillStyle.md)\>

Defined in: index.d.ts:435

风格

#### Overrides

[`ILayerVector`](ILayerVector.md).[`style`](ILayerVector.md#style)

***

### type

> **type**: `"vector"`

Defined in: index.d.ts:402

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`type`](ILayerVector.md#type)

***

### visible

> **visible**: `boolean`

Defined in: index.d.ts:851

是否可见

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`visible`](ILayerVector.md#visible)
