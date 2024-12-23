import { radiogroup, select } from 'ridge-build/src/props.js'

const size = radiogroup('size', '尺寸', [{
  label: '大',
  value: 'large'
}, {
  label: '默认',
  value: 'default'
}, {
  label: '小',
  value: 'small'
}], 'default')

const btnColor = radiogroup('color', '颜色', [{
  label: '默认',
  value: 'default'
}, {
  label: '首要',
  value: 'primary'
}, {
  label: '危险',
  value: 'danger'
}], 'primary')

const btnVariant = select('variant', '变体', [{
  label: '默认',
  value: 'solid'
}, {
  label: '细边',
  value: 'outlined'
}, {
  label: '浅色',
  value: 'filled'
}, {
  label: '文本',
  value: 'text'
}, {
  label: '链接',
  value: 'link'
}], 'solid')

const icon = {
  name: 'icon',
  label: '图标',
  type: 'string',
  control: () => import('./IconPopSelect.jsx'),
  value: ''
}

const boolean = (name = 'boolean', label = '布尔', defaultValue = true) => {
  return {
    name,
    label,
    type: 'boolean',
    value: defaultValue
  }
}

const number = (name = 'number', label = '数字', defaultValue = 0, connect) => {
  return {
    name,
    label,
    type: 'number',
    connect,
    value: defaultValue
  }
}

const status = {
  label: '校验状态',
  name: 'status',
  type: 'string',
  value: 'noraml',
  control: 'radiogroup',
  connect: true,
  optionList: [{
    label: '正常',
    value: 'normal'
  }, {
    label: '错误',
    value: 'error'
  }, {
    label: '警告',
    value: 'warning'
  }]
}

const value = {
  name: 'value',
  label: '取值',
  type: 'string',
  connect: true,
  value: ''
}

const disabled = {
  name: 'disabled',
  label: '禁用',
  type: 'boolean',
  value: false
}

export { size, btnColor, btnVariant, status, icon, boolean, disabled, number, value }
