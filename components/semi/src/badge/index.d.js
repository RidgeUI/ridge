import Badge from './Badge.jsx'
import { type } from '../props.js'
import { radiogroup, number, onChange, boolean } from 'ridge-build/src/props.js'
export default {
  name: 'badge',
  title: '徽章',
  component: Badge,
  icon: 'icons/badge.svg',
  type: 'react',
  props: [
    boolean('dot', '圆点', false),
    number('count', '数量', 10),
    number('overflowCount', '最大显示', 100),
    type,
    radiogroup('theme', '主题', [{
      label: '浅色',
      value: 'light'
    }, {
      label: '深色',
      value: 'solid'
    }, {
      label: '反转',
      value: 'inverted'
    }])
  ],
  width: 300,
  height: 40

}
