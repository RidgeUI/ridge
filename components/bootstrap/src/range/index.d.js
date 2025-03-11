import { boolean, classList, number, string } from 'ridge-build/src/props.js'
import Range from './Range.jsx'

export default {
  name: 'range',
  component: Range,
  title: '范围',
  icon: 'bi bi-sliders',
  type: 'react',
  props: [
    string('value', '取值', 10, true),
    number('min', '最小值', 0, true),
    number('max', '最大值', 100, true),
    number('step', '步长', 1, true),
    boolean('disabled', '禁用', false, true),
    classList()
  ],
  events: [{
    label: '点击事件',
    name: 'onClick'
  }],
  width: 80,
  height: 32
}
