[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / IGeoJSONFeature

# Interface: IGeoJSONFeature

Defined in: index.d.ts:16

单个 Feature 对象

## Properties

### dbId?

> `optional` **dbId**: `string`

Defined in: index.d.ts:38

数据库id

***

### geometry

> **geometry**: [`IGeoJSONPoint`](IGeoJSONPoint.md) \| [`IGeoJSONLine`](IGeoJSONLine.md) \| [`IGeoJSONPolygon`](IGeoJSONPolygon.md) \| [`IGeoJSONMultiPoint`](IGeoJSONMultiPoint.md) \| [`IGeoJSONMultiLine`](IGeoJSONMultiLine.md) \| [`IGeoJSONMultiPolygon`](IGeoJSONMultiPolygon.md) \| [`IGeoJSONGeometryCollection`](IGeoJSONGeometryCollection.md)

Defined in: index.d.ts:24

Featuer 包含的几何对象

***

### id?

> `optional` **id**: `string` \| `number`

Defined in: index.d.ts:34

Feature 对象的 id

***

### properties?

> `optional` **properties**: `null` \| \{[`_`: `string`]: `unknown`; \}

Defined in: index.d.ts:28

Feature 对象的属性信息

***

### type

> **type**: `"Feature"`

Defined in: index.d.ts:20

Feature 对象类型
