# 计算状态

## 计算状态的定义
有时，需要根据一个或多个状态联合获取一个新的显示值， 这就是计算状态。 计算状态声明在根属性computed中

回到 《数据连接与交互》示例中，这里面就定义了2个计算状态，如下：
```javascript

export default {
    //...
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
    }
    //...忽略
}
```

当切换区域时，实际只改变了状态 currentIndex， 要获取当前索引对应的区域显示名称， 需要通过 this.features[this.currentIndex]?.label 才能拿到。 

将其作为计算值后，每次currentIndex， 名称都会重新计算。 这样当数据连接到 currentName时，会随之随时更新。

再看”图表当前选中“计算值， 这个值实际用到了上面那个计算值。虽然计算值是个函数，但实际引用时直接按名称引用即可。

## 修改计算状态

实际上，计算状态并不是只读的，也可以定义修改时的处理逻辑。下面的写法和之前的例子是等价的：

```javascript
export default {
  //...
  computed: {
    currentName: { // 当前区域名称
      get () {
        return this.features[this.currentIndex]?.label
      },
      set (val) {
        this.currentIndex = this.features.findIndex(region => region.label === val)
      }
    }
  },
    //...忽略
}
```

通过声明 get() 方法，获取读取值，通过 set() 方法也可以设置值。 上面例子中，通过给了地区名称，反向去查找对应的索引值。


## 计算状态的依赖

通过上面2个示例，你是否思考过，计算值是何时更新的呢？  实际上，前面的例子，任何页面状态改变，都会驱使计算值进行重新计算。在一些情况下，这个会带来不必要开销。

可以通过声明依赖来指定计算值何时更新

```javascript
export default {
  //...
  computed: {
    currentName: { // 当前区域名称
      get () {
        return this.features[this.currentIndex]?.label
      },
      set (val) {
        this.currentIndex = this.features.findIndex(region => region.label === val)
      },
      dependencies: ["currentIndex"]
    }
  },
    //...忽略
}
```

通过 dependencies 定义依赖，上述例子，只有currentIndex状态发生变化时，上述计算字段才会进行计算。

## 更多
计算字段除了基于现有字段提供计算值之外，还有个重要作用在后面循环渲染时会提到