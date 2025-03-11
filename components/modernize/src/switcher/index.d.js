import Switch from './Switch.jsx'
import { radiogroup, string, value } from 'ridge-build/src/props.js'
import { funcList } from '../props.js'
export default {
  name: 'Switch',
  title: '切换',
  component: Switch,
  icon: 'bi bi-toggle-off',
  type: 'react',
  props: [
    value('boolean', '选中', false, true),
    string('text', '文本', '切换', true),
    radiogroup('color', '颜色', funcList, 'primary', false)
  ],
  events: [{
    label: '改变事件',
    name: 'onChange'
  }],
  width: 240,
  height: 36
}
