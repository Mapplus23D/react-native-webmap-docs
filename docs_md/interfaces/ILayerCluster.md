[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / ILayerCluster

# Interface: ILayerCluster

Defined in: index.d.ts:449

## Extends

- [`ILayerBase`](ILayerBase.md)

## Properties

### clusterSteps?

> `optional` **clusterSteps**: `number`[]

Defined in: index.d.ts:478

聚合分层风格

***

### clusterStyles?

> `optional` **clusterStyles**: `Partial`\<`Omit`\<[`IPointStyle`](IPointStyle.md), `"circleSymbol"`\>\>[]

Defined in: index.d.ts:479

***

### dbId?

> `optional` **dbId**: `string`

Defined in: index.d.ts:859

数据库id

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`dbId`](ILayerBase.md#dbid)

***

### editable

> **editable**: `boolean`

Defined in: index.d.ts:463

是否可编辑
所有图层中只能同时有一个可编辑的图层

***

### id

> **id**: `string`

Defined in: index.d.ts:855

图层id

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`id`](ILayerBase.md#id)

***

### maxVisibleScale

> **maxVisibleScale**: `number`

Defined in: index.d.ts:867

最大可见比例尺

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`maxVisibleScale`](ILayerBase.md#maxvisiblescale)

***

### metadata?

> `optional` **metadata**: `unknown`

Defined in: index.d.ts:875

自定义数据

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`metadata`](ILayerBase.md#metadata)

***

### minVisibleScale

> **minVisibleScale**: `number`

Defined in: index.d.ts:871

最小可见比例尺

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`minVisibleScale`](ILayerBase.md#minvisiblescale)

***

### name

> **name**: `string`

Defined in: index.d.ts:851

图层名

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`name`](ILayerBase.md#name)

***

### pointStyle?

> `optional` **pointStyle**: `Partial`\<`Omit`\<[`IPointStyle`](IPointStyle.md), `"circleSymbol"`\>\>

Defined in: index.d.ts:467

原始点的风格

***

### selectable

> **selectable**: `boolean`

Defined in: index.d.ts:458

是否可选

***

### selectionStyle?

> `optional` **selectionStyle**: `Partial`\<`Omit`\<[`IPointStyle`](IPointStyle.md), `"circleSymbol"`\>\>

Defined in: index.d.ts:483

选择集风格

***

### sourceId

> **sourceId**: `string`

Defined in: index.d.ts:454

数据源id

***

### textStyle?

> `optional` **textStyle**: `object`

Defined in: index.d.ts:471

聚合后数字风格

#### textColor

> **textColor**: `string`

#### textSize

> **textSize**: `number`

***

### type

> **type**: `"cluster"`

Defined in: index.d.ts:450

#### Overrides

[`ILayerBase`](ILayerBase.md).[`type`](ILayerBase.md#type)

***

### visible

> **visible**: `boolean`

Defined in: index.d.ts:863

是否可见

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`visible`](ILayerBase.md#visible)
