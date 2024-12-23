import MiniLine from './MiniLine'
import { theme, chartData } from '../utils/props'
import { boolean } from 'ridge-build/src/props'
export default {
  name: 'MiniLine',
  title: '迷你线图',
  component: MiniLine,
  icon: 'icons/chart-line-min.svg',
  type: 'vanilla',
  props: [chartData, theme, boolean('isArea', '面积图', false)],
  width: 400,
  height: 240
}
