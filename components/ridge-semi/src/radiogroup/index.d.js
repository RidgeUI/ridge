import { onChange, optionConfig, radiogroup, value } from 'ridge-build/src/props.js'
import Radiogroup from './Radiogroup.jsx'

export default {
  name: 'Radiogroup',
  component: Radiogroup,
  title: '单选框',
  icon: 'icons/radio.svg',
  type: 'react',
  width: 260,
  height: 36,
  props: [
    value(),
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
      label: '按钮',
      value: 'button'
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
