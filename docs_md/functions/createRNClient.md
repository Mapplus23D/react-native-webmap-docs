[**react-native-webmap开发文档**](../README.md)

***

[react-native-webmap开发文档](../globals.md) / createRNClient

# Function: createRNClient()

> **createRNClient**(`getWebview`): [`Client`](../type-aliases/Client.md)

Defined in: index.d.ts:18

创建client 对象

调用 createRNClient 创建一个 react-native 端专用的 client 对象

client 对象负责与 webview 中的 webmap sdk 进行通信

client 对象可以进行初始化，添加监听，调用所有模块的接口，枚举类型

## Parameters

### getWebview

() => `null` \| `WebView`\<\{ \}\>

可返回 webview 引用以便进行消息的发送

## Returns

[`Client`](../type-aliases/Client.md)

client 对象
