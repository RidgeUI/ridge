import Input from './Input.jsx'
import { icon, size, validateStatus } from '../props'
import { boolean, value, classList, radiogroup } from 'ridge-build/src/props.js'
export default {
  name: 'input',
  title: '输入框',
  component: Input,
  icon: 'icons/input.svg',
  type: 'react',
  props: [
    value(),
    size,
    validateStatus,
    icon,
    boolean('password', '密码模式', false),
    boolean('disabled', '禁用', false),
    boolean('showClear', '可清空', true)
  ],
  width: 300,
  height: 40

}
