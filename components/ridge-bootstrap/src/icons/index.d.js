import BootstrapIcon from './BootstrapIcon.jsx'
import { icon } from '../props.js'
import { boolean, classList } from 'ridge-build/src/props.js'
export default {
  name: 'BootstrapIcon',
  title: '图标',
  component: BootstrapIcon,
  icon: 'bi bi-lightbulb',
  type: 'react',
  props: [
    icon,
    boolean('btn', '按钮', false, false),
    classList()
  ],
  events: [{
    label: '点击事件',
    name: 'onClick'
  }],
  width: 120,
  height: 36
}
