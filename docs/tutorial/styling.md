# 配置组件的样式

一些情况下，我们希望能更灵活的设置组件呈现的样式，例如加个底边、调整文字样式、设置组件的动画效果等。

为此，很多组件也提供了样式属性可供配置，选择了某个样式组件就会更改显示形态。 当然在此之前，需要在应用安装提供样式的组件库。

本文介绍了几个组件库内置样式的样例。 未来你可以按需安装更多组件库来实现更丰富的样式

## bootstrap 样式

条件： 需要安装bootstrap组件库（教程应用本身已包含）

拖拽放入弹性容器，点击样式右侧的编辑图标，出现选择类样式弹出层, 选择背景颜色-次主色(bg-primary-subtle),可以看到容器的背景颜色就改为浅蓝色（这是bootstrap默认主题的次主色）

![alt text](//ridgeui.com/docs/tutorial/images/pop-style.png)

我们可以依次调整边框宽度、边框位置、边框颜色、背景、阴影等值，配置出不同的层样式

![alt text](//ridgeui.com/docs/tutorial/images/style-box.png)


> 注意： 在应用中安装了组件库后，如果组件提供了自定义样式，那么在类样式弹出层就会显示出可用样式

## animate.css 样式

条件 安装ridge-animatecss组件库（教程应用本身已包含）

ridge-animatecss是从  https://animate.style/ 中的动画样式封装的， 使用时同样只需要选择开关打开，进入/离开/醒目效果，选择重复、延迟和持续时间就可以配置出指定样式


![alt text](//ridgeui.com/docs/tutorial/images/animation.gif)

## 更换样式主题

一些组件库支持多种样式，上面例子中，我们指定样式背景颜色为次主色，这是bootstrap样式库定义的一个颜色名称，而不是一个特定的颜色值。所以，当采用不同的配色时，这个颜色会随之改变。

![alt text](//ridgeui.com/docs/tutorial/images/boot-theme.png)

现在，赶快选择配色来定制你的页面把。

