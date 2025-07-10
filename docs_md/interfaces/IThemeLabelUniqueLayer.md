[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / IThemeLabelUniqueLayer

# Interface: IThemeLabelUniqueLayer

Defined in: index.d.ts:680

## Extends

- [`ILayerTheme`](ILayerTheme.md)

## Properties

### dbId?

> `optional` **dbId**: `string`

Defined in: index.d.ts:859

数据库id

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`dbId`](ILayerTheme.md#dbid)

***

### editable

> **editable**: `boolean`

Defined in: index.d.ts:668

是否可编辑
所有图层中只能同时有一个可编辑的图层

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`editable`](ILayerTheme.md#editable)

***

### geometryType

> **geometryType**: [`IGeometryType`](../type-aliases/IGeometryType.md)

Defined in: index.d.ts:655

数据源内几何对象类型

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`geometryType`](ILayerTheme.md#geometrytype)

***

### id

> **id**: `string`

Defined in: index.d.ts:855

图层id

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`id`](ILayerTheme.md#id)

***

### maxVisibleScale

> **maxVisibleScale**: `number`

Defined in: index.d.ts:867

最大可见比例尺

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`maxVisibleScale`](ILayerTheme.md#maxvisiblescale)

***

### metadata?

> `optional` **metadata**: `unknown`

Defined in: index.d.ts:875

自定义数据

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`metadata`](ILayerTheme.md#metadata)

***

### minVisibleScale

> **minVisibleScale**: `number`

Defined in: index.d.ts:871

最小可见比例尺

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`minVisibleScale`](ILayerTheme.md#minvisiblescale)

***

### name

> **name**: `string`

Defined in: index.d.ts:851

图层名

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`name`](ILayerTheme.md#name)

***

### selectable

> **selectable**: `boolean`

Defined in: index.d.ts:663

是否可选

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`selectable`](ILayerTheme.md#selectable)

***

### selectionStyle

> **selectionStyle**: `Partial`\<[`IGeoStyle`](../type-aliases/IGeoStyle.md)\>

Defined in: index.d.ts:672

选择集风格

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`selectionStyle`](ILayerTheme.md#selectionstyle)

***

### sourceId

> **sourceId**: `string`

Defined in: index.d.ts:647

数据源id

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`sourceId`](ILayerTheme.md#sourceid)

***

### sourceLayer?

> `optional` **sourceLayer**: `string`

Defined in: index.d.ts:651

指定mvt数据源中的 source layer

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`sourceLayer`](ILayerTheme.md#sourcelayer)

***

### theme

> **theme**: [`IThemeLabelUnique`](IThemeLabelUnique.md)

Defined in: index.d.ts:682

专题

#### Overrides

[`ILayerTheme`](ILayerTheme.md).[`theme`](ILayerTheme.md#theme)

***

### type

> **type**: `"theme"`

Defined in: index.d.ts:681

#### Overrides

[`ILayerTheme`](ILayerTheme.md).[`type`](ILayerTheme.md#type)

***

### visible

> **visible**: `boolean`

Defined in: index.d.ts:863

是否可见

#### Inherited from

[`ILayerTheme`](ILayerTheme.md).[`visible`](ILayerTheme.md#visible)
