# Ridge Component Build & Debug Tool

## 参数

```
build-fc --help
 
 Usage: build.js [options] [command]
  
 Commands:
   help     Display help
   version  Display version
  
 Options:
   -d, --dir [value]  The Front Component Project Root Path (defaults to "./")
   -h, --help         Output usage information
   -p, --port         Package Provider Host Port
   -r, --remote       Enable Remote Debug
   -s, --src          No Minimize
   -v, --version      Output the version number
   -w, --watch        Build with Watch
```

```
-d 指定组件包所在目录。 默认在组件包目录执行此命令无需提供

-p 本地调试服务端口

-r 启动远程调试

-s 源代码方式构建 （组件调试需要）

-w 代码变动重新编译
```

可以将以下常用命令加入 package.json 

```
{
    "name": "ridge-component-containers",
    "version": "1.0.2",
    "description": "容器组件",
    "releaseNote": "新增弹出层",
    "releaseTime": "2022-05-01",
    "apolloVersion": "V8.0.415.0",
    "scripts": {
        "storybook": "start-storybook -p 9003",
        "build": "build-fc",
        "watch": "build-fc -w",
        "help": "build-fc --help",
        "debug": "build-fc -w -s -p 8700",
        "bs": "build-fc -s",
        "pd": "npm publish --tag dev"
    },
    "keywords": [
        "Container"
    ],
    ....
}
```


## Webpack配置修改

工具使用webpack对组件进行配置，如果需要对配置进行进一步修改，可以在组件项目根目录放置  ridge.config.js 进行配置覆盖 

例如：
```javascript
const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@common': path.resolve(__dirname, './src')
            }
        }
    }
}
```

## 组件拆包及异步加载

当组件内容不需要一次性加载、同组件包多个组件共享相同内容时，可以通过结合 import() 函数及webpackChunkName进行依赖引用

1. 打包多个模块为一个chunk，异步加载
```
import React from 'react';

export default (props) => {
    import(/* webpackChunkName: "module" */ './index').then(Module => {});
    import(/* webpackChunkName: "module" */ '../../editor/prop_edit_config').then(Module => {});
    return <div />;
};

```
2. 多个组件使用相同的 webpackChunkName来共享加载


## 变更记录
- 1.1.0 支持组件根目录下 ridge.config.js 文件，在其中配置configWebpack进行webpack属性合并修改
