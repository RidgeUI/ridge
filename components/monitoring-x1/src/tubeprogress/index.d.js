import Tube from './Tube.jsx'
import { number } from 'ridge-build/src/props'
export default {
  name: 'Tube',
  component: Tube,
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
      value: 'hsl(133,90%,40%)'
    },
    {
      name: 'faceColor',
      label: '背景色',
      type: 'color',
      value: '#fefefe4f'
    },
    number('percent', '百分比', 30),
    number('grid', '分块数量', 10)
  ]
}
