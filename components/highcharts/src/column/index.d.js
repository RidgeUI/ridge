import Column from './Column'
import { chartData, theme } from '../utils/props.js'

export default {
  name: 'Column',
  title: '柱状图',
  component: Column,
  icon: 'icons/chart-column.svg',
  type: 'vanilla',
  props: [chartData, theme],
  width: 400,
  height: 240
}
