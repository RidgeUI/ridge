import SplitButton from './SplitButton.jsx'
import { size, type, disabled, btnTheme } from '../props'
import { boolean, string, optionConfig } from 'ridge-build/src/props.js'
export default {
  name: 'SplitButton',
  title: '分裂按钮',
  component: SplitButton,
  icon: 'icons/button.svg',
  type: 'react',
  props: [
    string('text', '下拉', '按钮'),
    optionConfig(),
    btnTheme,
    type,
    size
  ],
  events: [{
    name: 'onClick',
    label: '下拉项点击'
  }],
  width: 87,
  height: 32

}
