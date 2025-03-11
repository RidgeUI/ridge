# 运行上下文和setup

在前面章节中，actions下的方法执行时， 会通过 this.xxx方式获取或者设置状态， 这个this实际是脚本执行的上下文环境， 后文中我们用context（上下文）来命名它

## context的引用

在actions下的方法中，通过this就可以拿到上下文。 当然，如果你希望方法是纯函数（箭头函数），那么方法的第一个参数就是context

```javascript
export default {
  name: 'Hello',
  state: {
    name: '闪耀de雨滴' // 姓名
  },
  actions: {
    setName () { // 设置名称
      this.name = this.generateRandomNetName()
    }
  }
}
```
上述写法和下面的是完全一致的，

```javascript
    setName: context => { // 设置名称
      context.name = context.generateRandomNetName()
    }
```

除了action，后面还有其他执行脚本逻辑的位置，到时会分别介绍如何在箭头函数获取context。 而非箭头函数通过this获得即可

## 使用context

context是个代理对象(proxy)，可以通过以下方式使用

1. context.状态名称 ： 直接获取或者设置状态  // this.name = 'hello'
2. context.state： 获取状态对象（包含所有状态） // this.state.name = 'hello'
3. context.setState({ ... })  设置一个或多个状态  // this.setState({ name: 'hello'}) 
上述1、2、3是等价的
4. context.emit('eventName', payload):  对外发出事件  // this.emit('hello', 'John')
5. context.properties: 获取属性对象   // this.properties.ip = '127.0.0.1'
6. context.计算字段名称： 直接获取或者设置计算字段  // this.fullName = 'Machinery Johnny'    console.log(this.fullName)
7. context.actionMethod(...) 调用action方法  // this.print()
7. context.非状态或计算字段 设置或者获取临时变量  // this.tempValue = 'yes'  


## setup和destory

可以通过setup及destory 处理数据初始化、全局事件绑定等逻辑

```javascript
{
  setup() {
    this.keyDownhandler = this.handleKeyboardInput.bind(this)
    window.addEventListener('keydown', this.keyDownhandler)
  },

  destory () {
    window.removeEventListener('keydown', this.keyDownhandler)
  }
}
```
上面例子中，为整个窗口增加了按钮按下事件，当页面销毁时， 通过destory对事件进行了销毁。  通过this.keyDownhandler 对actions进行了缓存


