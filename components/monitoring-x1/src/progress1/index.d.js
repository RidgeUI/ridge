import Range from './Range.jsx'
import { number } from 'ridge-build/src/props'
export default {
  name: 'Range',
  component: Range,
  title: 'Range',
  icon: 'icons/avatar.svg',
  type: 'react',
  width: 360,
  height: 80,
  props: [
    {
      name: 'color',
      label: '颜色',
      type: 'color',
      value: '#F3E600'
    },
    number('percent', '百分比', 30)
  ]
}
