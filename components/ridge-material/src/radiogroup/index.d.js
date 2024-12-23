import { boolean, onChange, optionConfig, value } from 'ridge-build/src/props.js'
import RadioGroup from './RadioGroup.jsx'
import { color, size } from '../utils.js'
export default {
  name: 'RadioGroup',
  component: RadioGroup,
  title: '单选框',
  icon: 'icons/radio.svg',
  type: 'react',
  width: 260,
  height: 36,
  props: [
    value(),
    optionConfig(),
    boolean('row', '横向', false),
    size,
    color
  ],
  events: [onChange]
}
