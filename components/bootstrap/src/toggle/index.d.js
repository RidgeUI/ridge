import Toggle from './Toggle.jsx'
import { boolean, string, value } from 'ridge-build/src/props.js'
export default {
  name: 'Toggle',
  title: '切换',
  component: Toggle,
  icon: 'bi bi-toggles',
  type: 'react',
  props: [
    value('boolean', '选中', false),
    string('label', '文本', '切换选择框'),
    boolean('disabled', '禁用', false)
  ],
  events: [{
    label: '点击事件',
    name: 'onClick'
  }],
  width: 200,
  height: 64
}
