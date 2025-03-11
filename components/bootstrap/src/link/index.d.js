import Link from './Link.jsx'
import { string, classList } from 'ridge-build/src/props.js'
import { icon } from '../props.js'
export default {
  name: 'Link',
  title: '超链接',
  component: Link,
  icon: 'bi bi-link',
  type: 'react',
  props: [
    string('text', '显示内容'),
    string('href', '跳转地址', ''),
    string('target', '目标', ''),
    icon,
    classList()
  ],
  events: [{
    label: '点击事件',
    name: 'onClick'
  }],
  width: 120,
  height: 36
}
