import { boolean, onChange, value, number, optionConfig, string, radiogroup } from 'ridge-build/src/props.js'
import Select from './Select.jsx'
import { size,variant } from '../utils.js'
export default {
  name: 'Select',
  component: Select,
  title: '选择',
  icon: 'icons/select.svg',
  type: 'react',
  width: 260,
  height: 36,
  props: [
    value(),
    string('label', '标签', '请选择'),
    variant,
    optionConfig(),
    size,
    boolean('readonly', '只读', false),
    boolean('error', '错误', false)
  ],
  events: [onChange]
}
