[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / IMapControl

# Type Alias: IMapControl

> **IMapControl** = `object`

Defined in: index.d.ts:1684

地图控制组件

包含地图打开，关闭，重命名

获取和设置地图数据，中心点，坐标系，比例尺等

管理图层，数据源等

## Properties

### addCallout()

> **addCallout**: (`name`, `options`) => `void`

Defined in: index.d.ts:1862

添加callout

#### Parameters

##### name

`string`

callout名称

##### options

`Omit`\<[`CalloutOption`](../interfaces/CalloutOption.md), `"className"`\> & `object`

callout参数

#### Returns

`void`

***

### addTouchPoint()

> **addTouchPoint**: (`px`) => `void`

Defined in: index.d.ts:1825

在屏幕指定位置模拟一次点击

#### Parameters

##### px

[`IPoint2D`](IPoint2D.md)

屏幕像素点

#### Returns

`void`

***

### appointEditGeometry()

> **appointEditGeometry**: (`layerId`, `geoId`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:1820

指定编辑对象

编辑对象需要在可编辑图层上

#### Parameters

##### layerId

`string`

图层id

##### geoId

`number`

要指定的几何对象id

#### Returns

`Promise`\<`boolean`\>

成功返回 true，失败返回 false

***

### baseLayers()

> **baseLayers**: () => [`ILayerImage`](../interfaces/ILayerImage.md)[]

Defined in: index.d.ts:1854

底图管理对象

#### Returns

[`ILayerImage`](../interfaces/ILayerImage.md)[]

***

### capture()

> **capture**: () => `string`

Defined in: index.d.ts:1842

截图

#### Returns

`string`

png 类型的 base64 字符串

***

### closeMap()

> **closeMap**: () => `void`

Defined in: index.d.ts:1693

关闭当前地图

#### Returns

`void`

***

### datasources()

> **datasources**: () => [`IDatasource`](IDatasource.md)[]

Defined in: index.d.ts:1846

数据源管理对象

#### Returns

[`IDatasource`](IDatasource.md)[]

***

### flyTo()

> **flyTo**: (`param`) => `void`

Defined in: index.d.ts:1781

飞行到某一位置

#### Parameters

##### param

飞行参数

###### center

[`IPoint2D`](IPoint2D.md)

###### duration?

`number`

###### scale?

`number`

#### Returns

`void`

***

### getAction()

> **getAction**: () => [`Action`](../enumerations/Action.md)

Defined in: index.d.ts:1793

获取当前地图操作状态

#### Returns

[`Action`](../enumerations/Action.md)

***

### getBackgroundColor()

> **getBackgroundColor**: () => [`IColor`](IColor.md)

Defined in: index.d.ts:1766

获取地图底色

#### Returns

[`IColor`](IColor.md)

***

### getCenter()

> **getCenter**: () => [`IPoint2D`](IPoint2D.md)

Defined in: index.d.ts:1720

获取当前地图中心点坐标

#### Returns

[`IPoint2D`](IPoint2D.md)

***

### getDynamicProjection()

> **getDynamicProjection**: () => `boolean`

Defined in: index.d.ts:1707

获取是否开启动态投影

#### Returns

`boolean`

***

### getMap()

> **getMap**: () => [`IWebMap`](../interfaces/IWebMap.md)

Defined in: index.d.ts:1703

以JSON形式获取当前的地图

#### Returns

[`IWebMap`](../interfaces/IWebMap.md)

当前地图对象

***

### getMaxScale()

> **getMaxScale**: () => `number`

Defined in: index.d.ts:1758

获取当前地图最大比例尺

#### Returns

`number`

***

### getMinScale()

> **getMinScale**: () => `number`

Defined in: index.d.ts:1750

获取当前地图最小比例尺

#### Returns

`number`

***

### getScale()

> **getScale**: () => `number`

Defined in: index.d.ts:1728

获取当前地图的比例尺

#### Returns

`number`

***

### getSelectOption()

> **getSelectOption**: () => [`SelectOption`](../interfaces/SelectOption.md)

Defined in: index.d.ts:1801

获取selctOption

#### Returns

[`SelectOption`](../interfaces/SelectOption.md)

***

### getViewBounds()

> **getViewBounds**: () => `Rectangle2D`

Defined in: index.d.ts:1746

获取当前地图可见范围

#### Returns

`Rectangle2D`

***

### layers()

> **layers**: () => [`ILayer`](ILayer.md)[]

Defined in: index.d.ts:1850

图层管理对象

#### Returns

[`ILayer`](ILayer.md)[]

***

### mapToPx()

> **mapToPx**: (`map`) => [`IPoint2D`](IPoint2D.md)

Defined in: index.d.ts:1837

地图经纬度点转屏幕像素点

#### Parameters

##### map

[`IPoint2D`](IPoint2D.md)

地图经纬度点

#### Returns

[`IPoint2D`](IPoint2D.md)

屏幕像素点

***

### openMap()

> **openMap**: (`webmap`) => `void`

Defined in: index.d.ts:1689

打开地图

#### Parameters

##### webmap

[`IWebMap`](../interfaces/IWebMap.md)

#### Returns

`void`

***

### panTo()

> **panTo**: (`center`, `duration`) => `void`

Defined in: index.d.ts:1776

平移到指定位置

#### Parameters

##### center

[`IPoint2D`](IPoint2D.md)

指定中心点位置

##### duration

`number`

平移动画时长，单位毫秒, default: 0

#### Returns

`void`

***

### pxToMap()

> **pxToMap**: (`px`) => [`IPoint2D`](IPoint2D.md)

Defined in: index.d.ts:1831

像素点转地图经纬度点

#### Parameters

##### px

[`IPoint2D`](IPoint2D.md)

屏幕像素点

#### Returns

[`IPoint2D`](IPoint2D.md)

经纬度点

***

### refresh()

> **refresh**: () => `void`

Defined in: index.d.ts:1716

刷新地图

#### Returns

`void`

***

### removeAllCallouts()

> **removeAllCallouts**: () => `void`

Defined in: index.d.ts:1877

移除所有callout

#### Returns

`void`

***

### removeCallout()

> **removeCallout**: (`name`) => `void`

Defined in: index.d.ts:1872

移除指定callout

#### Parameters

##### name

`string`

要移除的callout名称

#### Returns

`void`

***

### rename()

> **rename**: (`name`) => `void`

Defined in: index.d.ts:1698

重命名地图

#### Parameters

##### name

`string`

新的地图名

#### Returns

`void`

***

### setAction()

> **setAction**: (`action`) => `void`

Defined in: index.d.ts:1789

设置地图操作状态

#### Parameters

##### action

[`Action`](../enumerations/Action.md)

#### Returns

`void`

***

### setBackgroundColor()

> **setBackgroundColor**: (`color?`) => `void`

Defined in: index.d.ts:1770

设置地图底色

#### Parameters

##### color?

[`IColor`](IColor.md)

#### Returns

`void`

***

### setCenter()

> **setCenter**: (`center`) => `void`

Defined in: index.d.ts:1724

设置当前地图中心点坐标

#### Parameters

##### center

[`IPoint2D`](IPoint2D.md)

#### Returns

`void`

***

### setDynamicProjection()

> **setDynamicProjection**: (`enable`) => `void`

Defined in: index.d.ts:1712

设置开启动态投影

#### Parameters

##### enable

`boolean`

是否开启动态投影

#### Returns

`void`

***

### setMaxScale()

> **setMaxScale**: (`maxScale?`) => `void`

Defined in: index.d.ts:1762

设置当前地图最大比例尺

#### Parameters

##### maxScale?

`number`

#### Returns

`void`

***

### setMinScale()

> **setMinScale**: (`minScale?`) => `void`

Defined in: index.d.ts:1754

设置当前地图最小比例尺

#### Parameters

##### minScale?

`number`

#### Returns

`void`

***

### setPrjCoordsys()

> **setPrjCoordsys**: (`type`) => `void`

Defined in: index.d.ts:1737

设置当前地图坐标系

#### Parameters

##### type

[`Coordsys`](Coordsys.md)

'wgs84' | 'gcj02' | 'bd09'

#### Returns

`void`

***

### setScale()

> **setScale**: (`scale`) => `void`

Defined in: index.d.ts:1732

设置当前地图的比例尺

#### Parameters

##### scale

`number`

#### Returns

`void`

***

### setSelectOption()

> **setSelectOption**: (`option`) => `void`

Defined in: index.d.ts:1797

设置selctOption

#### Parameters

##### option

[`SelectOption`](../interfaces/SelectOption.md)

#### Returns

`void`

***

### setViewBounds()

> **setViewBounds**: (`bounds`) => `void`

Defined in: index.d.ts:1742

设置当前地图可见范围

#### Parameters

##### bounds

`Rectangle2D`

可见范围

#### Returns

`void`

***

### submit()

> **submit**: () => `void`

Defined in: index.d.ts:1805

- 在绘制模式，提交当前绘制对象

#### Returns

`void`

***

### trash()

> **trash**: () => `void`

Defined in: index.d.ts:1811

- 在选择模式，删除当前选中的可编辑对象
- 在绘制模式，删除当前绘制对象
- 在节点编辑模式，删除当前选中节点

#### Returns

`void`
