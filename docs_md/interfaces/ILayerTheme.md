[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / ILayerTheme

# Interface: ILayerTheme

Defined in: index.d.ts:642

## Extends

- [`ILayerBase`](ILayerBase.md)

## Extended by

- [`IThemeLabelLayer`](IThemeLabelLayer.md)
- [`IThemeLabelRangeLayer`](IThemeLabelRangeLayer.md)
- [`IThemeLabelUniqueLayer`](IThemeLabelUniqueLayer.md)
- [`IThemeRangeLayer`](IThemeRangeLayer.md)
- [`IThemeUniqueLayer`](IThemeUniqueLayer.md)

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

Defined in: index.d.ts:668

是否可编辑
所有图层中只能同时有一个可编辑的图层

***

### geometryType

> **geometryType**: [`IGeometryType`](../type-aliases/IGeometryType.md)

Defined in: index.d.ts:655

数据源内几何对象类型

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

Defined in: index.d.ts:663

是否可选

***

### selectionStyle

> **selectionStyle**: `Partial`\<[`IGeoStyle`](../type-aliases/IGeoStyle.md)\>

Defined in: index.d.ts:672

选择集风格

***

### sourceId

> **sourceId**: `string`

Defined in: index.d.ts:647

数据源id

***

### sourceLayer?

> `optional` **sourceLayer**: `string`

Defined in: index.d.ts:651

指定mvt数据源中的 source layer

***

### theme

> **theme**: [`IThemeLabel`](IThemeLabel.md) \| [`IThemeRange`](IThemeRange.md) \| [`IThemeLabelRange`](IThemeLabelRange.md) \| [`IThemeLabelUnique`](IThemeLabelUnique.md) \| [`IThemeUnique`](IThemeUnique.md)

Defined in: index.d.ts:659

专题

***

### type

> **type**: `"theme"`

Defined in: index.d.ts:643

#### Overrides

[`ILayerBase`](ILayerBase.md).[`type`](ILayerBase.md#type)

***

### visible

> **visible**: `boolean`

Defined in: index.d.ts:863

是否可见

#### Inherited from

[`ILayerBase`](ILayerBase.md).[`visible`](ILayerBase.md#visible)
