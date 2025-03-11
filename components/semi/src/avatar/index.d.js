import Avatar from './Avatar.jsx'
import { color, icon, size } from '../props.js'
import { value, radiogroup, boolean, select, image, string, onClick } from 'ridge-build/src/props.js'
export default {
  name: 'avatar',
  title: '头像',
  component: Avatar,
  icon: 'icons/avatar.svg',
  type: 'react',
  props: [
    select('size', '尺寸', ['extra-extra-small', 'extra-small', 'small', 'default', 'medium', 'large', 'extra-large']),
    radiogroup('shape', '形状', [{
      label: '方',
      value: 'square'
    }, {
      label: '圆',
      value: 'circle'
    }]),
    image(),
    string('text', '文本', 'A'),
    color,
    Object.assign({}, color, { name: 'borderColor', label: '边框颜色' }),
    boolean('contentMotion', '边框特效', false),
    string('topLabel', '顶部描述', ''),
    boolean('bottomPlus', '加号', false)
  ],
  events: [
    onClick
  ],
  width: 300,
  height: 40

}
