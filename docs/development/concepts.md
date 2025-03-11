# 基本概念
UI组件:  用于页面显示，可以快速的通过编写组件描述(.d.js)文件将一个现有的React/Vue/Vanila组件封装为UI组件
数据组件 : 基于MVVM/数据流概念开发的页面控制逻辑，它和Store
页面 (Composite/Page): 用户具体使用的页面，页面通过设计器制作、通过运行时渲染显示。
应用 (Application): 多个页面的组合体，应用可以作为一个完整功能的载体，也可以作为功能库为其他应用服务。

# UI组件的开发

## 准备工作

1、全局安装ridge-build工具
> npm i -g ridge-build

2、创建 ridge.config.js 文件 (可选)
```javascript
module.exports = {
  
}
```
后续相关配置可在此文件追加

3、调试服务

下载ridge-community版本

## 组件创建

### 基于React的组件
创建以下文件到项目src目录

> src/test/index.d.js
> 
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


# 编写Ridge Store

Ridge Store实际是一个js脚本，它的概念非常简单：页面中所有变化都来自于Store，而所有可输入、交互组件都可以发出事件驱动Store变化


## Hello World 

通过应用资源-创建程序文件可以创建一个最基础的store脚本
```javascript
// hello.store.js
export default {
  name: 'StoreExample',
  state: {
    name: 'Ridge' // 姓名
  }
}
```
将这个文件引入页面， 在输入框数据连接到“姓名”，文本内容连接到“欢迎语” 就可以看到文本随输入而变化了

## Store基本构成

Store由下列属性组成， 下面是个包含所有属性的Store

```javascript
export default {
    name: '',
    properties: [],
    state: () => {},
    computed: {},
    async setup () {},
    destory () {},
    update() {},
    watch: {},
    actions: {}
}
```

### name 名称

Store名称，注意创建后不要修改。 页面组件连接会使用到，修改后之前连接就无效了

### properties 属性

可配置属性，当属性变化时，可以通过 watch或 update 方法来更新整个store

### state 状态

可以为一个对象、或者一个函数返回一个对象。 
例如
```javascript
{
    state: () => {
      return {
          filter: '', // 过滤条件
          pageNum: 1, 
          pageSize: 80
      }
  }
}
```
状态可以直接给组件进行连接， 当同行跟随 // 注释时，连接会使用注释

### setup  

是一个异步函数，当需要初始化Store调用接口时，一般在此进行。  在setup中，可以通过 this.state/this.properties 获取、设置上面定义值，更多详情见context/scope

### destory

销毁相关事件、监听、DOM操作等

### computed

计算类，有以下典型用途： 
1. 对状态进行转换、合并、过滤等操作
```javascript
export default {
    // ...
    computed : {
        currentPageList () {
          return this.filteredIconList.slice((this.pageNum - 1) * this.pageSize, this.pageNum * this.pageSize)
        },
    }
    // ...
} 
```
2. 对于列表单项的数据进行运算

```javascript
export default {
    // ...
    computed : {
        itemPackageName (scope) { // 单项-包名称
            return scope.item.name
        },
    }
    // ...
} 
```
!!! 注意，这时方法有个参数scope，关于列表渲染、scope 具体见 [Context && Scope](#context-scope)  

1. 支持set 
有时候，需要对计算值进行反向写入

```javascript

export default {
    // ...
    computed : {
        itemValue: {
          get: scope => {
            return scope.item.value
          },
          set: (val, state, scope) => {
            state.errorMsg = ''
            state.opts[scope.i].value = val
          }
        }
    },
    // ...
} 
```
注意， get时，参数为 scope1, scope2 ...., set时为 val, state, scope1, scope2 ....

## Context && Scope <a id="context-scope"></a> 

