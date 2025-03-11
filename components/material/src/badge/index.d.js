import Badge from './Badge.jsx'
import { boolean, radiogroup, string } from 'ridge-build/src/props.js'
import { btnColor, size, icon } from '../utils.js'

export default {
  name: 'Badge',
  component: Badge,
  title: '圆点',
  type: 'react',
  icon: 'icons/badge.svg',
  width: 40,
  height: 40,
  props: [
    string('text', '内容', ' '),
    btnColor,
    boolean('dot', '圆点', false)
  ]
}
