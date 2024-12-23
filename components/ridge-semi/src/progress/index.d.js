import { number, radiogroup } from 'ridge-build/src/props.js'
import Progress from './Progress.jsx'
import { color, colorStage, direction } from '../props.js'
export default {
  name: 'progress',
  title: '进度条',
  component: Progress,
  icon: 'icons/progress.svg',
  type: 'react',
  props: [
    number('percent', '进度', 75),
    color,
    colorStage,
    radiogroup('type', '类型', [{
      label: '线',
      value: 'line'
    }, {
      label: '圆',
      value: 'circle'
    }], 'line'),
    direction
  ],
  width: 300,
  height: 52
}
