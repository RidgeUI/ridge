import Button from './Button.jsx'
import { boolean, onClick, radiogroup, string } from 'ridge-build/src/props.js'
import { btnColor, btnVariant, size, icon } from '../utils.js'

export default {
  name: 'Button',
  component: Button,
  title: '按钮',
  type: 'react',
  icon: 'icons/button.svg',
  width: 64,
  height: 40,
  props: [
    string('text', '按钮', '按钮', true),
    btnVariant,
    btnColor,
    icon,
    size,
    boolean('disabled', '禁用', false, true)
  ],
  events: [
    onClick
  ]
}
