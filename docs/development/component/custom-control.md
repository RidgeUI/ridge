# 组件属性的自定义配置

目的： 使组件使用Ridge编辑器更方便配置属性

## 自定义属性control配置

为属性增加control字段，值为ES动态引入 () => import()

例如 
```javascript
const icon = {
  name: 'icon',
  label: '图标',
  type: 'string',
  control: () => import('./IconPopSelect.jsx'),
  value: ''
}
```
而jsx文件格式如下

```jsx
import React from 'react'
export default ({
  value,
  onChange
}) => {
  return <div>返回配置内容 {value}</div>
}
```
