import TextArea from './TextArea.jsx'
import { string, value, number, boolean, radiogroup } from 'ridge-build/src/props.js'
import { type, size, style } from '../props.js'

export default {
  name: 'TextInput',
  title: '多行输入',
  component: TextArea,
  icon: 'bi bi-textarea-resize',
  type: 'react',
  props: [value,
    number('rows', '行数', 3),
    string('placeholder', '提示信息', '', true),
    {
      name: 'validState',
      label: '验证',
      connect: true,
      type: 'radiogroup',
      options: [{
        label: '有效',
        value: true
      }, {
        label: '无效',
        value: false
      }, {
        label: '无',
        value: null
      }],
      value: null
    },
    radiogroup('size', '尺寸', size, 'form-control-normal', false),
    string('validMsg', '有效提示', '', true),
    string('invalidMsg', '无效提示', '请检查输入项是否有效', true),
    boolean('disabled', '禁用', false, true),
    style],
  events: [{
    label: '点击事件',
    name: 'onClick'
  }],
  width: 80,
  height: 40
}
