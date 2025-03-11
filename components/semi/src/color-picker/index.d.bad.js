import { onChange, value } from 'ridge-build/src/props.js'
import ColorPicker from './ColorPicker.jsx'

export default {
  name: 'ColorPicker',
  component: ColorPicker,
  title: '颜色输入',
  icon: 'icons/color-platte-new',
  type: 'react',
  width: 260,
  height: 40,
  props: [
    value('string', '颜色', '#39c5bb')
  ],
  events: [
    onChange
  ]
}
