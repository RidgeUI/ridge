import Banner from './Banner.jsx'
import { icon, size, validateStatus } from '../props.js'
import { boolean, value, classList, radiogroup } from 'ridge-build/src/props.js'
export default {
  name: 'banner',
  title: '横幅',
  component: Banner,
  icon: 'icons/banner.svg',
  type: 'react',
  props: [
    value(),
    size,
    validateStatus,
    icon,
    boolean('password', '密码模式', false),
    boolean('disabled', '禁用', false),
    boolean('showClear', '可清空', true)
  ],
  width: 300,
  height: 40

}
