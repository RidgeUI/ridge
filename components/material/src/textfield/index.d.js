import { boolean, onChange, value, number, optionConfig, string, radiogroup } from 'ridge-build/src/props.js'
import TextField from './TextField.jsx'
import { size2, variant } from '../utils.js'
export default {
  name: 'TextField',
  component: TextField,
  title: '文本框',
  icon: 'icons/input.svg',
  type: 'react',
  width: 200,
  height: 48,
  props: [
    value(),
    string('label', '标签', '请选择'),
    variant,
    size2,
    boolean('required', '必填', false),
    boolean('readonly', '只读', false),
    boolean('autoFocus', '自动聚焦', false),
    boolean('error', '错误', false)
  ],
  events: [onChange]
}
