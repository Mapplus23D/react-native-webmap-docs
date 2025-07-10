[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / IPointLayer

# Interface: IPointLayer

Defined in: index.d.ts:523

## Extends

- [`ILayerVector`](ILayerVector.md)

## Properties

### dbId?

> `optional` **dbId**: `string`

Defined in: index.d.ts:859

数据库id

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`dbId`](ILayerVector.md#dbid)

***

### editable

> **editable**: `boolean`

Defined in: index.d.ts:439

是否可编辑
所有图层中只能同时有一个可编辑的图层

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`editable`](ILayerVector.md#editable)

***

### geometryType

> **geometryType**: `"point"`

Defined in: index.d.ts:524

数据源内几何对象类型

#### Overrides

[`ILayerVector`](ILayerVector.md).[`geometryType`](ILayerVector.md#geometrytype)

***

### id

> **id**: `string`

Defined in: index.d.ts:855

图层id

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`id`](ILayerVector.md#id)

***

### maxVisibleScale

> **maxVisibleScale**: `number`

Defined in: index.d.ts:867

最大可见比例尺

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`maxVisibleScale`](ILayerVector.md#maxvisiblescale)

***

### metadata?

> `optional` **metadata**: `unknown`

Defined in: index.d.ts:875

自定义数据

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`metadata`](ILayerVector.md#metadata)

***

### minVisibleScale

> **minVisibleScale**: `number`

Defined in: index.d.ts:871

最小可见比例尺

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`minVisibleScale`](ILayerVector.md#minvisiblescale)

***

### name

> **name**: `string`

Defined in: index.d.ts:851

图层名

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`name`](ILayerVector.md#name)

***

### selectable

> **selectable**: `boolean`

Defined in: index.d.ts:434

是否可选

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`selectable`](ILayerVector.md#selectable)

***

### selectionStyle

> **selectionStyle**: `Partial`\<[`IGeoStyle`](../type-aliases/IGeoStyle.md)\>

Defined in: index.d.ts:443

选择集风格

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`selectionStyle`](ILayerVector.md#selectionstyle)

***

### sourceId

> **sourceId**: `string`

Defined in: index.d.ts:418

数据源id

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`sourceId`](ILayerVector.md#sourceid)

***

### sourceLayer?

> `optional` **sourceLayer**: `string`

Defined in: index.d.ts:422

指定mvt数据源中的 source layer

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`sourceLayer`](ILayerVector.md#sourcelayer)

***

### style

> **style**: `Partial`\<[`IPointStyle`](IPointStyle.md)\>

Defined in: index.d.ts:525

风格

#### Overrides

[`ILayerVector`](ILayerVector.md).[`style`](ILayerVector.md#style)

***

### type

> **type**: `"vector"`

Defined in: index.d.ts:414

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`type`](ILayerVector.md#type)

***

### visible

> **visible**: `boolean`

Defined in: index.d.ts:863

是否可见

#### Inherited from

[`ILayerVector`](ILayerVector.md).[`visible`](ILayerVector.md#visible)
