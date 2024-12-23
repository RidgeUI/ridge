import Popover from './Popover.jsx'
import { string, classList, radiogroup } from 'ridge-build/src/props.js'
import { icon } from '../props.js'
export default {
  name: 'Popover',
  title: '提示',
  component: Popover,
  icon: 'bi bi-info-circle',
  type: 'react',
  props: [
    string('content', '提示', '这是一段鼠标上浮提示内容'),
    icon,
    radiogroup('placement', '位置', [{
      label: '上',
      value: 'top'
    }, {
      label: '下',
      value: 'bottom'
    }, {
      label: '左',
      value: 'left'
    }, {
      label: '右',
      value: 'right'
    }], 'top'),
    classList()
  ],
  externals: [
    '/bootstrap/dist/js/bootstrap.bundle.min.js'
  ],
  events: [],
  width: 36,
  height: 36
}
