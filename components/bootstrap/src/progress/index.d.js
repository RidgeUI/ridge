import { funType } from '../props.js'
import Progress from './Progress.jsx'
import { boolean, string, value } from 'ridge-build/src/props.js'

export default {
  name: 'Progress',
  title: '进度条',
  component: Progress,
  icon: 'bi bi-usb',
  type: 'react',
  props: [value('number'),
    string('text', '显示内容'),
    funType,
    boolean('striped', '条纹', false, false),
    boolean('animated', '动画', false, false)
  ],
  events: [],
  width: 120,
  height: 20
}
