[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / ILayerText

# Interface: ILayerText

Defined in: index.d.ts:489

## Extends

- [`ILayerBase`](ILayerBase.md)

## Properties

### dbId?

> `optional` **dbId**: `string`

Defined in: index.d.ts:859

数据库id

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`dbId`](ILayerBase.md#dbid)

***

### editable

> **editable**: `boolean`

Defined in: index.d.ts:503

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

### selectable

> **selectable**: `boolean`

Defined in: index.d.ts:498

是否可选

***

### selectionStyle

> **selectionStyle**: \{ `textColor`: `string`; \} \| \{ `haloColor`: `string`; \}

Defined in: index.d.ts:511

选择集风格

#### Type declaration

\{ `textColor`: `string`; \}

#### textColor

> **textColor**: `string`

文本颜色

\{ `haloColor`: `string`; \}

#### haloColor

> **haloColor**: `string`

轮廓颜色

***

### sourceId

> **sourceId**: `string`

Defined in: index.d.ts:494

数据源id

***

### textScaledBaseZoom?

> `optional` **textScaledBaseZoom**: `number`

Defined in: index.d.ts:507

文字大小（像素）随地图缩放的基础zoom，undefined表示不随地图缩放

***

### type

> **type**: `"text"`

Defined in: index.d.ts:490

#### Overrides

[`ILayerBase`](ILayerBase.md).[`type`](ILayerBase.md#type)

***

### visible

> **visible**: `boolean`

Defined in: index.d.ts:863

是否可见

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`visible`](ILayerBase.md#visible)
