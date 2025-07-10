[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / ILayerVector

# Interface: ILayerVector

Defined in: index.d.ts:401

## Extends

- [`ILayerBase`](ILayerBase.md)

## Extended by

- [`IFillLayer`](IFillLayer.md)
- [`ILineLayer`](ILineLayer.md)
- [`IPointLayer`](IPointLayer.md)

## Properties

### dbId?

> `optional` **dbId**: `string`

Defined in: index.d.ts:847

数据库id

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`dbId`](ILayerBase.md#dbid)

***

### editable

> **editable**: `boolean`

Defined in: index.d.ts:427

是否可编辑
所有图层中只能同时有一个可编辑的图层

***

### geometryType

> **geometryType**: [`IGeometryType`](../type-aliases/IGeometryType.md)

Defined in: index.d.ts:414

数据源内几何对象类型

***

### id

> **id**: `string`

Defined in: index.d.ts:843

图层id

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`id`](ILayerBase.md#id)

***

### maxVisibleScale

> **maxVisibleScale**: `number`

Defined in: index.d.ts:855

最大可见比例尺

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`maxVisibleScale`](ILayerBase.md#maxvisiblescale)

***

### metadata?

> `optional` **metadata**: `unknown`

Defined in: index.d.ts:863

自定义数据

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`metadata`](ILayerBase.md#metadata)

***

### minVisibleScale

> **minVisibleScale**: `number`

Defined in: index.d.ts:859

最小可见比例尺

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`minVisibleScale`](ILayerBase.md#minvisiblescale)

***

### name

> **name**: `string`

Defined in: index.d.ts:839

图层名

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`name`](ILayerBase.md#name)

***

### selectable

> **selectable**: `boolean`

Defined in: index.d.ts:422

是否可选

***

### selectionStyle

> **selectionStyle**: `Partial`\<[`IGeoStyle`](../type-aliases/IGeoStyle.md)\>

Defined in: index.d.ts:431

选择集风格

***

### sourceId

> **sourceId**: `string`

Defined in: index.d.ts:406

数据源id

***

### sourceLayer?

> `optional` **sourceLayer**: `string`

Defined in: index.d.ts:410

指定mvt数据源中的 source layer

***

### style

> **style**: `Partial`\<[`IGeoStyle`](../type-aliases/IGeoStyle.md)\>

Defined in: index.d.ts:418

风格

***

### type

> **type**: `"vector"`

Defined in: index.d.ts:402

#### Overrides

[`ILayerBase`](ILayerBase.md).[`type`](ILayerBase.md#type)

***

### visible

> **visible**: `boolean`

Defined in: index.d.ts:851

是否可见

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`visible`](ILayerBase.md#visible)
