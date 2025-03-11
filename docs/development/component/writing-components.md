# 编写(接入) Ridge组件

## 准备工作

1、全局安装ridge-build工具
> npm i -g ridge-build

2、创建 ridge.config.js 文件 (可选)
```javascript
module.exports = {}
```
后续相关配置可在此文件追加

3、组件调试

下载ridge-community版本，放置组件包到public目录，通过编辑器即可直接使用


## 组件创建

### 基于React的组件
创建以下文件到项目src目录

> src/test/index.d.js
> src/test/Component.jsx


```javascript
// src/test/index.d.js
import Component from './Component.jsx'

export default {
  name: 'component',
  component: Component,
  title: '组件',
  type: 'react',
  width: 260,
  height: 40,
  props: [{
    name: 'name',
    label: '按钮',
    type: 'string',
    connect: true,
    value: '内容'
  }]
}

```

```javascript
// src/test/Component.jsx
import React from 'react'
export default ({
  name
}) => {
  return (
    <div>Hello: {name}</div>
  )
}
```
这其中， index.d.js是组件配置描述文件， 主要描述组件属性、事件如何配置。 文件格式见《组件配置描述》

而 Component.jsx则是标准React组件，如果组件用Vue编写，*.d.js文件格式保持不变

### 构建

加入以下行到 package.json文件
```
{
 "scripts": {
    "build": "ridge",
    "watch": "ridge -w -s",
    "help": "ridge --help",
    "pd": "npm publish --tag dev"
  }
}
```
执行 build命令进行构建、watch命令进行调试

构建时会按  > './src/**/*.d.js' 查找所有组件， 可以通过修改 ridge.config.js更改

```javascript
module.exports = {
  pattern: './src/**/*.d.js'
}
```


### 组件开发调试


## 依赖库的配置和加载声明

类似以下代码
```javascript
import React from 'react'
import { Modal } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'
```
如果不希望@douyinfe/semi-ui等一起打包，可以在npm项目目录下创建 ridge.config.js 文件

```javascript
// {Package Dir}/ridge.config.js
module.exports = {
  localNpmDir: '../../public/npm',
  configureWebpack: {
    externals: {
      '@douyinfe/semi-ui': 'SemiUI',
      '@douyinfe/semi-icons': 'SemiIcons'
    }
  }
}
```
@douyinfe/semi-ui保持和import from xxx一致， SemiUI和库的全局对象名称一致

打包排除后，需要通过package.json中externals字段指定这些库如何加载

```json
// package.json下
{
    "name": "ridge-semi",
    "version": "1.0.0",
    "icon": "icons/semi.svg",
    //...
    "externals": [
        "/@douyinfe/semi-ui/dist/umd/semi-ui.min.js",
        "/@douyinfe/semi-ui/dist/css/semi.min.css",
        "/@douyinfe/semi-icons/dist/umd/semi-icons.min.js"
    ]
    //....
}
```
上述地址是绝对地址，相对于全局npm仓库（组件正式运行时在页面运行时指定），

//unpkg.com/@douyinfe/semi-ui/dist/umd/semi-ui.min.js
//cdn.jsdelivr.net/npm/@douyinfe/semi-ui/dist/umd/semi-ui.min.js

如果写相对地址，就是相对于组件包的路径， 例如：semi-ui.min.js，将文件放到组件包根目录即可

如果要声明仅组件运行加载的外部依赖，在组件的 index.d.js中，同样增加下列行

```javascript
import RoseChart from './RoseChart'

export default {
  name: 'RoseChart',
  title: '玫瑰图',
  component: RoseChart,
  icon: 'icons/rose-chart.svg',
  type: 'vanilla',
  externals: [''],
  props: [chartData, colors],
  width: 320,
  height: 320
}


```

> 默认 react/vue是全局加载，不会打包入组件，也无需做额外声明，会根据package.json的依赖进行自动加载 
> 如果不做上述配置，



## ridge.config.js


