# 编写 Hello World

## 视频

## 欢迎来到 “锐制设计” 教程！

本教程的目标是让你快速体验使用Ridge编辑器设计页面的感受。它并非面面俱到，但是教程涵盖了设计器的所有重要特性，最重要的是，它符合“边用边学”的理念，您可以由此最快速的成为锐制开发人员。

## 先决条件
本教程并不假定读者需要任何编程知识。特别的，随着对页面开发的逐渐深入理解，你将会对页面的处理逻辑更加清晰。 
在未来，您学习页面脚本库开发会更加得心应手
如果您是开发人员，那也很适合从这里开始，了解整个页面流程也对代码开发相当关键。

## 配置内容
### 打开编辑器，并创建页面

首先是访问 https://ridgeui.com (当然您可能已经在这里了) 点击首页-开始使用打开编辑器

应用资源-创建页面-填写Hello-确定。

在应用资源中打开hello页面

### 加入组件
在左边组件栏，点击 <img src="//unpkg.com/ridge-bootstrap/icons/bootstrap.svg" width="32" height="32"> 图标，进入Bootstrap组件库

分别拖拽一个"单行输入" 组件和“文本”组件到页面中

### 加入页面状态库
在应用资源中选择上传文件，从这个地址下载 后，选择这个文件上传到应用资源中

> 当然，未来如果成为代码开发人员，您将会更了解它。 在这之前，只需要把现成的js脚本文件导入应用即可。

导入完成后我们需要在页面引入它。 点击到页面空白处，在“脚本库”下勾选上刚刚上传的脚本文件

### 连接组件到页面状态

在页面中选中单行输入组件，右侧属性栏找到“取值”，当我们输入内容时，单行输入内容也随之改变。 但是，如果需要它运行时动态改变，需要点击右侧闪电图标进行数据连接->选择“姓名”。

![连接](//ridgeui.com/docs/tutorial/images/connect.png)

同样，选中文本组件，右侧属性栏找到“内容”，点击右侧闪电图标，选择“姓名”。

好了，点击中间最下方菜单面板，运行按钮预览。当输入框输入文字变化时， 下面文本内容同步显示

![连接](//ridgeui.com/docs/tutorial/images/hello-1.png)


### 配置事件

现在，我们现在增加一个按钮，让用户点击时，将欢迎语重置为其他内容。

从左边组件栏,拖拽一个“按钮” 组件到页面中， 选中按钮，在右上方面板选中交互-点击-单击＋号-下拉框中选择“设置名称” 

设置完成后重新查看运行： 点击打招呼按钮， 欢迎语会重置

<iframe src="//ridgeui.com/npm/ridge-tutorial/#/hello/hello" width="400" height="200" frameborder="0" allowfullscreen>
</iframe>


## 回顾

本文中，您一定掌握了以下内容：

- 在应用资源中创建页面、上传文件
- 可以将组件栏上面的组件拖拽放入到页面中
- 可以配置组件属性，点击闪电图标可以连接动态的数据
- 可以配置组件交互，当组件产生交互动作时，更新动态数据

## 附录1 hello.js

下载地址 <a href="//unpkg.com/ridge-tutorial/hello/hello.js" download>hello.js</a>

```javascript
export default {
  name: 'Hello',
  state: {
    name: '闪耀de雨滴' // 姓名
  },
  actions: {
    generateRandomNetName() { // 豆包编写：生成网名
      const adjectives = ["快乐", "阳光", "闪耀", "梦幻", "甜蜜", "酷炫", "清新", "灵动", "神秘", "优雅", "可爱"]
      const nouns = ["精灵", "猫咪", "云朵", "星星", "蝴蝶", "雨滴", "彩虹", "微风", "海浪", "花朵", "森林"]
      return adjectives[Math.floor(Math.random() * adjectives.length)] 
        + '而又' + adjectives[Math.floor(Math.random() * adjectives.length)] + '的' + nouns[Math.floor(Math.random() * nouns.length)]
    },
    
    setName (name) { // 设置名称
      this.name = this.generateRandomNetName()
    }
  }
}

```

