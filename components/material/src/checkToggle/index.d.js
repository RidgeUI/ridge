import { onChange, value } from 'ridge-build/src/props.js'
import CheckToggle from './CheckToggle.jsx'
import { color, size } from '../utils.js'
export default {
  name: 'CheckToggle',
  component: CheckToggle,
  title: '切换选框',
  icon: 'icons/checkbox.svg',
  type: 'react',
  width: 64,
  height: 64,
  props: [
    value('boolean', '选中', false),
    size,
    color
  ],
  events: [onChange]
}
