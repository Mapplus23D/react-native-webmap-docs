[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / ITheme

# Type Alias: ITheme

> **ITheme** = `object`

Defined in: index.d.ts:1961

专题图图模块

分段、单值、统一标签、分段标签、单值标签专题图的管理

## Properties

### addRangeItem()

> **addRangeItem**: (`layerId`, `params`, `index?`) => `Promise`\<`boolean`\>

Defined in: index.d.ts:1990

分段专题图新增分段

#### Parameters

##### layerId

`string`

专题图图层id

##### params

[`IThemeRangeItem`](../interfaces/IThemeRangeItem.md)

专题图分段信息

##### index?

`number`

插入分段位置

#### Returns

`Promise`\<`boolean`\>

***

### addUniqueItem()

> **addUniqueItem**: (`layerId`, `params`, `index?`) => `boolean`

Defined in: index.d.ts:2013

单值专题图新增单值

#### Parameters

##### layerId

`string`

专题图图层id

##### params

[`IThemeUniqueItem`](../interfaces/IThemeUniqueItem.md)

专题图单值信息

##### index?

`number`

插入单值位置

#### Returns

`boolean`

***

### createLabelRangeTheme()

> **createLabelRangeTheme**: (`params`) => `Promise`\<[`IThemeLabelRange`](../interfaces/IThemeLabelRange.md) \| `undefined`\>

Defined in: index.d.ts:2043

#### Parameters

##### params

###### colorScheme?

[`IColorScheme`](../interfaces/IColorScheme.md) \| [`ColorSchemeType`](../enumerations/ColorSchemeType.md)

颜色方案

###### datasourceID

`string`

数据源ID

###### defaultStyle?

`Partial`\<[`ITextStyle`](../interfaces/ITextStyle.md)\>

默认风格

###### labelExpression

`string`

标签表达式

###### rangeCount

`number`

分段数

###### rangeExpression

`string`

分段表达式

###### rangeMode

[`RangeMode`](../enumerations/RangeMode.md)

分段模式

#### Returns

`Promise`\<[`IThemeLabelRange`](../interfaces/IThemeLabelRange.md) \| `undefined`\>

***

### createLabelTheme()

> **createLabelTheme**: (`params`) => [`IThemeLabel`](../interfaces/IThemeLabel.md) \| `undefined`

Defined in: index.d.ts:2019

创建统一标签专题图

#### Parameters

##### params

###### datasourceID

`string`

数据源ID

###### defaultStyle?

`Partial`\<[`IGeoStyle`](IGeoStyle.md)\>

默认风格

###### expression

`string`

专题表达式

###### textColor?

`string`

文本颜色

###### textSize?

`number`

文本大小

#### Returns

[`IThemeLabel`](../interfaces/IThemeLabel.md) \| `undefined`

***

### createLabelUniqueTheme()

> **createLabelUniqueTheme**: (`params`) => `Promise`\<[`IThemeLabelUnique`](../interfaces/IThemeLabelUnique.md) \| `undefined`\>

Defined in: index.d.ts:2031

#### Parameters

##### params

###### colorScheme?

[`IColorScheme`](../interfaces/IColorScheme.md) \| [`ColorSchemeType`](../enumerations/ColorSchemeType.md)

颜色方案

###### datasourceID

`string`

数据源ID

###### defaultStyle?

`Partial`\<[`ITextStyle`](../interfaces/ITextStyle.md)\>

默认风格

###### labelExpression

`string`

标签表达式

###### uniqueExpression

`string`

统一表达式

#### Returns

`Promise`\<[`IThemeLabelUnique`](../interfaces/IThemeLabelUnique.md) \| `undefined`\>

***

### createRangeTheme()

> **createRangeTheme**: (`params`) => `Promise`\<[`IThemeRange`](../interfaces/IThemeRange.md) \| `undefined`\>

Defined in: index.d.ts:1967

创建分段专题图

#### Parameters

##### params

###### colorScheme?

[`IColorScheme`](../interfaces/IColorScheme.md) \| [`ColorSchemeType`](../enumerations/ColorSchemeType.md)

颜色方案

###### datasourceID

`string`

数据源ID

###### defaultStyle?

`Partial`\<[`IGeoStyle`](IGeoStyle.md)\>

默认风格

###### expression

`string`

专题表达式

###### geometryType

[`IGeometryType`](IGeometryType.md)

数据类型

###### rangeCount

`number`

分段数

###### rangeMode

[`RangeMode`](../enumerations/RangeMode.md)

分段模式

#### Returns

`Promise`\<[`IThemeRange`](../interfaces/IThemeRange.md) \| `undefined`\>

***

### createUniqueTheme()

> **createUniqueTheme**: (`params`) => `Promise`\<[`IThemeUnique`](../interfaces/IThemeUnique.md) \| `undefined`\>

Defined in: index.d.ts:1996

创建单值专题图

#### Parameters

##### params

###### colorScheme?

[`IColorScheme`](../interfaces/IColorScheme.md) \| [`ColorSchemeType`](../enumerations/ColorSchemeType.md)

颜色方案

###### datasourceID

`string`

数据源ID

###### defaultStyle?

`Partial`\<[`IGeoStyle`](IGeoStyle.md)\>

默认风格

###### expression

`string`

专题表达式

#### Returns

`Promise`\<[`IThemeUnique`](../interfaces/IThemeUnique.md) \| `undefined`\>
