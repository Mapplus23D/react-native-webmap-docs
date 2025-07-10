[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / Action

# Enumeration: Action

Defined in: index.d.ts:253

## Enumeration Members

### draw\_line

> **draw\_line**: `"draw_line"`

Defined in: index.d.ts:285

在可编辑线图层上进行线对象绘制

***

### draw\_point

> **draw\_point**: `"draw_point"`

Defined in: index.d.ts:281

在可编辑点图层上进行点对象绘制

***

### draw\_polygon

> **draw\_polygon**: `"draw_polygon"`

Defined in: index.d.ts:289

在可编辑面图层上进行线对象绘制

***

### draw\_rect\_bounds

> **draw\_rect\_bounds**: `"draw_rect_bounds"`

Defined in: index.d.ts:305

绘制框选区域

***

### edit\_vertex

> **edit\_vertex**: `"edit_vertex"`

Defined in: index.d.ts:277

在选中可编辑的`线`和`面`图层上的对象后，可进入节点编辑操作

节点编辑操作中可以增加，删除，移动节点

***

### measure\_angle

> **measure\_angle**: `"measure_angle"`

Defined in: index.d.ts:301

进行线对象绘制并计算/显示夹角

***

### measure\_area

> **measure\_area**: `"measure_area"`

Defined in: index.d.ts:293

进行面对象绘制并计算/显示面积

***

### measure\_length

> **measure\_length**: `"measure_length"`

Defined in: index.d.ts:297

进行线对象绘制并计算/显示长度

***

### ~~multiSelect~~

> **multiSelect**: `"multiSelect"`

Defined in: index.d.ts:271

#### Deprecated

在select状态下通过配置selectOption实现
支持多点选模式 支持地图拖动
点击空白处取消多选
不可编辑

***

### pan

> **pan**: `"pan"`

Defined in: index.d.ts:258

浏览模式，不可选中，操作对象

***

### select

> **select**: `"select"`

Defined in: index.d.ts:264

单选模式，选择对象，选择对象后会有选择回调

若对象在可编辑图层上，则可进行对象的移动，删除操作
