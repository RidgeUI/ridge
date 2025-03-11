# 数据连接与交互

您可能看到了，上一节，在文本中输入文字，下面的显示也随之变化。这就是数据的连接：

- 组件按连接的数据进行实时更新显示
- 用户操作的交互会触发数据变化

![alt text](//ridgeui.com/docs/tutorial/images/hello-dataflow.png)

上面例子中，输入框修改造成名称变化， 而名称变化又更新到文本内容。 点击按钮造成名称变化，名称变化同时更新了输入框和文本。 

在这里，输入框较为特殊，他既能接受变化，又能发出变化。很多组件例如输入框、下拉选择、单选框、多选框、标签页等都有类似功能。 

但无论如何，设计页面我们只需要考虑如何连接属性、如何处理交互即可。

## 一个复杂些的示例

为了巩固上述概念， 我们制作一个地图页面， 页面中会显示北京市地图， 当选择各个行政区时，地图对应部分进行高亮度显示

![alt text](//ridgeui.com/docs/tutorial/images/map-final.png)

### 准备
1. 创建页面，我们命名为 beijing
2. 应用中添加一个地图文件，可以<a href="//unpkg.com/ridge-tutorial/map/110000.json" download>点此下载</a>后添加
3. 应用中添加一个页面脚本文件，可以<a href="//unpkg.com/ridge-tutorial/map/map.js" download>点此下载</a>后添加

### 放置页面的组件

打开页面，首先在脚本库选择map.js (步骤3添加的脚本)

还是从bootstrap组件库中依次向页面加入文本、 下拉选择、页签、 2个按钮。
切换组件库echarts (<img src="//unpkg.com/ridge-echarts/icons/echarts.svg" width="24" height="24"> ) ，向页面放入地图组件

### 配置连接、交互

| 组件 | 属性 | 连接/配置值 |
| ---- | ---- | ---- |
| 页签  | 当前项 | 区域值 |
|  | 页签项 | 区域列表 |
| 下拉选择  | 当前项 | 区域值 |
|  | 选项 | 区域列表 |
| 区域地图 | 地理JSON文件  | 110000.json |
|  | 数据 | 图表当前选中 |

| 组件 | 交互 | 处理动作 |
| ---- | ---- | ---- |
| 区域地图  | 区域读取 | 设置区域列表 |
| 上一个  | 点击 | 上一个 |
| 下一个  | 点击 | 下一个 |


### 预览运行

点击下拉项、或者切换选择时， 地图区域会随之联动

<iframe src="//ridgeui.com/npm/ridge-tutorial/#/map/beijing" width="820" height="730" frameborder="0" allowfullscreen>
</iframe>

## 回顾

虽然我们只配置了各种组件的连接和交互， 但实际整体页面数据是这样变化的：

<img src="//ridgeui.com/docs/tutorial/images/map-flow.png"> 

1. 地图配置了地理JSON文件时，会产生个动作（注意，动作不一定由使用者触发， 组件自己本身也会发出动作）。 动作的交互，触发-设置区域列表
2. 区域列表改变，触发下拉框和标签组件显示出区域的列表
3. 用户切换区域（或点击上一个、下一个）， 触发当前区域发生变化
4. 区域变化触发名称改变，使文本内容发生变化
5. 触发图表选中发生改变，使地图对应区域高亮

这实际在前端开发中被成为“页面数据流“。它的特点就是组件之间没有发生直接交互，每个组件都和数据进行单向或双向的连接，方便了配置过程。

## 更多了解
- [geojson](https://geojson.org/) 是标准地图规范,可以通过[中国地图 GeoJSON 数据集](https://geojson.cn/)下载各省市地区文件，并替换到上面例子中

## 附录
map.js  <a href="//unpkg.com/ridge-tutorial/map/map.js" download>点此下载</a>

```javascript

export default {
  name: 'MapToggle',
  state: {
    currentIndex: 0, // 区域值
    features: [] // 区域列表
  },

  computed: {
    currentName () { // 当前区域名称
      return this.features[this.currentIndex]?.label
    },
    currentRegion () {  // 图表当前选中
      return [{
        name: this.currentName,
        value: 40
      }]
    }
  },

  actions: {
    setFeatures (list) {  // 设置区域列表
      this.state.features = list.map((t,index) => ({
        label: t,
        value: index
      }))
      this.current = list[0]
    },

    prev () { // 上一个
      if (this.currentIndex === 0) {
        this.currentIndex = this.features.length - 1
      } else {
        this.currentIndex --
      }
    },

    next () { // 下一个
      if (this.currentIndex === this.features.length - 1) {
        this.currentIndex = 0
      } else {
        this.currentIndex ++
      }
    }
  }
}
```

