import { boolean, onChange, value, number, optionConfig, string, radiogroup } from 'ridge-build/src/props.js'
import Switch from './Switch.jsx'
import { color, size } from '../utils.js'
export default {
  name: 'Switch',
  component: Switch,
  title: '切换',
  icon: 'icons/switch.svg',
  type: 'react',
  width: 58,
  height: 38,
  props: [
    value(),
    size,
    color
  ],
  events: [onChange]
}
