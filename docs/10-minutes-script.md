# 十分钟学习编写Ridge页面脚本

## 前提条件
页面脚本是驱动页面响应用户交互和进行变化的核心，也是一个页面内在业务逻辑的承载。

但在学习之前，要求您学习或掌握以下技能：
1. 了解Javascript语言和基本概念，最好掌握Vue/React的页面编程。
2. 理解ridgeui页面开发(配置)流程

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
同样，用VSCode等代码开发工具编写上述内容然后导入到应用中也是同样的效果。

代码解释：上述代码定义了一个叫做Hello的页面脚本库，包含一个页面状态name，其值为World。

> 使用代码集成编辑器还是使用在线Ridge编辑器，是个问题。 
> VSCode等提供更好的编写体验、代码检查、AI辅助等功能， 而Ridge编辑器只提供基础的编辑功能，但是保存后可以实时运行调试。


## 页面状态 state

页面状态存储页面在运行过程中需要用到的各种数据，例如用户输入的值、从服务器获取的数据等，它可以在页面执行过程中动态变化, 进而触发连到到此状态的组件进行重新渲染。

页面状态对象也可以通过箭头函数创建，例如

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
这个写法和上面是相同效果， 但是在箭头函数下， 可以增加一些处理逻辑

## 页面属性 properties

可以定义properties:[..] 属性的方式，配置影响页面脚本库的执行

```javascript
export default {
  name: 'Hello',
  properties: [{
    label: '默认名称',
    type: 'string',
    name: 'defaultName',
    value: '无敌的犀牛'
  }],
  state: properties => {
    return {
      name: properties.defaultName // 姓名
    }
  }
}
```

对于属性：
1. 定义格式为 [...{ label, type, name, value}]
2. 属性定义后，页面基础面板上就会出现相关属性字段，可以在页面上修改。
3. 属性在页面脚本库中是只读的，不能修改。

## 页面动作 actions

通过actions: {...}  定义页面动作

```diff
export default {
  name: 'Hello',
  state: {
    name: 'World' //姓名
  }, 
+  actions: {
+    setName () { // 设置名称
+      this.name = '闪耀de雨滴'
+    }
+  }
}
```

动作的目的是在于修改页面状态，页面状态会更新体现到页面展示。 这个闭环是当前页面开发包括React、Vue等框架的基本逻辑，RidgeUI也是同样原理。

```
动作的参数：前面定义的actions中，没有参数。实际上，参数可以有以下几个方面

1. 配置页面交互时可填写，这个参数最多1个，类型为字符串
2. 组件发出事件本身携带，这个参数可能为0-n个，取决于具体组件的事件 
3. 循环显示时的单项数据上下文，这个后面会讲。 一般也是 0-n个 

当方法接受参数时，次序为 1 -> 3 -> 2
```

## 动态数据获取

与后端服务交互是页面端必备的功能, 数据获取是个异步的过程：返回数据需要等待服务响应和网络传输完成，代码上，我们可以使用2种js标准方式

1. Promise.then
2. async/await

动作可以直接声明为async的方式，看下面的例子：

```javascript
// 这是使用豆包快速生成的方法，用于获取JSON地址的数据对象
async function fetchJson(url) {
  try {
    // 发起 fetch 请求
    const response = await fetch(url, {
      mode: 'cors'
    })

    // 检查响应状态是否为 200 - 299 之间
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    // 将响应数据解析为 JSON 格式
    const data = await response.json()
    return data
  } catch (error) {
      // 捕获请求过程中可能出现的错误，并返回 null
      console.error('请求出错:', error)
      return null
  }
}

export default {
  name: 'Hello',
  state: {
    name: 'World' //姓名
  }, 
  actions: {
    async setName () { // 设置名称

      // 从下面2个地址获取形容词、动物
      const adjectives = await fetchJson(`https://cdn.jsdelivr.net/npm/animal-names-cn/data/adjectives.json`)
      const animals = await fetchJson(`https://cdn.jsdelivr.net/npm/animal-names-cn/data/names.json`)

      if (adjectives.length === null || animals.length === null) {
        console.error('无法获取有效的形容词或动物名称数组')
        this.name = '未知名称'
        return
      }
      this.name = adjectives[Math.floor(Math.random() * adjectives.length)] + animals[Math.floor(Math.random() * animals.length)]
    }
  }
}
```

代码中，声明setName为异步，当点击时，获取一些动物和形容词，然后随机拼接出一个名称， 例如返回为 爱玩的黑腹滨鹬 或者 有领地意识的天鹅 等等

## 上下文对象 context

在页面动作执行时，使用 this.name 来获取或者设置页面状态。 如果动作函数定义为箭头函数，就可以通过第一个参数获取

```javascript
export default {
  name: 'Hello',
  state: {
    name: 'World' //姓名
  }, 
  actions: {
    resetName: context => { // 设置名称
      context.name = '闪耀de雨滴'
    }
  }
}
```
这个写法好处在于，让方法变成了纯函数，更利于方法的独立测试

context是个代理对象(proxy)，可以通过以下方式使用

1. context.状态名称 ： 直接获取或者设置状态  // this.name = 'hello'
2. context.state： 获取状态对象（包含所有状态） // this.state.name = 'hello'
3. context.setState({ ... })  设置一个或多个状态  // this.setState({ name: 'hello'}) 
上述1、2、3是等价的
4. context.emit('eventName', payload):  对外发出事件  // this.emit('hello', 'John')
5. context.properties: 获取属性对象   // this.properties.ip = '127.0.0.1'
6. context.计算字段名称： 直接获取或者设置计算字段  // this.fullName = 'Machinery Johnny'    console.log(this.fullName)
7. context.actionMethod(...) 调用action方法  // this.print()
8. context.非状态或计算字段 设置或者获取临时变量  // this.tempValue = 'yes'  


## 脚本库创建和销毁 setup/destory
前面提到了在方法中获取数据，为了提高响应速度， 可以在脚本库初始化时先执行

```javascript

export default {
  setup () {
    this.adjectives = await fetchJson(`${this.properties.cdnUrl}/animal-names-cn/data/adjectives.json`)
    this.animals = await fetchJson(`${this.properties.cdnUrl}/animal-names-cn/data/names.json`)
  }
}

```

这样后续方法直接使用即可(当然要预先判断值)。
另外如果我们设置全局事件、订阅等情况，也可以用setup， 同时可以通过destroy() 取消订阅

```javascript
export default {
  setup () {
    // 模拟订阅操作
    this.subscription = subscribeToSomething();
  },
  destory () { //撤销订阅
    this.subscription.unsubscribe();
  }
}
```

## 计算状态 computed

有时，需要根据一个或多个状态联合获取一个新的显示值， 这就是计算状态。 

我们看下面的例子

```javascript
export default {
  state: {
    value: '64',
    unit: 'kg'
  }

  computed: {
    weight () {
      return this.value + this.unit
    }
  }
}
```

我们声明了2个状态：值和单位，计算输出就是完整值
当修改任何状态时，全称都会随之更新。 

另外，计算状态还是可写的， 还可以用这个形式去定义 get/set

```javascript
export default {
  state: {
    value: '64',
    unit: 'kg'
  }

  computed: {
    weight: {
      get () {
        return this.value + this.unit
      },
      set (str) {
         // 匹配数字部分
        const numberMatch = str.match(/\d+/);
        // 匹配非数字部分
        const unitMatch = str.match(/[^\d]+/);

        // 获取数字和单位
        this.value = numberMatch ? parseFloat(numberMatch[0]) : 0;
        this.unit = unitMatch ? unitMatch[0] : '';
      },
      dependencies: ["value", 'unit']
    }
  }
}
```
上面例子，根据64 和kg  给出体重的全称， 反过来，给出67kg 则能反向计算出数字和单位

另外，通过get/set方式定义，还可以声明计算字段的依赖。  否则只要任何变化（例如一个不相关的状态）， 计算字段都会重新进行

## 列表项的数据计算

计算字段另一个常见用途就是用于计算列表项中的值，因为列表项除了页面状态外，还有一个当前项的数据信息。

```javascript

  export default {
    name: 'Hello',
    state: {
      adjectives: [],
      animals: []
    },

    computed:  {
      animal (scope) {
        return scope.item
      }
    },
    setup () {
      this.adjectives = await fetchJson(`${this.properties.cdnUrl}/animal-names-cn/data/adjectives.json`)
      this.animals = await fetchJson(`${this.properties.cdnUrl}/animal-names-cn/data/names.json`)
    }
  }
```

这时，computed方法第一参数就是当前循环的子项信息,它的格式为 { list, i, item }

通过item得到当前循环项， i获得当前循环项序号。  当存在2层循环时，由内向外通过 (scope1, scope2, ...) 参数获取循环信息


列表项值更新： 
当对于一个列表更新单独项字段时，可以通过下面方式:

```javascript
  todoFinish: { // 待办事项-完成状态
    set: (val, state, scope) => {
      state.todoList[scope.i].finish = val
    },
    get: (scope) => {
      return scope.item.finish
    }
  }
```

注意对于数组项的set， 接受的参数次序为 最新值、页面状态集、scope1、scope2 ..... 

## 数据监听 Watch

当希望状态或者属性变化时，进行其他页面状态的更新，可以通过声明watch来实现

```javascript
export default {

  watch: {
    defaultName (val) {
      this.name = val
    }
  }
}
```
这样就可以处理当页面属性变化时， 页面状态需要随之更新的场景


watch也可以监听状态，当页面状态双向连接到输入项时，可以通过此进行其他逻辑处理

## 事件 event

在动作中还可以通过  this.emit('xx') 方式对外发出事件。

```javascript
export default {
  name: 'Hello'
  events: [{
    name: 'generated'
    label: '随机姓名生成',
  }],

  actions: {
    setName() {
      this.name = 'xxx'
      this.emit('generated', this.name)
    }
  }
}
```

动作实际对当前页面不会有直接影响。 但是当前页面作为子组件集成到父级页面时， 父级页面可以收到这个事件，进而在交互动作中做进一步处理。 

这个涉及到编辑器获取事件信息，所以要在代码中声明events:[] 事件


## 外部依赖 externals

当我们需要依赖一些外部库的公用方法，例如lodash、axios等时， 要通过声明externals方式。  注意这个地址的写法 （可以通过增加前缀 https://ridgeui.com/npm/ 进行验证）

```javascript
export default {
  name: 'Hello'
  externals: [
    '/lodash/lodash.min.js'
  ],
  state: () => {
    return {
      compact: _.compact([0, 1, false, 2, '', 3])
    }
  }
}
```

这个外部库要将服务对象定义到全局， 然后通过这个对象名对外部库进行使用和访问

## 资源和学习

当前教程可以通过访问 https://ridgeui.com 获取源码及示例应用

