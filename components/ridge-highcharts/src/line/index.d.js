import LineChart from './LineChart'
import { chartData, theme } from '../utils/props'
import { boolean } from 'ridge-build/src/props'

export default {
  name: 'LineChart',
  title: '曲线图',
  icon: 'icons/chart-line.svg',
  component: LineChart,
  type: 'vanilla',
  props: [chartData, theme, boolean('isArea', '面积图', false)],
  width: 400,
  height: 240
}