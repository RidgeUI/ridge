import { json, number, optionConfig, radiogroup, select, string } from 'ridge-build/src/props.js'
import Popover from './Popover.jsx'
import { color, icon } from '../props.js'
export default {
  name: 'Popover',
  title: '气泡提示',
  component: Popover,
  icon: 'icons/popover.svg',
  type: 'react',
  props: [
    string('text', '提示内容', '这里是气泡提示内容', true),
    icon, color, number('size', '大小', 18),
    select('position', '位置', ['topLeft', 'top', 'topRight', 'leftTop', 'left', 'leftBottom', 'rightTop', 'right', 'rightBottom', 'bottomLeft', 'bottom', 'bottomRight'])
  ],
  width: 300,
  height: 52
}
