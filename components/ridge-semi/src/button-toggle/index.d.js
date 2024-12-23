import ButtonToggle from './ButtonToggle.jsx'
import { size, type, disabled, icon } from '../props'
import { boolean, string, onClick, radiogroup, value, onChange } from 'ridge-build/src/props.js'
export default {
  name: 'ButtonToggle',
  title: '切换按钮',
  component: ButtonToggle,
  icon: 'icons/button.svg',
  type: 'react',
  props: [
    value('boolean', '选中', false),
    string('text', '文本', '切换'),
    icon,
    size
  ],
  events: [onChange],
  width: 54,
  height: 32

}
