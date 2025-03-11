import { boolean, onChange, value, number, optionConfig, string, image } from 'ridge-build/src/props.js'
import Avatar from './Avatar.jsx'
import { color, size } from '../utils.js'
export default {
  name: 'Avatar',
  component: Avatar,
  title: '头像',
  icon: 'icons/avatar.svg',
  type: 'react',
  width: 58,
  height: 58,
  props: [
    image(),
    string()
  ],
  events: [onChange]
}
