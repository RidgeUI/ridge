# 编写 Hello World

## 前提条件
本系列教程将会带你了解开发Ridge页面脚本库。 页面脚本是驱动页面响应用户交互和进行变化的核心，也是一个页面内在业务逻辑的承载。 同时，脚本库是一个可以独立开发和验证的单元。 

在学习之前，要求您学习或掌握以下技能：
1. 了解Javascript语言和基本概念
2. 了解ridgeui页面开发流程：本系列教程例子也会围绕页面开发教程中的脚本进行。
  
## 编写Hello World

在编辑器中，点击应用资源-> 增加 -> 创建脚本库

```javascript
export default {
  name: 'Hello',
  state: {
    name: 'World' //姓名
  }
}
```

输入上述代码给AI解释即可。 下面解释来自某AI
1. export default 是 ES6（ES2015）引入的模块导出语法，用于指定一个模块的默认导出内容。当其他模块导入这个模块时，如果没有特别指定要导入的内容，就会导入这个默认导出的对象。每个模块只能有一个默认导出项。
2. 导出的对象 这是一个 JavaScript 对象，它包含两个属性：name 和 state。
 - name 属性
  该属性的值是字符串 'HelloStore'。在 Vuex 或 Nuxt.js 的 store 模块中，name 通常用于标识这个 store 模块的名称，方便在调试或者管理多个模块时进行区分。
 - state 属性
  这是一个嵌套的对象，用于存储应用的状态数据。在 Vuex 中，state 是用来存储应用中需要共享的数据的。
  state 对象里有一个 name 属性，其值为字符串 'World'，并且代码中给出了注释 //姓名，这表明这个 name 可能代表着应用中某个用户或者实体的姓名。

当然，ridge脚本库并非Vuex的store模块，只能说，很多方面非常类似。

## 从属性初始化状态

上面例子，state是个对象。当然如果期望增加一些初始化逻辑，可以这样编写

```javascript
export default {
  name: 'Hello',
  state: () => {
    return {
      name: 'World' //姓名
    }
  }
}
```

这里state作为一个函数（箭头函数），通过返回值就可以得到脚本库的状态集，可以在其中加入其他处理逻辑。

特别的，可以通过声明属性、默认值方式，让这个默认值可以初始化定义：

```javascript
export default {
  name: 'Hello',
  properties: [{
    label: '默认名称',
    type: 'string',
    name: 'name',
    value: '酷炫阳光'
  }],
  state: properties => {
    return {
      name: properties.name //姓名
    }
  }
}

```

properties属性声明了页面脚本库属性， 它是个数组形式可以声明多个属性，声明后，在state箭头函数中会收到这些属性值，同时，页面配置时，也会显示这个属性配置项。




========
