import Pie from './Pie'
import { theme, chartData } from '../utils/props'
import { boolean } from 'ridge-build/src/props'

export default {
  name: 'Pie',
  title: '饼图',
  component: Pie,
  icon: 'icons/pie.svg',
  type: 'vanilla',
  props: [
    chartData, theme,
    boolean('showLabel', '显示标签', false)
  ],
  width: 320,
  height: 320
}
