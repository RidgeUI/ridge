import Progress from './Progress.jsx'
import { boolean, radiogroup, string, value, number } from 'ridge-build/src/props.js'
import { btnColor, size, icon, color } from '../utils.js'

export default {
  name: 'Progress',
  component: Progress,
  title: '进度条',
  type: 'react',
  icon: 'icons/progress.svg',
  width: 80,
  height: 80,
  props: [
    boolean('circular', '圆形', false),
    boolean('determinate', '固定进度', false),
    value('number'),
    number('valueBuffer', '缓存进度', 0),
    color,
    boolean('withLabel', '显示进度')
  ]
}
