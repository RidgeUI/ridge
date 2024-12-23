import MobileStepper from './MobileStepper.jsx'
import { boolean, json, number, radiogroup, string, value } from 'ridge-build/src/props.js'
import { btnColor, btnVariant, size, icon } from '../utils.js'

export default {
  name: 'MobileStepper',
  component: MobileStepper,
  title: '点导航',
  type: 'react',
  icon: 'icons/dots.svg',
  width: 180,
  height: 56,
  props: [
    value('number', '当前', 2),
    number('steps', '步骤数', 8),
    radiogroup('variant', '样式', [{
      label: '点',
      value: 'dots'
    }, {
      label: '进度',
      value: 'progress'
    }])
  ]
}
