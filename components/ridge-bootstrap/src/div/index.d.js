import Div from './Div.jsx'
import { string, classList, image } from 'ridge-build/src/props.js'
export default {
  name: 'Div',
  title: '矩形',
  component: Div,
  icon: 'bi bi-aspect-ratio',
  type: 'react',
  props: [
    string('text', '文本'),
    image('mask', '遮罩'),
    classList()
  ],
  events: [{
    label: '点击事件',
    name: 'onClick'
  }],
  width: 160,
  height: 120
}
