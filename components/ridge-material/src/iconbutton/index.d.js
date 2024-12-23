import IconButton from './IconButton.jsx'
import { boolean, radiogroup, string } from 'ridge-build/src/props.js'
import { btnColor, size, icon } from '../utils.js'

export default {
  name: 'IconButton',
  component: IconButton,
  title: '图标按钮',
  type: 'react',
  icon: 'icons/iconbtn.svg',
  width: 40,
  height: 40,
  props: [
    radiogroup('variant', '样式', [{
      label: '文本',
      value: 'text'
    }, {
      label: '默认',
      value: 'contained'
    }, {
      label: '边框',
      value: 'outlined'
    }]),
    btnColor,
    icon,
    size,
    boolean('disabled', '禁用', false, true)
  ]
}
