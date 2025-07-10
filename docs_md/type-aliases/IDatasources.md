[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / IDatasources

# Type Alias: IDatasources

> **IDatasources** = `object`

Defined in: index.d.ts:1311

数据管理模块

添加数据源，获取数据源

添加数据对象，添加文本对象，管理对象属性，获取对象，删除对象

## Properties

### add()

> **add**: (`param`) => `string` \| `null`

Defined in: index.d.ts:1317

添加数据源

#### Parameters

##### param

[`AddSourceParam`](AddSourceParam.md)

数据源对象

#### Returns

`string` \| `null`

添加的数据源id，失败返回 null

***

### addFieldInfo()

> **addFieldInfo**: (`dsId`, `info`, `index?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:1437

添加属性

#### Parameters

##### dsId

`string`

数据源id

##### info

[`IFieldInfo`](../interfaces/IFieldInfo.md)

添加的属性信息

##### index?

`number`

添加的位置

#### Returns

`Promise`\<`boolean`\>

***

### addNew()

> **addNew**: (`sourceId`, `params`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:1329

添加对象

#### Parameters

##### sourceId

`string`

数据源id

##### params

[`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md)

对象参数

#### Returns

`Promise`\<`boolean`\>

***

### addText()

> **addText**: (`sourceId`, `text`) => `Promise`\<`number` \| `undefined`\>

Defined in: index.d.ts:1335

添加文字

#### Parameters

##### sourceId

`string`

数据源id

##### text

###### position

[`IPoint2D`](IPoint2D.md)

文本位置

###### textColor?

`string`

文本颜色，默认#000

###### textSize?

`number`

文本大小，默认16

###### value

`string`

文本

#### Returns

`Promise`\<`number` \| `undefined`\>

***

### deleteObjects()

> **deleteObjects**: (`sourceId`, `objectIds`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:1350

删除对象

#### Parameters

##### sourceId

`string`

数据源id

##### objectIds

`number`[]

要删除的对象id数组

#### Returns

`Promise`\<`boolean`\>

***

### getCurrentRecordId()

> **getCurrentRecordId**: (`sourceId`) => `Promise`\<`number` \| `undefined`\>

Defined in: index.d.ts:1370

获取当前记录的对象的几何id

#### Parameters

##### sourceId

`string`

数据源id

#### Returns

`Promise`\<`number` \| `undefined`\>

***

### getFieldInfos()

> **getFieldInfos**: (`dsId`, `indexes?`) => `Promise`\<[`IFieldInfo`](../interfaces/IFieldInfo.md)[]\>

Defined in: index.d.ts:1429

获取数据源字段信息

#### Parameters

##### dsId

`string`

数据源id

##### indexes?

`number`[]

指定位置的属性

#### Returns

`Promise`\<[`IFieldInfo`](../interfaces/IFieldInfo.md)[]\>

***

### getFieldInfosCount()

> **getFieldInfosCount**: (`dsId`) => `Promise`\<`number`\>

Defined in: index.d.ts:1422

获取数据源字段信息数量

#### Parameters

##### dsId

`string`

数据源id

#### Returns

`Promise`\<`number`\>

***

### getGeometry()

> **getGeometry**: (`sourceId`, `geoId`) => `Promise`\<[`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md) \| `undefined`\>

Defined in: index.d.ts:1364

获取

#### Parameters

##### sourceId

`string`

数据源id

##### geoId

`number`

对象id

#### Returns

`Promise`\<[`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md) \| `undefined`\>

***

### getRecordsetFieldValue()

> **getRecordsetFieldValue**: (`params`) => `Promise`\<`string` \| `number` \| `boolean` \| `null` \| `undefined`\>

Defined in: index.d.ts:1398

获取指定字段的值

#### Parameters

##### params

{
ourceId 数据源id
geoId   对象id
indexOrName 属性序号或者名称
 }

###### geoId?

`number`

###### indexOrName

`number` \| `string`

###### sourceId

`string`

#### Returns

`Promise`\<`string` \| `number` \| `boolean` \| `null` \| `undefined`\>

***

### getSource()

> **getSource**: (`id`) => [`IGeoJSONDatasource`](../interfaces/IGeoJSONDatasource.md) \| [`IRasterTileDatasource`](../interfaces/IRasterTileDatasource.md) \| `null`

Defined in: index.d.ts:1323

添加数据源

#### Parameters

##### id

`string`

#### Returns

[`IGeoJSONDatasource`](../interfaces/IGeoJSONDatasource.md) \| [`IRasterTileDatasource`](../interfaces/IRasterTileDatasource.md) \| `null`

添加的数据源对象，失败返回 undefined

***

### indexOfFieldInfo()

> **indexOfFieldInfo**: (`dsId`, `name`) => `Promise`\<`number`\>

Defined in: index.d.ts:1459

根据名称获取属性位置

#### Parameters

##### dsId

`string`

数据源id

##### name

`string`

属性名称

#### Returns

`Promise`\<`number`\>

性字段在改集合中的序号，没有在此集合中则返回 -1

***

### moveFieldInfo()

> **moveFieldInfo**: (`dsId`, `name`, `before?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:1445

移动属性位置

#### Parameters

##### dsId

`string`

数据源id

##### name

`string`

添加的属性信息

##### before?

`string`

添加到指定位置前

#### Returns

`Promise`\<`boolean`\>

***

### recordsetFromGeoJSON()

> **recordsetFromGeoJSON**: (`sourceId`, `geoJSON`, `replaceById`, `dbIdIgnore`) => `Promise`\<`void`\>

Defined in: index.d.ts:1409

从 GeoJSON 对象中导入几何对象及其属性值

#### Parameters

##### sourceId

`string`

数据源id

##### geoJSON

[`IGeoJSONData`](IGeoJSONData.md)

##### replaceById

`boolean`

是否替换掉相同id的数据，默认true

##### dbIdIgnore

`boolean`

是否忽略dbId 默认false， 默认false

#### Returns

`Promise`\<`void`\>

***

### recordsetToGeoJSON()

> **recordsetToGeoJSON**: (`sourceId`, `hasAttribute`, `count`) => `Promise`\<[`IGeoJSONData`](IGeoJSONData.md) \| `undefined`\>

Defined in: index.d.ts:1416

从当前记录起，将 recordset 中指定数量的记录转出 GeoJSON 对象

#### Parameters

##### sourceId

`string`

数据源id

##### hasAttribute

`boolean`

导出时是否包含属性值

##### count

`number`

导出的记录数

#### Returns

`Promise`\<[`IGeoJSONData`](IGeoJSONData.md) \| `undefined`\>

***

### removeFieldInfo()

> **removeFieldInfo**: (`dsId`, `nameOrIndex`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:1452

删除指定属性

#### Parameters

##### dsId

`string`

数据源id

##### nameOrIndex

属性的名称或位置

`string` | `number`

#### Returns

`Promise`\<`boolean`\>

***

### setGeometry()

> **setGeometry**: (`sourceId`, `geo`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:1357

设置当前记录的几何对象，覆盖原来的对象

#### Parameters

##### sourceId

`string`

数据源id

##### geo

[`IGeoJSONFeature`](../interfaces/IGeoJSONFeature.md)

当前对象

#### Returns

`Promise`\<`boolean`\>

***

### setRecordsetFieldValue()

> **setRecordsetFieldValue**: (`params`) => `Promise`\<`void`\>

Defined in: index.d.ts:1382

设置当前对象的属性值

#### Parameters

##### params

{
ourceId 数据源id
geoId    k对象id
indexOrName 属性序号或者名称
value 要设置的属性值
 }

###### geoId?

`number`

###### indexOrName

`number` \| `string`

###### sourceId

`string`

###### value

`number` \| `string` \| `boolean` \| `null`

#### Returns

`Promise`\<`void`\>

***

### updateCaption()

> **updateCaption**: (`dsId`, `caption`, `index`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:1467

更改caption

#### Parameters

##### dsId

`string`

数据源id

##### caption

标题

`string` | `undefined`

##### index

`number`

要更改的位置

#### Returns

`Promise`\<`boolean`\>
