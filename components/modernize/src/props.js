import { radiogroup } from 'ridge-build/src/props.js'
const size = [{
  label: '大',
  value: 'lg'
}, {
  label: '正常',
  value: 'normal'
}, {
  label: '小',
  value: 'sm'
}]

const validateState = radiogroup('validState', '验证状态', [{
  label: '有效',
  value: true
}, {
  label: '无效',
  value: false
}, {
  label: '无',
  value: ''
}], '')

const icon = {
  name: 'icon',
  label: '图标',
  type: 'string',
  value: 'question-circle',
  control: () => import('./icons/IconSelect.jsx'),
  connect: true
}

const src = {
  name: 'src',
  type: 'image',
  label: '地址',
  connect: true,
  value: ''
}

const funcList = [{
  label: '主要',
  value: 'primary'
},
{
  label: '次要',
  value: 'secondary'
},
{
  label: '成功',
  value: 'success'
},
{
  label: '危险',
  value: 'danger'
},
{
  label: '警告',
  value: 'warning'
},
{
  label: '信息',
  value: 'info'
}]

const funType = {
  name: 'type',
  label: '类型',
  type: 'string',
  control: 'select',
  value: 'primary',
  optionList: funcList
}

const type = {
  name: 'type',
  label: '类型',
  type: 'string',
  control: 'select',
  value: 'primary',
  optionList: [
    ...funcList,
    {
      label: '亮',
      value: 'light'
    },
    {
      label: '暗',
      value: 'dark'
    }]
}

const style = {
  name: 'classNames',
  label: '样式',
  type: 'style'
}
const disabled = {
  name: 'disabled',
  label: '禁用',
  width: '50%',
  connect: true,
  type: 'boolean',
  value: false
}

const value = (type) => {
  return {
    name: 'value',
    label: '取值',
    connect: true,
    type: 'string',
    value: ''
  }
}

export {
  src,
  icon,
  value,
  disabled,
  funcList,
  type,
  validateState,
  funType,
  size,
  style
}
