# 列表容器：配置重复显示的内容

在常见的用户界面中，重复的列表是我们经常见到的。 像电子邮件、新闻、唱片专辑列表、积分榜等重复显示的场景，都需要借助列表容器来实现。

![list1.png](//ridgeui.com/docs/tutorial/images/list1.png)

![list2.png](//ridgeui.com/docs/tutorial/images/list2.png)

## 列表容器的使用

从容器组件中放置一个列表容器到页面后，你会发现什么内容也不显示。 因为列表容器本身是空的，至少需要设置2个内容才能正确显示。

1. 列表类型的数据，像下拉选项一样，总要有输入数据才知道有多少项目
2. 单项的模板组件：列表重复按这个模板来显示数据

可以直接在属性-数据部分输入数组数据（当然实际情况这个会连接到具体数据）。

然后将一个弹性容器作为模板，将弹性容器拖动到列表内部。

现在预览我们就会看到，放入的弹性容器会被重复显示了12次

![list-list.png](//ridgeui.com/docs/tutorial/images/list-list.png)

## 列表模式

列表目前对重复显示，提供四种模式：纵向、单行、多行及栅格。 

这其中，
1. 纵向：就是默认的情况，多个项目纵向排开，它们的高度由模板高度决定、宽度则为列表容器宽度

2. 单行：多个项目横向排开，宽度由模板决定，高度则是列表容器高度

![list-list.png](//ridgeui.com/docs/tutorial/images/list-line.png)

3. 多行: 多个项目横向排开、到达列表宽度时自动换行，宽度、高度按模板宽高决定。

![list-wrap.png](//ridgeui.com/docs/tutorial/images/list-wrap.png)

4. 栅格：多个项目按行数、列数数量对容器进行等分。例如三行三列的栅格就是九宫格排列。栅格时需要指定几等分

![list-grid.png](//ridgeui.com/docs/tutorial/images/list-grid.png)

注意：因为列表容器本身宽高可能是自适应的，所以不要忽略固定和相对长度的意义。

## 模板的数据连接
在列表模板中，最终要连接动态的数据。 因为每个项目显示的都不一样，所以通常情况下，都应该连接到计算值。 

## 示例：待办事项

现在我们完成一个待办事项页面的制作，巩固下对列表容器的理解。

首先导入脚本文件todo.js 
先提供一个输入框和确认按钮，输入内容确认后，就作为一个待办项加入到下面列表中。 点击列表项可以删除或者完成一个项目

首先添加相关组件到页面， 这次我们使用MaterialUI组件，这样可以获得更好的操作效果。
下面放入一个列表容器， 使用一个弹性容器作为模板，在容器里面放入切换选框、文本和删除按钮，用来显示每个待办项。

将弹性容器放到列表之中。进行如下数据连接

| 组件 | 子组件 |属性/交互 | 连接 |
| ---- | -- |---- | ---- |
| 待办文本输入 | | 取值 | 新增内容 |
| 增加待办按钮 |  | 单击 | 增加待办 |
| 待办列表 | | 数据 | 待办列表 |
| |模板项-切换选项 | 取值 | 待办事项-完成状态 |
| |模板项-内容 | 内容 | 待办事项-名称 |
| |删除按钮 | 单击 | 删除待办 |

这里要注意的是列表模板项的连接通常是连接到计算值，因为很显然，每个项目的值都会根据列表项数据而不同。

现在我们预览运行，就可以进行待办事项增加、删除、完成操作。


![todo-v1.png](//ridgeui.com/docs/tutorial/images/todo-v1.png)


## 附录1 todo.js

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

