[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / RulerLine

# Interface: RulerLine

Defined in: index.d.ts:738

## Extends

- [`LinePatternBase`](LinePatternBase.md)

## Properties

### color?

> `optional` **color**: `string`

Defined in: index.d.ts:741

前景色 , 默认黑色

***

### expectedWidth?

> `optional` **expectedWidth**: `number`

Defined in: index.d.ts:709

#### Inherited from

[`LinePatternBase`](LinePatternBase.md).[`expectedWidth`](LinePatternBase.md#expectedwidth)

***

### midStrokeWidth?

> `optional` **midStrokeWidth**: `number`

Defined in: index.d.ts:747

中线宽度，默认scaleStrokeWidth

***

### patternType

> **patternType**: `"ruler"`

Defined in: index.d.ts:739

#### Overrides

[`LinePatternBase`](LinePatternBase.md).[`patternType`](LinePatternBase.md#patterntype)

***

### scaleSpan?

> `optional` **scaleSpan**: `number`

Defined in: index.d.ts:743

刻度间距,默认8,最小2

***

### scaleStrokeWidth?

> `optional` **scaleStrokeWidth**: `number`

Defined in: index.d.ts:745

刻度线宽度,默认0.1*scaleSpan,大于0.5*scaleSpan无效
