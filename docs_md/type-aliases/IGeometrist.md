[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / IGeometrist

# Type Alias: IGeometrist

> **IGeometrist** = `object`

Defined in: index.d.ts:1474

对象分析

线重采样，线光滑，面相交，面合并，面擦除，圆坐标计算

## Properties

### createCircle()

> **createCircle**: (`center`, `radius`, `pointCount`, `isPolygon`) => [`IGeoJSONLine`](../interfaces/IGeoJSONLine.md) \| [`IGeoJSONPolygon`](../interfaces/IGeoJSONPolygon.md)

Defined in: index.d.ts:1518

圆坐标计算

#### Parameters

##### center

[`IPoint2D`](IPoint2D.md)

中心点

##### radius

`number`

半径（米）

##### pointCount

`number`

点数量，默认72 ps.该值至少大于3

##### isPolygon

`boolean`

返回面或线，默认true返回面

#### Returns

[`IGeoJSONLine`](../interfaces/IGeoJSONLine.md) \| [`IGeoJSONPolygon`](../interfaces/IGeoJSONPolygon.md)

圆面或线

***

### polygonErase()

> **polygonErase**: (`erasedPolygon`, `srcPolygon`) => [`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md) \| `null`

Defined in: index.d.ts:1509

面擦除

#### Parameters

##### erasedPolygon

擦除部分

[`IGeoJSONPolygon`](../interfaces/IGeoJSONPolygon.md) | [`IGeoJSONMultiPolygon`](../interfaces/IGeoJSONMultiPolygon.md)

##### srcPolygon

[`IGeoJSONPolygon`](../interfaces/IGeoJSONPolygon.md)

原面对象

#### Returns

[`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md) \| `null`

擦除结果

***

### polygonIntersect()

> **polygonIntersect**: (`polygon1`, `polygon2`) => [`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md) \| `null`

Defined in: index.d.ts:1495

面相交

#### Parameters

##### polygon1

[`IGeoJSONPolygon`](../interfaces/IGeoJSONPolygon.md)

##### polygon2

[`IGeoJSONPolygon`](../interfaces/IGeoJSONPolygon.md)

#### Returns

[`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md) \| `null`

***

### polygonUnion()

> **polygonUnion**: (`polygon1`, `polygon2`) => [`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md) \| `null`

Defined in: index.d.ts:1502

面合并

#### Parameters

##### polygon1

[`IGeoJSONPolygon`](../interfaces/IGeoJSONPolygon.md)

##### polygon2

[`IGeoJSONPolygon`](../interfaces/IGeoJSONPolygon.md)

#### Returns

[`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md) \| `null`

合并结果

***

### resample()

> **resample**: (`geometry`, `tolerance?`) => [`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md) \| `null`

Defined in: index.d.ts:1481

线重采样

#### Parameters

##### geometry

原线对象

[`IGeoJSONPolygon`](../interfaces/IGeoJSONPolygon.md) | [`IGeoJSONLine`](../interfaces/IGeoJSONLine.md)

##### tolerance?

`number`

采样间隔，单位度，默认为1e-6

#### Returns

[`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md) \| `null`

采样结果

***

### smooth()

> **smooth**: (`geometry`, `smoothness?`) => [`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md) \| `null`

Defined in: index.d.ts:1488

线光滑

#### Parameters

##### geometry

原线对象

[`IGeoJSONPolygon`](../interfaces/IGeoJSONPolygon.md) | [`IGeoJSONLine`](../interfaces/IGeoJSONLine.md)

##### smoothness?

`number`

光滑系数，默认为2

#### Returns

[`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md) \| `null`

光滑结果
