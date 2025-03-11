# 动态数据的获取

与后端服务交互是页面端必备的功能，当存在数据获取时，页面处理必然是个异步的流程：即返回数据需要等待网络交互完成，代码上，我们可以使用2种js标准方式

1. Promise.then
2. async/await

## 定义获取数据方法

可以通过将 actions方法设置为异步（async）来获取数据，下面是个例子

```javascript

export default {
  actions: {
    async _loadData() {
      const provinces = await (await fetch('//unpkg.com/@mofe/china_regions@1.0.0/json/province.json')).json()
      const cities = await (await fetch('//unpkg.com/@mofe/china_regions@1.0.0/json/city.json')).json()
      const areaes = await (await fetch('//unpkg.com/@mofe/china_regions@1.0.0/json/area.json')).json()


      this._provinces = provinces
      this._cities = cities
      this._areas = areaes
     
      this.province = provinces[0].id
      this.city = cities[this.province][0].id
      this.country = areaes[this.city][0].id
    }
  }
}

```

上述定义了个异步方法，里面通过fetch来获取数据。这里方法定义为下划线开头_, 在数据连接时这个方法会被隐藏。





