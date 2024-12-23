import Input from './Input'
import { size, status, icon, boolean, disabled, value } from '../utils/props'

export default {
  name: 'input',
  component: Input,
  title: '输入框',
  icon: 'icons/input.svg',
  description: '基础的单行输入功能，可以提供输入状态、图标、附加操作等功能',
  props: [
    value,
    size,
    status,
    disabled,
    boolean('isPassword', '密码框', false),
    boolean('isTextArea', '多行输入', false),
    // icon('prefixIcon', '前置图标'),
    // icon('suffixIcon', '后置图标'),
    {
      label: '空白提示',
      name: 'placeholder',
      type: 'string',
      value: '请输入内容'
    }],
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
