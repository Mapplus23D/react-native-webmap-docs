[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / ILayers

# Type Alias: ILayers

> **ILayers** = `object`

Defined in: index.d.ts:1525

图层管理模块

获取图层，添加/删除/重命名图层，图层重命名，设置图层可见/可编辑，获取专题图

## Properties

### add()

> **add**: (`param`, `beforeId?`) => `string` \| `undefined`

Defined in: index.d.ts:1542

添加图层到根组图层组中

#### Parameters

##### param

[`AddLayerParam`](AddLayerParam.md)

##### beforeId?

`string`

指定添加到某个图层前面，不指定则添加到最后

#### Returns

`string` \| `undefined`

图层id 失败返回 undefined

***

### addToGroup()

> **addToGroup**: (`param`, `groupId`, `beforeId?`) => `string` \| `undefined`

Defined in: index.d.ts:1550

添加到指定图层组中

#### Parameters

##### param

[`AddLayerParam`](AddLayerParam.md)

##### groupId

`string`

要添加到的图层组id

##### beforeId?

`string`

添加到的图层组中的指定图层前，不指定则添加到图层组最后

#### Returns

`string` \| `undefined`

图层id 失败返回 undefined

***

### changeLayerStyle()

> **changeLayerStyle**: (`id`, `style`) => `boolean`

Defined in: index.d.ts:1627

修改图层风格

#### Parameters

##### id

`string`

矢量图层id

##### style

`Partial`\<[`IGeoStyle`](IGeoStyle.md)\>

修改的图层风格

#### Returns

`boolean`

***

### changeTextStyle()

> **changeTextStyle**: (`layerId`, `textIds`, `style`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:1637

修改文本风格

修改一个或多个文本样式

#### Parameters

##### layerId

`string`

图层id

##### textIds

`number`[]

文本对象id数组

##### style

`Partial`\<[`ITextStyle`](../interfaces/ITextStyle.md)\>

文本对象样式

#### Returns

`Promise`\<`boolean`\>

***

### clearSelection()

> **clearSelection**: (`layerId`) => `boolean`

Defined in: index.d.ts:1656

清空图层选择集

#### Parameters

##### layerId

`string`

图层id

#### Returns

`boolean`

***

### getLayer()

> **getLayer**: (`id`) => [`ILayer`](ILayer.md) \| `undefined`

Defined in: index.d.ts:1535

根据指定id获取图层信息

#### Parameters

##### id

`string`

图层id

#### Returns

[`ILayer`](ILayer.md) \| `undefined`

***

### getLayers()

> **getLayers**: () => [`ILayer`](ILayer.md)[]

Defined in: index.d.ts:1530

根组图层组中的所有图层

#### Returns

[`ILayer`](ILayer.md)[]

***

### getSelection()

> **getSelection**: (`layerId`, `ids?`) => `number`[]

Defined in: index.d.ts:1650

获取选择集

#### Parameters

##### layerId

`string`

图层id

##### ids?

`number`[]

指定获取的对象id数组，若不指定，则获取所有选择集

#### Returns

`number`[]

***

### getStyle()

> **getStyle**: (`id`) => `undefined` \| [`IGeoStyle`](IGeoStyle.md)

Defined in: index.d.ts:1620

获取图层风格

#### Parameters

##### id

`string`

矢量图层id

#### Returns

`undefined` \| [`IGeoStyle`](IGeoStyle.md)

风格对象

***

### getTheme()

> **getTheme**: (`id`) => `undefined` \| [`IThemeUnique`](../interfaces/IThemeUnique.md) \| [`IThemeRange`](../interfaces/IThemeRange.md) \| [`IThemeLabel`](../interfaces/IThemeLabel.md) \| [`IThemeLabelUnique`](../interfaces/IThemeLabelUnique.md) \| [`IThemeLabelRange`](../interfaces/IThemeLabelRange.md)

Defined in: index.d.ts:1643

获取专题图层的专题对象

#### Parameters

##### id

`string`

专题图层id

#### Returns

`undefined` \| [`IThemeUnique`](../interfaces/IThemeUnique.md) \| [`IThemeRange`](../interfaces/IThemeRange.md) \| [`IThemeLabel`](../interfaces/IThemeLabel.md) \| [`IThemeLabelUnique`](../interfaces/IThemeLabelUnique.md) \| [`IThemeLabelRange`](../interfaces/IThemeLabelRange.md)

专题图对象

***

### move()

> **move**: (`id`, `beforeId`) => `void`

Defined in: index.d.ts:1557

调整图层顺序

#### Parameters

##### id

`string`

要移动的图层id

##### beforeId

`string`

移动到此图层前，若不指定，则移动到当前图层组最后。

#### Returns

`void`

***

### moveToGroup()

> **moveToGroup**: (`id`, `groupId`, `beforeId?`) => `void`

Defined in: index.d.ts:1564

移动图层到指定图层组内

#### Parameters

##### id

`string`

要移动的图层id

##### groupId

`string`

目标图层组

##### beforeId?

`string`

移动到目标图层组指定图层前，若不指定，则移动到目标图层组最后

#### Returns

`void`

***

### refresh()

> **refresh**: (`id`) => `void`

Defined in: index.d.ts:1661

刷新图层

#### Parameters

##### id

`string`

#### Returns

`void`

***

### remove()

> **remove**: (`id`) => `boolean`

Defined in: index.d.ts:1570

移除图层
若是图层组，则会将图层组内所有图层一起移除

#### Parameters

##### id

`string`

要移除的图层id

#### Returns

`boolean`

***

### rename()

> **rename**: (`id`, `name`) => `void`

Defined in: index.d.ts:1576

重命名图层

#### Parameters

##### id

`string`

目标图层id

##### name

`string`

名称

#### Returns

`void`

***

### setEditable()

> **setEditable**: (`id`, `editable`) => `void`

Defined in: index.d.ts:1596

设置图层可编辑

一副地图只能同时有一个可编辑图层

#### Parameters

##### id

`string`

目标图层id

##### editable

`boolean`

是否可编辑

#### Returns

`void`

***

### setMaxVisibleScale()

> **setMaxVisibleScale**: (`id`, `scale`) => `void`

Defined in: index.d.ts:1602

设置图层最大可见范围

#### Parameters

##### id

`string`

目标图层id

##### scale

`number`

图层比例尺

#### Returns

`void`

***

### setMetaData()

> **setMetaData**: (`id`, `metadata`) => `void`

Defined in: index.d.ts:1614

设置图层自定义信息

#### Parameters

##### id

`string`

图层id

##### metadata

`unknown`

自定义信息

#### Returns

`void`

***

### setMinVisibleScale()

> **setMinVisibleScale**: (`id`, `scale`) => `void`

Defined in: index.d.ts:1608

设置图层最小可见范围

#### Parameters

##### id

`string`

目标图层id

##### scale

`number`

图层比例尺

#### Returns

`void`

***

### setSelectable()

> **setSelectable**: (`id`, `selectable`) => `void`

Defined in: index.d.ts:1588

设置图层可选

#### Parameters

##### id

`string`

目标图层id

##### selectable

`boolean`

是否可选

#### Returns

`void`

***

### setVisible()

> **setVisible**: (`id`, `visible`) => `void`

Defined in: index.d.ts:1582

设置图层显隐

#### Parameters

##### id

`string`

目标图层id

##### visible

`boolean`

是否可见

#### Returns

`void`
