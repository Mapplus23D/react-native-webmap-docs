[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / ILayerBase

# Interface: ILayerBase

Defined in: index.d.ts:846

## Extended by

- [`ILayerVector`](ILayerVector.md)
- [`ILayerCluster`](ILayerCluster.md)
- [`ILayerImage`](ILayerImage.md)
- [`ILayerText`](ILayerText.md)
- [`ILayerTheme`](ILayerTheme.md)
- [`ILayerGroup`](ILayerGroup.md)

## Properties

### dbId?

> `optional` **dbId**: `string`

Defined in: index.d.ts:859

数据库id

***

### id

> **id**: `string`

Defined in: index.d.ts:855

图层id

***

### maxVisibleScale

> **maxVisibleScale**: `number`

Defined in: index.d.ts:867

最大可见比例尺

***

### metadata?

> `optional` **metadata**: `unknown`

Defined in: index.d.ts:875

自定义数据

***

### minVisibleScale

> **minVisibleScale**: `number`

Defined in: index.d.ts:871

最小可见比例尺

***

### name

> **name**: `string`

Defined in: index.d.ts:851

图层名

***

### type

> **type**: [`TLayerType`](../type-aliases/TLayerType.md)

Defined in: index.d.ts:847

***

### visible

> **visible**: `boolean`

Defined in: index.d.ts:863

是否可见
