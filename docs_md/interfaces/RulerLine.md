[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / RulerLine

# Interface: RulerLine

Defined in: index.d.ts:726

## Extends

- [`LinePatternBase`](LinePatternBase.md)

## Properties

### color?

> `optional` **color**: `string`

Defined in: index.d.ts:729

前景色 , 默认黑色

***

### expectedWidth?

> `optional` **expectedWidth**: `number`

Defined in: index.d.ts:697

#### Inherited from

[`LinePatternBase`](LinePatternBase.md).[`expectedWidth`](LinePatternBase.md#expectedwidth)

***

### midStrokeWidth?

> `optional` **midStrokeWidth**: `number`

Defined in: index.d.ts:735

中线宽度，默认scaleStrokeWidth

***

### patternType

> **patternType**: `"ruler"`

Defined in: index.d.ts:727

#### Overrides

[`LinePatternBase`](LinePatternBase.md).[`patternType`](LinePatternBase.md#patterntype)

***

### scaleSpan?

> `optional` **scaleSpan**: `number`

Defined in: index.d.ts:731

刻度间距,默认8,最小2

***

### scaleStrokeWidth?

> `optional` **scaleStrokeWidth**: `number`

Defined in: index.d.ts:733

刻度线宽度,默认0.1*scaleSpan,大于0.5*scaleSpan无效
