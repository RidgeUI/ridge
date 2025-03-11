import RoseChart from './RoseChart'
import { theme, chartData } from '../utils/props'
import { boolean } from 'ridge-build/src/props'

export default {
  name: 'RoseChart',
  title: '玫瑰图',
  component: RoseChart,
  icon: 'icons/rose-chart.svg',
  type: 'vanilla',
  props: [chartData, theme, boolean('showLabel', '显示标签', false)],
  externals: [
    '/highcharts/modules/variable-pie.js'
  ],
  width: 320,
  height: 320
}
