import InputNumber from './InputNumber.jsx'
import { size } from '../props'
import { boolean, value, number } from 'ridge-build/src/props.js'
export default {
  name: 'InputNumber',
  title: '数字输入',
  component: InputNumber,
  icon: 'icons/input-number.svg',
  type: 'react',
  props: [
    value(),
    size,
    boolean('disabled', '禁用', false),
    boolean('innerButtons', '内部按钮', true),
    number('min', '最小值', 0),
    number('max', '最大值', 0)
  ],
  width: 300,
  height: 40

}
