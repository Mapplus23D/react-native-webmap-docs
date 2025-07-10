[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / IRasterTileProvider

# Type Alias: IRasterTileProvider

> **IRasterTileProvider** = `object`

Defined in: index.d.ts:1886

栅格地图模块

获取各种栅格地图信息

包含bing，长光卫星吉林1号，天地图，百度矢量，百度标注，以及iServer发布的服务

## Properties

### getBDAnnotation()

> **getBDAnnotation**: () => [`IBaiduRasterData`](../interfaces/IBaiduRasterData.md)

Defined in: index.d.ts:1898

获取百度标注服务信息

#### Returns

[`IBaiduRasterData`](../interfaces/IBaiduRasterData.md)

***

### getBDSatellite()

> **getBDSatellite**: () => [`IBaiduRasterData`](../interfaces/IBaiduRasterData.md)

Defined in: index.d.ts:1896

获取百度卫星影像服务信息

#### Returns

[`IBaiduRasterData`](../interfaces/IBaiduRasterData.md)

***

### getBDVector()

> **getBDVector**: () => [`IBaiduRasterData`](../interfaces/IBaiduRasterData.md)

Defined in: index.d.ts:1894

获取百度矢量服务信息

#### Returns

[`IBaiduRasterData`](../interfaces/IBaiduRasterData.md)

***

### getBingData()

> **getBingData**: (`key`, `style`) => `Promise`\<[`IRasterTileData`](IRasterTileData.md) \| `undefined`\>

Defined in: index.d.ts:1888

获取bing服务信息

#### Parameters

##### key

`string`

##### style

[`BingMapsStyle`](../enumerations/BingMapsStyle.md)

#### Returns

`Promise`\<[`IRasterTileData`](IRasterTileData.md) \| `undefined`\>

***

### getIServerTileimage()

> **getIServerTileimage**: (`url`, `tileSize?`, `transparent?`) => [`IIServerRasterData`](../interfaces/IIServerRasterData.md)

Defined in: index.d.ts:1908

获取 iserver 发布的 tileimage 格式的影像数据

#### Parameters

##### url

`string`

iserver发布的地址，地址精确到地图一级

##### tileSize?

`number`

##### transparent?

`boolean`

#### Returns

[`IIServerRasterData`](../interfaces/IIServerRasterData.md)

***

### getIServerXYZ()

> **getIServerXYZ**: (`url`, `transparent?`) => [`IIServerRasterData`](../interfaces/IIServerRasterData.md)

Defined in: index.d.ts:1903

获取 iserver 发布的 xyztileimage 格式的影像数据

#### Parameters

##### url

`string`

iserver发布的地址，地址精确到地图一级

##### transparent?

`boolean`

#### Returns

[`IIServerRasterData`](../interfaces/IIServerRasterData.md)

***

### getJl1()

> **getJl1**: (`mk`, `tk`) => [`IRasterTileData`](IRasterTileData.md)

Defined in: index.d.ts:1890

获取长光卫星吉林1号影像服务信息

#### Parameters

##### mk

`string`

##### tk

`string`

#### Returns

[`IRasterTileData`](IRasterTileData.md)

***

### getTianditu()

> **getTianditu**: (`token`, `style`) => [`IRasterTileData`](IRasterTileData.md)

Defined in: index.d.ts:1892

获取天地图服务信息

#### Parameters

##### token

`string`

##### style

[`TiandituMapsStyle`](../enumerations/TiandituMapsStyle.md)

#### Returns

[`IRasterTileData`](IRasterTileData.md)
