import { classList, number } from 'ridge-build/src/props.js'
import { color, icon } from '../props.js'
import Icon from './Icon.jsx'

export default {
  name: 'icon',
  title: '图标',
  icon: 'icons/icon.svg',
  component: Icon,
  type: 'react',
  width: 40,
  height: 40,
  props: [icon, color, number('size', '大小', 18), classList()]
}
