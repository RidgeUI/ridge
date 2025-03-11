import ColumnMini from './ColumnMini'
import { chartData, theme } from '../utils/props'

export default {
  name: 'ColumnMini',
  title: '迷你柱状图',
  component: ColumnMini,
  icon: 'icons/chart-column-mini.svg',
  type: 'vanilla',
  props: [chartData, theme],
  width: 400,
  height: 240
}
