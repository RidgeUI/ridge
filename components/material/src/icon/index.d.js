import { boolean, onChange, value, number, optionConfig, string, radiogroup } from 'ridge-build/src/props.js'
import Icon from './Icon.jsx'
import { color, icon } from '../utils.js'
export default {
  name: 'Icon',
  component: Icon,
  title: '图标',
  icon: 'icons/icon.svg',
  type: 'react',
  width: 48,
  height: 48,
  props: [
    icon,
    number('fontSize', '大小', 20),
    color
  ],
  events: []
}
