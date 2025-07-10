[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / ICoordTrans

# Type Alias: ICoordTrans

> **ICoordTrans** = `object`

Defined in: index.d.ts:1248

坐标转换

## Properties

### translateGeoJSON()

> **translateGeoJSON**: \<`T`\>(`feature`, `from`, `to`) => `T`

Defined in: index.d.ts:1255

geojson数据坐标转换

#### Type Parameters

##### T

`T` *extends* [`IGeoJSONData`](IGeoJSONData.md)

#### Parameters

##### feature

`T`

数据

##### from

[`Coordsys`](Coordsys.md)

源坐标系

##### to

[`Coordsys`](Coordsys.md)

结果坐标系

#### Returns

`T`
