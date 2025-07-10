[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / WebMapEvent

# Interface: WebMapEvent

Defined in: index.d.ts:1132

## Properties

### onActionChange

> **onActionChange**: `object`

Defined in: index.d.ts:1179

action 切换回调

主动调用 setAction 不会有此回调

#### action

> **action**: [`Action`](../enumerations/Action.md)

***

### onCenterChanged

> **onCenterChanged**: `object`

Defined in: index.d.ts:1211

地图拖动时中心变化

#### centerLat

> **centerLat**: `number`

#### centerLng

> **centerLng**: `number`

***

### onDrawRectBoundsChange

> **onDrawRectBoundsChange**: `object`

Defined in: index.d.ts:1168

draw_rect_bounds结果回调

#### bottom

> **bottom**: `number`

#### left

> **left**: `number`

#### right

> **right**: `number`

#### top

> **top**: `number`

***

### onGeometryAdded

> **onGeometryAdded**: [`IGeometryEvent`](IGeometryEvent.md)

Defined in: index.d.ts:1185

对象通过手势添加事件

***

### onGeometryDeleted

> **onGeometryDeleted**: [`IGeometryEvent`](IGeometryEvent.md)

Defined in: index.d.ts:1193

对象通过手势删除事件

***

### onGeometryModified

> **onGeometryModified**: [`IGeometryEvent`](IGeometryEvent.md)

Defined in: index.d.ts:1189

对象通过手势修改事件

***

### onMeasureResult

> **onMeasureResult**: `object`

Defined in: index.d.ts:1197

量算实时结果回调

#### isFinishied?

> `optional` **isFinishied**: `boolean`

#### measureResult

> **measureResult**: `string`

***

### onMultiSelect

> **onMultiSelect**: `object`

Defined in: index.d.ts:1159

多选状态下的监事件

#### geometries

> **geometries**: [`IGeometryEvent`](IGeometryEvent.md)[]

返回选中的对象数组

***

### onSelect

> **onSelect**: `object`

Defined in: index.d.ts:1136

选择状态下的监事件

#### event

> **event**: [`IClickEvent`](IClickEvent.md)

#### ~~feature?~~

> `optional` **feature**: `object`

若选中对象，则返回对象所在图层id及对象id
若未选中对象，则返回 undefined

##### Deprecated

使用 geometries 字段获取选择结果

##### feature.featureId

> **featureId**: `number`

##### feature.layerId

> **layerId**: `string`

#### geometries

> **geometries**: [`IGeometryEvent`](IGeometryEvent.md)[]

返回选中的对象数组

***

### onSelectCancle

> **onSelectCancle**: `null`

Defined in: index.d.ts:1155

选择状态下的监事件

***

### onZoomEnd

> **onZoomEnd**: `object`

Defined in: index.d.ts:1204

比例尺变化

#### scale

> **scale**: `number`

#### zoom

> **zoom**: `number`
