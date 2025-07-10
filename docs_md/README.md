**react-native-webmap开发文档**

***

# react-native-webmap

地图迦二三维SDK是一款专业、高效的地图开发工具，基于统一渲染内核，覆盖桌面、移动等主流操作平台。提供从数据管理到场景搭建、演播制作的全流程解决方案，支持二维与三维开发，满足多样化的地图应用需求。

<img src="https://mapplus-tob.oss-cn-beijing.aliyuncs.com/sdk/assets/description.png" width="60%" />

## 前提

鸿蒙OS请先按照[鸿蒙RN文档](https://gitcode.com/openharmony-sig/ohos_react_native/blob/master/docs/zh-cn/%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.md)将RN工程鸿蒙化后再进行以下步骤。

## 安装

```sh
npm install @mapplus/react-native-webmap
```

本工程依赖 `react-native-webview`, 运行以下命令进行安装

```sh
npm install react-native-webview
```

鸿蒙OS还需要安装鸿蒙适配 webview

```sh
npm install @react-native-oh-tpl/react-native-webview
```

## 配置鸿蒙原生工程

鸿蒙RN暂不支持 autolink，需要手动进行配置。

若事先进行过`react-native-webview`适配，则可忽略以下步骤中 `webview` 的相关配置。

* 在 `harmony/entry/oh-package.json5` 中添加依赖：

    ```
    "dependencies": {
        ......
        "@mapplus/react-native-webmap": "file:../../node_modules/@mapplus/react-native-webmap/harmony/rn_webmap.har",
        "@react-native-oh-tpl/react-native-webview": "file:../../node_modules/@react-native-oh-tpl/react-native-webview/harmony/rn_webview.har",
    },
    ```

* 在 `harmony/entry/src/main/cpp/CMakeLists.txt`中添加模块：

    ```CMake
    add_subdirectory("${OH_MODULE_DIR}/@mapplus/react-native-webmap/src/main/cpp" ./webmap)
    add_subdirectory("${OH_MODULE_DIR}/@react-native-oh-tpl/react-native-webview/src/main/cpp" ./webview)

    ......

    target_link_libraries(rnoh_app PUBLIC rnoh_webmap)
    target_link_libraries(rnoh_app PUBLIC rnoh_webview)
    ```

* 在 `harmony/entry/src/main/cpp/PackageProvider.cpp` 中应用模块

    ```cpp
    ......
    #include "WebMapPackage.h"
    #include "WebViewPackage.h"

    std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(Package::Context ctx) {
        return {
            ......
            std::make_shared<WebMapPackage>(ctx),
            std::make_shared<WebViewPackage>(ctx),
        };
    }
    ```

* 在 `harmony/entry/src/main/etc/RNPackagesFactory.ets` 中应用模块

    ```ts
    ......
    import { WebMapPackage }  from '@mapplus/react-native-webmap/ts'
    import { WebViewPackage } from '@react-native-oh-tpl/react-native-webview/ts';

    export function createRNPackages(ctx: RNPackageContext): RNPackage[] {
        return [
            ......
            new WebMapPackage(ctx),
            new WebViewPackage(ctx),
        ];
    }
    ```

* 在 `harmony/entry/src/main/ets/pages/Index.ets` 中增加 webview 配置

    ```ts
    ......
    import { WebView, WEB_VIEW } from "@react-native-oh-tpl/react-native-webview"

    @Builder
    export function buildCustomRNComponent(ctx: ComponentBuilderContext) {
        if (ctx.componentName === WEB_VIEW) { // 注册 webview 原生组件
            WebView({
                ctx: ctx.rnComponentContext,
                tag: ctx.tag
            });
        }
    }

    struct Index {
        build() {
            Column() {
                ......
                RNApp({
                    rnInstanceConfig: {
                        ......
                        arkTsComponentNames: [
                            WEB_VIEW //components 添加 webview
                        ]
                    },
                    ......
                })
            }
        }   
    }
  
    ```

---
配置完成后同步并重新运行整个工程即可。

## 使用

使用前请先激活，激活时保持网络畅通。

```ts
import {RTNWebMap} from '@mapplus/react-native-webmap'

async function init() {
  RTNWebMap.initEnvironment(9988) // 初始化并指定本地服务端口号

  const license = await RTNWebMap.getLicenseInfo()
  if (!license) {
    const serial = 'XXXXX-XXXXX-XXXXX-XXXXX-XXXXX' //序列号
    const result = await RTNWebMap.activate(serial)
    if (result) {
      console.log("激活成功")
    } else {
      console.warn("激活失败")
    }
  } else {
    console.log("已激活")
  }
}

```

激活后获取client地址并通过webview渲染

创建 `MapView.tsx`

```tsx
import { useMemo, useRef } from "react"
import { View } from "react-native"
import WebView from "react-native-webview"
import { createRNClient, RTNWebMap } from "@mapplus/react-native-webmap"

export default function MapView() {
  const webViewRef = useRef<WebView>(null)

  const clientUrl = useMemo(() => {
    return RTNWebMap.getClientUrl()
  }, [])

  // 调用 createRNClient 创建一个 react-native 端专用的 client 对象
  // client 对象负责与 webview 中的 webmap sdk 进行通信
  const client = useMemo(() => {
    const client = createRNClient(() => {
      // 返回 webview 引用以便进行消息的发送
      return webViewRef.current
    })
    return client
  }, [])

  // 初始化好后添加一个高德地图
  async function onInited() {
    const id = await client.datasources.add({
      name: 'image_src',
      type: 'raster',
      data: {
        tiles: [
          'http://wprd04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=2&style=7',
        ],
        tileSize: 256,
      },
    })
    if (id) {
      const lid = await client.baseLayers.add({
        type: 'image',
        name: 'image_layer',
        sourceId: id,
      })
    }
    client.mapControl.setCenter({
      x: 106,
      y: 32,
    })
    client.mapControl.setScale(1 / 100000000)
  }

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <WebView
        ref={webViewRef}
        ignoreSilentHardwareSwitch={true}
        onMessage={e => {
          // 处理来自 webview 中 webmap sdk 发来的消息
          client.handleMessage(e.nativeEvent.data)
        }}
        onLoadEnd={() => {
          // 加载完成后，初始化 client 对象，与 webview 中的 webmap sdk 建立联系
          // 初始化完成后才可以调用 sdk 中的各个方法
          client.init(undefined, { clientPort: 9988 }).then(() => {
            // 初始化成功后便可以调用client内的各种方法了
            // 比如 client.mapControl.openMap() 打开已有地图等
             onInited()
          })
        }}
        // 本地的web服务地址，包含实际的 sdk 代码引用
        source={{ uri: clientUrl }}
      />
    </View>
  )
}

```

将以上两步结合修改APP.tsx如下, 打开app后显示地图

`App.tsx`

```tsx

import { RTNWebMap } from '@mapplus/react-native-webmap'
import { useEffect, useState } from "react";
import MapView from './MapView';

export default function App() {

  const [valid, setValid] = useState(false)

  useEffect(() => {
    init()
  }, [])

  async function init() {
    RTNWebMap.initEnvironment(9988) // 初始化并指定本地服务端口号

    const license = await RTNWebMap.getLicenseInfo()
    if (!license) {
      const serial = 'XXXXX-XXXXX-XXXXX-XXXXX-XXXXX' //序列号
      const result = await RTNWebMap.activate(serial)
      if (result) {
        console.log("激活成功")
        setValid(true)
      } else {
        console.warn("激活失败")
      }
    } else {
      console.log("已激活")
      setValid(true)
    }
  }

  if (!valid) return null

  return (
    <MapView />
  )
}

```
