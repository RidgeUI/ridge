import { validateState } from '../props.js'
import CheckBox from './CheckBox.jsx'
import { boolean, string, value, optionConfig } from 'ridge-build/src/props.js'
export default {
  name: 'checkbox',
  title: '多选',
  component: CheckBox,
  icon: 'bi bi-list-check',
  type: 'react',
  props: [
    value('array', '选中', []),
    optionConfig(),
    validateState,
    string('validaMsg', '有效提示', '输入正确'),
    string('invalidMsg', '无效提示', '输入错误'),
    boolean('disabled', '禁用', false),
    boolean('inline', '行模式', false)
  ],
  events: [{
    label: '点击事件',
    name: 'onClick'
  }],
  width: 200,
  height: 64
}