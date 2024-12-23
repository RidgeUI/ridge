import { boolean, onChange, optionConfig, radiogroup, value } from 'ridge-build/src/props.js'
import CheckBox from './CheckBox.jsx'
import { color, size } from '../utils.js'
export default {
  name: 'CheckBox',
  component: CheckBox,
  title: '复选框',
  icon: 'icons/checkbox.svg',
  type: 'react',
  width: 260,
  height: 36,
  props: [
    value('array', '已选择', []),
    optionConfig(),
    size,
    color,
    boolean('row', '横向', false),
    radiogroup('type', '样式类型', [{
      label: '默认',
      value: 'default'
    }, {
      label: '卡片',
      value: 'card'
    }, {
      label: '纯卡片',
      value: 'pureCard'
    }])
  ],
  events: [onChange]
}
