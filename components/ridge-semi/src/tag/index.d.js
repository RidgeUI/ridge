import { event, onClick, color as customColor } from 'ridge-build/src/props.js'
import { color, tagTheme, type } from '../props.js'
import Tag from './Tag.jsx'
export default {
  name: 'Tag',
  title: '标签',
  component: Tag,
  icon: 'icons/tag.svg',
  order: 4,
  type: 'react',
  props: [{
    label: '文本',
    name: 'text',
    type: 'string',
    connect: true,
    value: '标签'
  }, tagTheme, {
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
  }, color, {
    label: '自定义颜色',
    name: 'customColor',
    type: 'string',
    connect: true
  }],
  events: [
    onClick,
    event('onClose', '关闭')
  ],
  width: 64,
  height: 32
}
