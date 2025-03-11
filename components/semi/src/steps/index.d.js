import Steps from './Steps.jsx'
import { direction, size2 } from '../props.js'
import { radiogroup, number, onChange, optionConfig } from 'ridge-build/src/props.js'
export default {
  name: 'steps',
  title: '步骤条',
  component: Steps,
  icon: 'icons/steps.svg',
  type: 'react',
  props: [
    optionConfig('options', '步骤列表'),
    number('current', '当前步骤', 0, true),
    direction,
    size2,
    radiogroup('type', '类型', 'fill basic nav')
  ],
  events: [
    onChange
  ],
  width: 300,
  height: 40

}
