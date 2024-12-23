import Input from './Input.jsx'
import { boolean, string, value, classList, radiogroup } from 'ridge-build/src/props.js'
import { size, validateState } from '../props.js'
export default {
  name: 'TextInput',
  title: '单行输入',
  component: Input,
  icon: 'bi bi-input-cursor',
  type: 'react',
  props: [
    value(),
    string('placeholder', '提示信息'),
    validateState,
    boolean('disabled', '禁用', false),
    radiogroup('size', '尺寸', size, 'form-control-normal', false),
    radiogroup('type', '类型', [{
      label: '文本',
      value: 'text'
    }, {
      label: '密码',
      value: 'password'
    }], 'text', false),
    classList()
  ],
  events: [{
    label: '点击事件',
    name: 'onClick'
  }],
  width: 120,
  height: 36
}
