[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / IDataConverter

# Type Alias: IDataConverter

> **IDataConverter** = `object`

Defined in: index.d.ts:1262

数据转换模块

json，shp，excel等数据转换为地图数据格式

## Properties

### convertFillToPoint()

> **convertFillToPoint**: (`geoJson`) => [`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md)[]

Defined in: index.d.ts:1289

面数据转为点串

#### Parameters

##### geoJson

[`IGeoJSONFeatureCollection`](../interfaces/IGeoJSONFeatureCollection.md)

#### Returns

[`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md)[]

***

### excelToData()

> **excelToData**: (`data`, `param`) => [`ExcelImportSucess`](../interfaces/ExcelImportSucess.md) \| [`ExccelImportFail`](../interfaces/ExccelImportFail.md)

Defined in: index.d.ts:1284

excel转GeoJson数据

#### Parameters

##### data

[`ExcelData`](../interfaces/ExcelData.md)

##### param

[`ExcelImportParam`](../interfaces/ExcelImportParam.md)

#### Returns

[`ExcelImportSucess`](../interfaces/ExcelImportSucess.md) \| [`ExccelImportFail`](../interfaces/ExccelImportFail.md)

***

### GeoJSONtoData()

> **GeoJSONtoData**: (`geojson`, `param?`) => [`GeoJSONImportResult`](GeoJSONImportResult.md)

Defined in: index.d.ts:1269

GeoJSON 转 点线面数据源数据

#### Parameters

##### geojson

[`IGeoJSONData`](IGeoJSONData.md)

GeoJSON 对象

##### param?

[`GeoJSONImportParam`](../interfaces/GeoJSONImportParam.md)

转换参数

#### Returns

[`GeoJSONImportResult`](GeoJSONImportResult.md)

点线面数据源数组

***

### readExcel()

> **readExcel**: (`content`, `param`) => [`ExcelData`](../interfaces/ExcelData.md) \| `undefined`

Defined in: index.d.ts:1276

读取excel文件内容，支持xls，xlsx，csv

#### Parameters

##### content

`string`

内容字符串

##### param

读取参数

###### firstLineAsFieldInfo

`boolean`

#### Returns

[`ExcelData`](../interfaces/ExcelData.md) \| `undefined`

excel内容数据

## Methods

### shp2Geojson()

> **shp2Geojson**(`src`): `Promise`\<[`IGeoJSONFeatureCollection`](../interfaces/IGeoJSONFeatureCollection.md)[]\>

Defined in: index.d.ts:1295

shp 转 geojson

#### Parameters

##### src

shp相关文件 base64 字符串或者 File 对象

`object`[] | `object`[]

#### Returns

`Promise`\<[`IGeoJSONFeatureCollection`](../interfaces/IGeoJSONFeatureCollection.md)[]\>

geojson 对象
