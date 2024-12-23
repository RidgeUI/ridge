import ColumnBar from './ColumnBar'
import { chartData, theme } from '../utils/props'

export default {
  name: 'ColumnBar',
  title: '条形图',
  order: 4,
  component: ColumnBar,
  icon: 'icons/column-bar.svg',
  type: 'vanilla',
  props: [chartData, theme],
  width: 400,
  height: 240
}
