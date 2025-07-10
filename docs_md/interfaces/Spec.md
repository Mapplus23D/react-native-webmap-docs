[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / Spec

# Interface: Spec

Defined in: index.d.ts:2116

## Extends

- `TurboModule`

## Methods

### activate()

> **activate**(`serialNo`): `Promise`\<[`ILicenseActivateResult`](ILicenseActivateResult.md)\>

Defined in: index.d.ts:2138

通过序列号激活

#### Parameters

##### serialNo

`string`

序列号

#### Returns

`Promise`\<[`ILicenseActivateResult`](ILicenseActivateResult.md)\>

***

### getClientUrl()

> **getClientUrl**(): `string`

Defined in: index.d.ts:2133

获取 client web 服务地址

#### Returns

`string`

***

### getLicenseInfo()

> **getLicenseInfo**(): `Promise`\<`undefined` \| [`ILicenseInfo`](ILicenseInfo.md)\>

Defined in: index.d.ts:2143

获取当前许可信息

#### Returns

`Promise`\<`undefined` \| [`ILicenseInfo`](ILicenseInfo.md)\>

若没有激活，则返回 undefined

***

### getResourceBase()

> **getResourceBase**(): `string`

Defined in: index.d.ts:2129

获取资源地址

#### Returns

`string`

***

### getServiceBase()

> **getServiceBase**(): `string`

Defined in: index.d.ts:2125

获取 client 服务地址

#### Returns

`string`

***

### importSource()

> **importSource**(`filter?`): `Promise`\<[`ImportResult`](ImportResult.md)[]\>

Defined in: index.d.ts:2148

导入source文件到内部存储

#### Parameters

##### filter?

(`"point"` \| `"line"` \| `"fill"`)[]

#### Returns

`Promise`\<[`ImportResult`](ImportResult.md)[]\>

内部存储路径

***

### initEnvironment()

> **initEnvironment**(`clientPort?`): `void`

Defined in: index.d.ts:2121

初始化环境

#### Parameters

##### clientPort?

`number`

client服务运行端口

#### Returns

`void`
