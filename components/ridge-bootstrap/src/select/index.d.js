import Select from './Select.jsx'
import { boolean, string, value, radiogroup, optionConfig } from 'ridge-build/src/props.js'
import { validateState, size, disabled } from '../props.js'
export default {
  name: 'Select',
  component: Select,
  title: '下拉选择',
  icon: 'icons/FluentMdl2Dropdown.svg',
  type: 'react',
  props: [
    value(),
    optionConfig('options', '选项'),
    radiogroup('size', '尺寸', size, 'form-control-normal', false),
    boolean('disabled', '禁用', false),
    validateState,
    disabled],
  events: [{
    label: '值改变',
    name: 'onChange'
  }],
  width: 80,
  height: 32
}
