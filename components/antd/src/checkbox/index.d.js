import Checkbox from './Checkbox.jsx'

export default {
  name: 'checkbox',
  title: '多选框',
  icon: 'icons/checkbox.svg',
  description: '在一组可选项中进行多项选择，或者表示两种状态之间的切换',
  component: Checkbox,
  props: [{
    name: 'value',
    label: '选中',
    type: 'object',
    connect: true
  }, {
    name: 'group',
    label: '多选模式',
    type: 'boolean',
    value: false
  }, {
    name: 'label',
    label: '切换文本',
    type: 'string',
    value: '复选框'
  }, {
    name: 'options',
    label: '选项',
    type: 'object',
    value: [{ label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' }],
    connect: true
  }, {
    name: 'disabled',
    label: '禁用',
    type: 'boolean',
    value: false
  }, {
    name: 'indeterminate',
    label: '部分选中',
    type: 'boolean',
    value: false
  }],
  width: 240,
  height: 32
}
