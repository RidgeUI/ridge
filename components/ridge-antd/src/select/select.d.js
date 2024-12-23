import Select from './Select.jsx'
import { boolean, size, value } from '../utils/props.js'
export default {
  name: 'select',
  title: '下拉选择',
  icon: 'icons/select.svg',
  component: Select,
  props: [value, {
    label: '选项',
    name: 'options',
    type: 'json',
    value: [{
      label: '选项1',
      value: 'value1'
    }, {
      label: '选项2',
      value: 'value2'
    }]
  }, boolean('showSearch', '可搜索', false), size, {
    label: '模式',
    name: 'mode',
    type: 'string',
    control: 'radiogroup',
    options: [{
      label: '单选',
      value: 'default'
    }, {
      label: '多选',
      value: 'multiple'
    }, {
      label: '可新增',
      value: 'tags'
    }]
  }],
  events: [{
    label: '输入值变化',
    name: 'onChange'
  }]
}
