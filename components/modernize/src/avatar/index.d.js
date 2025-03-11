import Avatar from './Avatar.jsx'
import { string, classList, image } from 'ridge-build/src/props.js'
export default {
  name: 'Avatar',
  title: '头像',
  component: Avatar,
  icon: 'bi bi-person-circle',
  type: 'react',
  props: [
    string('text', '文本'),
    image(),
    classList()
  ],
  events: [{
    label: '点击事件',
    name: 'onClick'
  }],
  width: 64,
  height: 64
}
