# 切换容器：在一个区域显示不同内容

在页面设计中，同样一个位置，往往因为用户的当前数据、或响应用户操作而展示不同内容。这时就需要切换容器来实现：切换容器允许有多个下层组件，通过动态修改容器的“当前“属性而决定显示哪个下层组件。

## 切换容器的使用

从容器组件中放置一个切换容器到页面。切换容器本身也是空的，因为它显示什么要取决于”当前“的下层组件

下面进行一个简单的示例。 
分别向页面拖入三个弹性容器组件， 配置不同的背景颜色。  
![switch-before.png](//ridgeui.com/docs/tutorial/images/switch-before.png)

然后在布局导航树中，拖动三个容器到切换容器之下。 

在设计期间，点击布局导航下的不同组件就可以切换到容器的当前显示。 而到了运行期，可以通过连接当前内容的值就可以进行切换。

![switch-yellow.png](//ridgeui.com/docs/tutorial/images/switch-yellow.png)

为了在运行期间切换内容，我们将  tab-switch.js 加入应用并在页面引入。

将当前内容连接到状态：当前显示。 放置2个按钮上一个、下一个，并配置对应的事件。点击按钮后，内容就会在3个容器中切换了

![switch-yellow.png](//ridgeui.com/docs/tutorial/images/switch-run.png)

## 示例：切换待办项显示

在上一章时,我们制作了一个待办事项页面，但是，这个页面存在一个问题：当未增加待办事项时，下面完全是一片空白。

为了解决这个问题，我们在原来列表的位置放置一个切换容器：当待办为空时，我们显示“无内容”的信息，当待办存在时，就显示待办列表

新增一个弹性容器，设置为竖排、里面放入一个图标、一个文本内容， 文本中显示：太棒了，您目前无任何待办工作。

然后将前面的列表容器和这个弹性容器都在布局导航树中拖拽到切换容器之下，最终形成页面结构如下：

![todo-v2-nav.png](//ridgeui.com/docs/tutorial/images/todo-v2-nav.png)

> 上图中，使用鼠标拖拽导航项上，直到出现放入效果，就可以放入之下了。 所有存在层次关系的组件都可以这样拖拽操作

然后，需要告诉切换容器显示哪个切换层，我们命名列表组件为list、弹性容器组件为none。连接切换组件的当前内容为计算值-待办切换显示。
（注意，这里list/none这2个值是必须的，并且和开发人员给的值保持一致—） 然后将切换容器的当前内容连接到计算值：待办切换显示

配置好后完成的效果如下：

![todo-v1.png](//ridgeui.com/docs/tutorial/images/todo-v2.png)


页面预览
<iframe src="//ridgeui.com/npm/ridge-tutorial/#/tasks/todoList" width="640" height="460" frameborder="0" allowfullscreen>
</iframe>

## 附录 : 

1. tab-switch.js
```javascript
export default {
  name: 'TabSwitch',
  state: {
    currentTab: 0 // 当前显示
  },

  actions: {
    nextTab () { // 下一个
      if (this.currentTab === 2)  {
        this.currentTab = 0
      } else {
        this.currentTab ++
      }
    },

    prevTab () { // 上一个
      if (this.currentTab === 0)  {
        this.currentTab = 2
      } else {
        this.currentTab --
      }
    }
  }
}

```
2.todo.js

```javascript

export default {
  name: 'Todo',
  state: {
    newText: '', // 新增内容
    todoList: [], // 待办列表
  },

  computed: {
    todoText: scope => { // 待办单项-名称
      return scope.item.text
    },
    todoStateText: scope => { // 待办单项-状态
      return scope.item.finish ? 'finished': 'todo'
    },
    todoFinish: { // 待办事项-完成状态
       set: (val, state, scope) => {
         state.todoList[scope.i].finish = val
       },
       get: (scope) => {
         return scope.item.finish
       }
    }
  },

  actions: {
    addTodo () {  // 增加待办
      if (this.newText === '') {
        return
      }
      this.todoList.push({
        t: new Date().getTime(),
        text: this.newText,
        finish: false
      })
      this.newText = ''
    },
    removeTodo (scope) { // 删除待办
      this.todoList = this.todoList.filter(todo => todo.t !== scope.item.t)
    }
  }
}

```



