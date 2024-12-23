import { boolean, onChange, optionConfig, radiogroup, value } from 'ridge-build/src/props.js'
import CheckBox from './CheckBox.jsx'

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
    radiogroup('direction', '排列', [{
      label: '纵向',
      value: 'vertical'
    }, {
      label: '横向',
      value: 'horizontal'
    }], 'vertical'),
    radiogroup('type', '样式类型', [{
      label: '默认',
      value: 'default'
    }, {
      label: '卡片',
      value: 'card'
    }, {
      label: '纯卡片',
      value: 'pureCard'
    }]),
    boolean('disabled', '禁用', false, true)

  ],
  events: [onChange]
}
