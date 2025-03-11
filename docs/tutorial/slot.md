# 位置预留：配置对话框

前面几章，列表、切换、弹性容器都是纯容器，本身不显示任何内容。还有一些“容器”类组件，本身可以有一定显示内容，并且预留了一些“位置”，在里面可以配置放入其他组件。

比较常见的像弹出对话框、侧边栏、气泡栏等都是这样，他们自身也会按动作去展示，同时局部还可以去额外定制

## 对话框配置
我们继续上一章节的待办应用，把新增待办做成对话框。

首先还是从material组件库中拖动一个对话框到页面中。 注意：在设计期间，对话框可以放置到一个合适位置并可调整大小，随时可见。但是到了运行期间，需要动态设置其打开属性为“是“，才能按设计大小在页面正中显示

对话框提供了“内容”作为位置预留：因为很多情况下，一个对话框内容都是自由定义的。

新增一个简单的表单，包括了待办内容、优先级2个输入项，其中优先级使用“评分”组件。 将整个表单容器通过布局导航树拖入对话框之中， 可以看到表单就放入到对话框正文之中了

![todo-modal.png](//ridgeui.com/docs/tutorial/images/todo-modal.png)

另外，因为对话框要点击新增按钮才打开，在对话框内填写信息确认后关闭，因此需要再做以下配置：
1. 修改页面脚本引入从todo.js改为 todo_advanced.js
2. 将对话框的打开属性连接到状态值显示对话框，同时将增加待办按钮的交互-单机行为修改为“显示对话框”。这样点击按钮，对话框就会被打开了。
3. 在对话框交互中，将确认的行为设置为“增加待办”，这样点击对话框确认按钮，对话框会关闭并且新的待办信息会出现到列表中


最后，将其他组件做如下连接设定：
1. 待办输入项，还是连接到之前的新增内容
2. 评分组件取值连接到待办优先级状态
3. 为之前待办列表增加评分组件，连到到计算值 待办事项-Star
  
最终预览效果如下 

<iframe src="//ridgeui.com/npm/ridge-tutorial/#/tasks/todoList_modal" width="640" height="460" frameborder="0" allowfullscreen>
</iframe>

## 更多内容

1. 除了对话框，很多组件都可能有预留位置，具体见组件帮助说明
2. todo_advanced.js 还将待办信息保存到浏览器存储中， 再进入页面时，之前填写的待办和信息都保留。

## 附录 : 
1. todo_advanced.js
```javascript

export default {
  name: 'Todo',
  state: {
    star: 3, // 待办优先级
    showDialog: false, // 显示对话框
    newText: '', // 新增内容
    todoList: [], // 待办列表
  },

  computed: {
    todoText: scope => { // 待办单项-名称
      return scope.item.text
    },
    todoStar: scope => { // 待办单项-Star
      return scope.item.star
    },
    todoStatePanel: state => { // 待办切换显示
      return state.todoList.length === 0 ? 'none': 'list'
    },
    todoFinish: { // 待办事项-完成状态
       set: (val, state, scope) => {
         state.todoList[scope.i].finish = val
         localStorage.setItem('todoList', JSON.stringify(state.todoList))
       },
       get: (scope) => {
         return scope.item.finish
       }
    }
  },

  setup() {
    const todoList = localStorage.getItem('todoList')
    if (todoList) {
      this.todoList = JSON.parse(todoList)
    }
  },

  actions: {
    openDialog () { // 显示对话框
      this.showDialog = true
    },
    addTodo () {  // 增加待办
      if (this.newText === '') {
        return
      }
      this.todoList.push({
        star: this.star,
        t: new Date().getTime(),
        text: this.newText,
        finish: false
      })
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
      this.newText = ''
      this.showDialog = false
    },
    removeTodo (scope) { // 删除待办
      this.todoList = this.todoList.filter(todo => todo.t !== scope.item.t)
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    }
  }
}
```



