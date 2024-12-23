import Badge from './Badge.jsx'
import { boolean, string, icon, classList } from 'ridge-build/src/props.js'
import { type } from '../props.js'
export default {
  name: 'badge',
  component: Badge,
  title: '标签',
  icon: 'bi bi-patch-exclamation-fill',
  type: 'react',
  props: [
    type,
    string('text', '文本', '标签'),
    boolean('pill', '圆形', false),
    boolean('showClose', '可关闭', false),
    icon(),
    classList()
  ],
  events: [{
    label: '点击',
    name: 'onClick'
  }, {
    label: '关闭',
    name: 'onClose'
  }],
  width: 44,
  height: 20
}
