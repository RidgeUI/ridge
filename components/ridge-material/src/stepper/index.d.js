import Stepper from './Stepper.jsx'
import { boolean, json, radiogroup, string, value } from 'ridge-build/src/props.js'
import { btnColor, btnVariant, size, icon } from '../utils.js'

export default {
  name: 'Stepper',
  component: Stepper,
  title: '步骤条',
  type: 'react',
  icon: 'icons/steps.svg',
  width: 450,
  height: 56,
  props: [
    value('number', '当前', 1),
    json('steps', '步骤', [{
      label: 'Finished',
      optional: false
    }, {
      label: 'In Progress',
      optional: 'Are you OK',
      completed: true
    }, {
      label: 'Waiting',
      optional: false
    }], true),
    boolean('vertical', '纵向', false)
  ]
}
