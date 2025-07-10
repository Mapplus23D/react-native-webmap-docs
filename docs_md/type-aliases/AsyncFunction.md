[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / AsyncFunction

# Type Alias: AsyncFunction\<Functions\>

> **AsyncFunction**\<`Functions`\> = `{ [K in keyof Functions]: ReturnType<Functions[K]> extends Promise<unknown> ? (params: Parameters<Functions[K]>) => ReturnType<Functions[K]> : (params: Parameters<Functions[K]>) => Promise<ReturnType<Functions[K]>> }`

Defined in: index.d.ts:926

## Type Parameters

### Functions

`Functions` *extends* `Record`\<`string`, (...`args`) => `any`\>
