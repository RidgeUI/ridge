import { boolean, onChange, optionConfig, value } from 'ridge-build/src/props.js'
import Select from './Select.jsx'
import { size, validateStatus } from '../props'
export default {
  name: 'Select',
  component: Select,
  title: '下拉选择',
  icon: 'icons/select.svg',
  type: 'react',
  width: 260,
  height: 36,
  props: [
    value(),
    optionConfig(),
    size,
    boolean('multiple', '可多选', false),
    boolean('showClear', '可清空', true),
    boolean('filter', '可筛选', false),
    boolean('disabled', '禁用', false),
    validateStatus
  ],
  events: [onChange]
}
