[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / IBaseLayers

# Type Alias: IBaseLayers

> **IBaseLayers** = `object`

Defined in: index.d.ts:1209

底图模块

包含地图获取，添加，移动，删除，重命名，设置可见

## Properties

### add()

> **add**: (`param`, `beforeId?`) => `string`

Defined in: index.d.ts:1220

添加底图

#### Parameters

##### param

[`AddBaseLayerParam`](AddBaseLayerParam.md)

底图参数

##### beforeId?

`string`

指定添加到某个图层前面，不指定则添加到最后

#### Returns

`string`

图层id

***

### getBaseLayers()

> **getBaseLayers**: () => [`ILayerImage`](../interfaces/ILayerImage.md)[]

Defined in: index.d.ts:1213

获取当前地图的底图图层列表

#### Returns

[`ILayerImage`](../interfaces/ILayerImage.md)[]

***

### move()

> **move**: (`id`, `beforeId?`) => `void`

Defined in: index.d.ts:1226

调整底图顺序

#### Parameters

##### id

`string`

要移动的底图id

##### beforeId?

`string`

移动到此图层前，若不指定，则移动到当前图层组最后。

#### Returns

`void`

***

### remove()

> **remove**: (`id`) => `void`

Defined in: index.d.ts:1231

移除底图

#### Parameters

##### id

`string`

底图id

#### Returns

`void`

***

### rename()

> **rename**: (`id`, `name`) => `void`

Defined in: index.d.ts:1237

重命名底图

#### Parameters

##### id

`string`

底图id

##### name

`string`

名称

#### Returns

`void`

***

### setVisible()

> **setVisible**: (`id`, `visible`) => `void`

Defined in: index.d.ts:1243

设置图层显隐

#### Parameters

##### id

`string`

底图id

##### visible

`boolean`

#### Returns

`void`
