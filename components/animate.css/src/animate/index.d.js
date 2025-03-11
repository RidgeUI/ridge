import Animate from './Animate.jsx'
import { classList, number, slot } from 'ridge-build/src/props.js'
export default {
  name: 'Animate',
  title: '动画容器',
  component: Animate,
  icon: 'icons/CarbonContainerRegistry.svg',
  type: 'react',
  props: [
    slot('child'),
    number('repeat', '重复次数', 1),
    number('delay', '延迟毫秒', 0),
    number('duration', '持续毫秒', 1000),
    classList()
  ],
  width: 120,
  height: 120
}
