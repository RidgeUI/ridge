# 动作改变状态

前面的例子，声明了状态后，如果需要其他方式改变这个状态，除了“双向连接”之外，还有的方式就是通过动作(actions)

## 声明actions

为前面例子导出对象增加一个 actions 属性

```diff
export default {
  name: 'HelloStore',
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

为actions下增加setName方法，这个方法执行中，通过**this.状态字段** 方式就能获取或设置状态值。上面例子，方法会固定将名称设置为 '闪耀de雨滴' 

增加了动作后，在页面的组件-交互面板下，就可以配置事件的动作了，或者说，动作由事件触发。

![alt text](//ridgeui.com/docs/tutorial/images/hello-dataflow.png)

当然，我们也可以制作一个随机昵称的函数避免单调。  我们可以问AI

> 通过js为我生成一个昵称的方法，要求风趣幽默

```javascript
function generateRandomNetName() { // 豆包编写：生成昵称
      const adjectives = ["快乐", "阳光", "闪耀", "梦幻", "甜蜜", "酷炫", "清新", "灵动", "神秘", "优雅", "可爱"]
      const nouns = ["精灵", "猫咪", "云朵", "星星", "蝴蝶", "雨滴", "彩虹", "微风", "海浪", "花朵", "森林"]
      return adjectives[Math.floor(Math.random() * adjectives.length)] 
        + '而又' + adjectives[Math.floor(Math.random() * adjectives.length)] + '的' + nouns[Math.floor(Math.random() * nouns.length)]
}
```

将这个方法加入actions中

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
    
    setName () { // 设置名称
      this.name = this.generateRandomNetName()
    }
  }
}
```
这里，通过this.generateRandomNetName() 这样的方式可以调用actions里定义的其他方法。


## 接收方法的参数

前面定义的actions中，没有方法参数。实际上，方法接受参数可以有以下几个方面

1. 配置页面交互时填写的，这个参数最多1个，类型为字符串
2. 组件发出事件本身携带，这个参数可能为0-n个，取决于具体组件的事件 
3. 循环显示时的单项数据上下文，这个后面会讲。 通用也是 0-n个 

当方法接受参数时，次序为 1 -> 3 -> 2

我们来看页面开发-数据连接与交互中的例子，当地图组件配置了geo数据后，会发出一个事件，这个事件就携带了geo中的区域列表

```javascript
 
 setFeatures (list) {  // 设置区域列表
    // ['东城', '西城', '朝阳', '丰台', '石景山', '海淀', '门头沟', '房山', '通州', '顺义', '昌平', '大兴', '怀柔', '平谷', '密云', '延庆']
    this.state.features = list.map((t,index) => ({
      label: t,
      value: index
    }))
    this.current = list[0]
 }
 // 略...
```

上面列表给出了一个区/市名称， 但是这个列表是个纯字符串数组，而下拉、切换、选择等组件需要的类型如下：
```json
[
  {
  "label":"选项1",
  "value": "key1"
  }, {
  "label":"选项2",
  "value": "key2"
  }
]
```

因此，上述setFeatures方法将列表做了个map

```bash
['东城', '西城', '朝阳', '丰台', '石景山', '海淀', '门头沟', '房山', '通州', '顺义', '昌平', '大兴', '怀柔', '平谷', '密云', '延庆']

输出为

[
    {
        "label": "东城",
        "value": 0
    },
    {
        "label": "西城",
        "value": 1
    },
    {
        "label": "朝阳",
        "value": 2
    }
    // .....
]
```

这样将输出数据设置到 features 后， 所有连接到features的组件都会随之更新显示


