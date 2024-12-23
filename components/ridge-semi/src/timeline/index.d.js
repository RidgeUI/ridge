import { event, onClick } from '../../../../core/tools/src/props.js'
import { color } from '../props.js'
import Timeline from './Timeline.jsx'
export default {
  name: 'Timeline',
  title: '标签',
  component: Timeline,
  icon: 'icons/timeline.svg',
  type: 'react',
  props: [{
    label: '文本',
    name: 'text',
    type: 'string',
    connect: true,
    value: '标签'
  }, {
    label: '可关闭',
    name: 'closable',
    type: 'boolean'
  }, {
    label: '大小',
    name: 'size',
    type: 'string',
    options: [{
      label: '小',
      value: 'small'
    }, {
      label: '大',
      value: 'large'
    }],
    control: 'radiogroup',
    value: 'small'
  }, color],
  events: [
    onClick,
    event('onClose', '关闭')
  ],
  width: 64,
  height: 32
}
