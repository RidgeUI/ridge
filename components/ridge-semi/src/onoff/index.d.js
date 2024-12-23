import OnOff from './OnOff.jsx'
import { size } from '../props.js'
import { value, onChange, boolean, string } from 'ridge-build/src/props.js'
export default {
  name: 'onoff',
  title: '开关',
  component: OnOff,
  icon: 'icons/switch.svg',
  type: 'react',
  props: [
    value('boolean', '选中', true),
    size,
    boolean('loading', '加载中', false),
    boolean('disabled', '禁用', false),
    string('checkedText', '选中文字', ''),
    string('uncheckedText', '未选文字', '')
  ],
  events: [
    onChange
  ],
  width: 300,
  height: 40

}
