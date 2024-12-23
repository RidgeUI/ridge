import ColumnPolar from './Column.js'
import { chartData, theme } from '../utils/props.js'

export default {
  name: 'ColumnPolar',
  title: '极坐标柱图',
  component: ColumnPolar,
  icon: 'icons/sunburst.svg',
  type: 'vanilla',
  props: [chartData, theme],
  width: 400,
  height: 240
}
