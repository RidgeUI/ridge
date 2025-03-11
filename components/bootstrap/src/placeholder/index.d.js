import Placeholder from './Placeholder.js'
import { type } from '../props.js'
import { radiogroup } from 'ridge-build/src/props.js'
export default {
  name: 'Placeholder',
  component: Placeholder,
  title: '占位块',
  icon: 'bi bi-stop-fill',
  type: 'react',
  props: [
    type,
    radiogroup('animation', '动画', [{
      label: '无',
      value: ''
    }, {
      label: '呼吸',
      value: 'glow'
    }, {
      label: '波浪',
      value: 'wave'
    }])
  ],
  events: [],
  width: 320,
  height: 80
}
