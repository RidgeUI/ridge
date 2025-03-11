import Icon from './Icon'
import { icon } from '../utils/props.js'

export default {
  name: 'icon',
  title: '图标',
  component: Icon,
  icon: 'icons/Icon.svg',
  type: 'react',
  props: [
    icon, {
      name: 'size',
      label: '大小',
      type: 'number',
      value: 24
    }, {
      name: 'color',
      label: '颜色',
      type: 'color',
      value: '#eb2f96'
    }, {
      name: 'spin',
      label: '旋转动画',
      type: 'boolean',
      value: false
    }, {
      name: 'rotate',
      label: '角度',
      type: 'number',
      value: 0
    }
  ],
  events: [{
    label: '单击事件',
    name: 'onClick'
  }],
  width: 32,
  height: 32
}
