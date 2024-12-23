import { boolean, onChange, value, number, optionConfig, string, radiogroup } from 'ridge-build/src/props.js'
import Slider from './Slider.jsx'
import { color, orientation, size } from '../utils.js'
export default {
  name: 'Slider',
  component: Slider,
  title: '滑块',
  icon: 'icons/slider.svg',
  type: 'react',
  width: 260,
  height: 36,
  props: [
    value(),
    size,
    color,
    orientation,
  ],
  events: [onChange]
}
