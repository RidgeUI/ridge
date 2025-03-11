import Menu from './Menu.jsx'
import { boolean, json, optionConfig, radiogroup, string } from 'ridge-build/src/props.js'
import { btnColor, size, icon, btnVariant } from '../utils.js'

export default {
  name: 'Menu',
  component: Menu,
  title: '菜单',
  type: 'react',
  icon: 'icons/dropdown-menu.svg',
  width: 80,
  height: 40,
  props: [
    string('text', '按钮文本', '下拉'),
    btnVariant,
    btnColor,
    size,
    icon,
    json('options', '项配置', [])
  ]
}
