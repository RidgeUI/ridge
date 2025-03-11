import ProgressBox from './ProgressBox.jsx'
import { number } from 'ridge-build/src/props'
export default {
  name: 'ProgressBox',
  component: ProgressBox,
  title: '头像',
  icon: 'icons/avatar.svg',
  type: 'react',
  width: 360,
  height: 80,
  props: [
    {
      name: 'color',
      label: '颜色',
      type: 'color',
      value: '#ec008cbd'
    },
    {
      name: 'faceColor',
      label: '背景色',
      type: 'color',
      value: '#fefefe4f'
    },
    number('width', '百分比', 30),
    number('fontSize', '粗细', 10)
  ]
}
