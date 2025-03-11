# 表单的验证

本章节，我们结合前面学习的布局和数据连接，完成一个表单的填写及验证

## 准备工作
同样，导入这个收货地址页面状态库，里面包含了所有相关可连接状态 

## 配置连接信息

因为表单项目较多，因此所有输入项要同对应状态进行连接, 除此之外，表单开发经常会涉及以下常见问题： 

1. 验证
需要验证用户输入的合法性，对于不同的输入有不同验证规则，例如要求必填、必须为特定格式（手机号码、邮箱）、必须指定长度等
验证都由页面脚本库开发人员进行， 页面涉及人员只需要选择对于项目的“有效性”字段到验证状态数据即可。

2. 输入项联动和动态数据获取
联动表示随着用户输入，进一步输入也不同。
例如常见的地址选择中，省/市/县选择时， 要求选择指定省下的城市、指定城市下的县区。在选择过程中，后续的数据可能要通过网络请求进行即时下载

虽然过程很复杂， 对于页面开发人员，只需要将所有表单项输入值、可选值等连接到相应的页面状态即可。

具体连接配置如下

| 组件 | 属性/交互 | 连接 |
| ---- | ---- | ---- |
| 收货人输入 | 取值 | 收货人 |
|  | 验证状态 | 收货人有效性 |
| 省 | 取值 | 当前省 |
|  | 选项 | 省直辖市列表 |
| 市 | 取值 | 当前市 |
|  | 选项 | 城市列表 |
| 县 | 取值 | 当前区县 |
|   | 选项 | 区县 |
| 详细地址 | 取值 | 详细地址 |
|  | 验证状态 | 详细地址有效性 |
| 手机号码 | 取值 | 手机号码 |
|  | 验证状态 | 手机号码有效性 |
| 邮箱地址 | 取值 | 邮箱 |
| 地址标签 | 当前项 | 已选地址标签 |
|  | 页签项 | 地址可选标签 |
| 按钮 | 点击 | 执行验证 |

输入错误点击验证为 

![](//ridgeui.com/docs/tutorial/images/form-error.png)

输入错误点击验证为

![](//ridgeui.com/docs/tutorial/images/form-ok.png)



## 回顾
1. 连接输入项的内容和验证状态到对应状态值
2. 对于联动情况也遵循上述配置。实际数据变化处理都交给脚本

页面预览效果如下：

<iframe src="//ridgeui.com/npm/ridge-tutorial/#/form/address" width="640" height="360" frameborder="0" allowfullscreen>
</iframe>


## 附录： 

form.js <a href="//unpkg.com/ridge-tutorial/form/address.js" download>点此下载</a>
```javascript
export default {
  name: 'ChinaRegionSelect',
  state: {
    _provinces: [],
    _cities: [],
    _areas: [],
    province: '', // 当前省
    city: '', // 当前市
    country: '', // 当前区县
    name: '', // 收货人
    nameValid: '', // 收货人有效性
    detailedAddress: '', // 详细地址
    detailAddressValid: '', // 详细地址有效性
    mobile: '', // 手机号码
    mobileValid: '', // 手机号码有效性
    email: '', // 邮箱地址
    nameAlias: '', // 地址别名
    locationTagValue: '', // 已选地址标签
    locationtags: [{  // 地址可选标签
      label: '家',
      value: 'home'
    }, {  
      label: '公司',
      value: 'company'
    }, { 
      label: '学校',
      value: 'scholl'
    }, { 
      label: '外出',
      value: 'outside'
    }],
  },

  computed: {
    provinceList () { // 省直辖市列表
      return this._provinces.map(p => ({ label: p.name, value: p.id}))
    },
    cityList () { // 城市列表
      return this._cities[this.province].map(p => ({ label: p.name, value: p.id}))
    },
    countryList () { // 区县列表
      return (this._areas[this.city] ?? []).map(p => ({ label: p.name, value: p.id}))
    }
  },

  async setup () {
    this._loadData()
  },

  destory () {
  },

  watch: {
    province () {
      this.city = this._cities[this.province][0].id
    },
    city () {
      this.country = this._areas[this.city][0].id
    }
  },

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
    },

    checkValid () { // 执行验证
      this.nameValid = this.name !== ''
      this.detailAddressValid = this.detailedAddress !== ''
      this.mobileValid = /^1[3-9]\d{9}$/.test(this.mobile)
    },

    save() { // 保存
      this.checkValid()
      // 通过后进行提交等动作
    }
  }
}

```