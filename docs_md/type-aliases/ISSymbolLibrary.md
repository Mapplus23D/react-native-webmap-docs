[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / ISSymbolLibrary

# Type Alias: ISSymbolLibrary

> **ISSymbolLibrary** = `object`

Defined in: index.d.ts:1903

地图符号库模块

获取和管理点线面符号库

## Properties

### addFillSymbol()

> **addFillSymbol**: (`name`, `url`) => `string`

Defined in: index.d.ts:1949

添加面符号

#### Parameters

##### name

`string`

符号名

##### url

`string`

符号路径

#### Returns

`string`

符号id

***

### addLineSymbol()

> **addLineSymbol**: (`name`, `url`, `pattern?`) => `string`

Defined in: index.d.ts:1937

添加线符号

#### Parameters

##### name

`string`

符号名

##### url

`string`

符号路径

##### pattern?

[`LinePattern`](LinePattern.md)

矢量符号url为‘’时生效，定义矢量符号

#### Returns

`string`

符号id

***

### addPointSymbol()

> **addPointSymbol**: (`name`, `url`, `width`, `height`) => `string`

Defined in: index.d.ts:1924

添加点符号

#### Parameters

##### name

`string`

符号名

##### url

`string`

符号路径

##### width

`number`

符号宽度

##### height

`number`

符号高度

#### Returns

`string`

符号id

***

### getFillSymbol()

> **getFillSymbol**: (`id`) => [`ISymbolFill`](../interfaces/ISymbolFill.md) \| `undefined`

Defined in: index.d.ts:1954

获取指定id的面符号

#### Parameters

##### id

`string`

面符号id

#### Returns

[`ISymbolFill`](../interfaces/ISymbolFill.md) \| `undefined`

***

### getFillSymbols()

> **getFillSymbols**: () => [`ISymbolFill`](../interfaces/ISymbolFill.md)[]

Defined in: index.d.ts:1915

获取所有面符号

#### Returns

[`ISymbolFill`](../interfaces/ISymbolFill.md)[]

***

### getLineSymbol()

> **getLineSymbol**: (`id`) => [`ISymbolLine`](../interfaces/ISymbolLine.md) \| `undefined`

Defined in: index.d.ts:1942

获取指定id的线符号

#### Parameters

##### id

`string`

线符号id

#### Returns

[`ISymbolLine`](../interfaces/ISymbolLine.md) \| `undefined`

***

### getLineSymbols()

> **getLineSymbols**: () => [`ISymbolLine`](../interfaces/ISymbolLine.md)[]

Defined in: index.d.ts:1911

获取所有线符号

#### Returns

[`ISymbolLine`](../interfaces/ISymbolLine.md)[]

***

### getPointSymbol()

> **getPointSymbol**: (`id`) => [`ISymbolPoint`](../interfaces/ISymbolPoint.md) \| `undefined`

Defined in: index.d.ts:1929

获取指定id的点符号

#### Parameters

##### id

`string`

点符号id

#### Returns

[`ISymbolPoint`](../interfaces/ISymbolPoint.md) \| `undefined`

***

### getPointSymbols()

> **getPointSymbols**: () => [`ISymbolPoint`](../interfaces/ISymbolPoint.md)[]

Defined in: index.d.ts:1907

获取所有点符号

#### Returns

[`ISymbolPoint`](../interfaces/ISymbolPoint.md)[]
