import Chip from './Chip.jsx'
import { boolean, image, radiogroup, string } from 'ridge-build/src/props.js'
import { color, size2, icon } from '../utils.js'

export default {
  name: 'Chip',
  component: Chip,
  title: 'Chip',
  type: 'react',
  icon: 'icons/chip.svg',
  width: 96,
  height: 40,
  props: [
    string('label', '内容', '碎片'),
    color,
    image('avatar', '头像', ''),
    radiogroup('variant', '样式', ['filled', 'outlined']),
    size2,
    icon,
    boolean('clickable', '可点击', false),
    boolean('deletable', '可删除', false)
  ],
  events: [{
    name: 'onDelete',
    label: '点击删除'
  }, {
    name: 'onClick',
    label: '点击'
  }]
}
