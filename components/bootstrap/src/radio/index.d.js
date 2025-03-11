import Radio from './Radio.jsx'
import { boolean, string, value, radiogroup, optionConfig } from 'ridge-build/src/props.js'
import { validateState, size, disabled } from '../props.js'
export default {
  name: 'radio',
  component: Radio,
  title: '单选',
  icon: 'bi bi-ui-radios',
  type: 'react',
  props: [
    value(),
    optionConfig(),
    validateState,
    string('validaMsg', '有效提示', '输入正确'),
    string('invalidMsg', '无效提示', '输入错误'),
    boolean('inline', '行模式'),
    boolean('disabled', '禁用', false)
  ],
  events: [{
    label: '值改变',
    name: 'onChange'
  }],
  width: 80,
  height: 32
}
