import { optionConfig, radiogroup, value } from 'ridge-build/src/props.js'
import { direction, size } from '../props.js'
import Tabs from './Tabs.jsx'
export default {
  name: 'Tabs',
  title: '标签栏',
  component: Tabs,
  icon: 'icons/tabs.svg',
  order: 4,
  type: 'react',
  props: [
    value(),
    optionConfig('tabs', '标签项'),
    size,
    radiogroup('type', '类型', [{
      label: '线性',
      value: 'line'
    }, {
      label: '按钮',
      value: 'button'
    }, {
      label: '卡片',
      value: 'card'
    }], 'line'),
    direction
  ],
  width: 300,
  height: 52
}
