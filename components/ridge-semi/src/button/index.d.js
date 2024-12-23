import Button from './Button.jsx'
import { size, disabled, icon, btnTheme, btnType } from '../props'
import { boolean, string, onClick, radiogroup, number } from 'ridge-build/src/props.js'
export default {
  name: 'button',
  title: '按钮',
  component: Button,
  icon: 'icons/button.svg',
  order: 4,
  type: 'react',
  props: [
    string('text', '文本', '按钮'),
    icon,
    btnType,
    size,
    btnTheme,
    disabled,
    number('iconSize', '大小', 18),
    boolean('loading', '加载中', false)
  ],
  events: [onClick],
  width: 54,
  height: 32

}
