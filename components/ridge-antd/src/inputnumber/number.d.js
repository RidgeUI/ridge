import InputNumber from './InputNumber'
import { size, status, icon, disabled, number } from '../utils/props'

export default {
  name: 'input',
  component: InputNumber,
  title: '数字输入',
  icon: 'icons/number.svg',
  description: '提供数字类型内容输入',
  props: [
    number('value', '取值', 0, true),
    number('precision', '小数位'),
    size,
    status,
    disabled
    // icon('prefixIcon', '前置图标')
  ],
  events: [{
    label: '输入值变化',
    name: 'onChange'
  }, {
    label: '按下回车键',
    name: 'onPressEnter'
  }],
  externals: ['index.umd.min.js'],
  width: 240,
  height: 32
}
