import Textarea from './Textarea.jsx'
import { validateStatus } from '../props'
import { boolean, value, number } from 'ridge-build/src/props.js'
export default {
  name: 'Textarea',
  title: '多行输入',
  component: Textarea,
  icon: 'icons/input.svg',
  type: 'react',
  props: [
    value(),
    validateStatus,
    number('maxCount', '计数', 0),
    number('rows', '行数', 4),
    boolean('disabled', '禁用', false),
    boolean('showClear', '可清空', true)
  ],
  width: 300,
  height: 40

}
