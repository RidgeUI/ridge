import Combinations from './Combinations.js'
import { chartData, theme } from '../utils/props'

export default {
  name: 'ColumnLine',
  title: '混合图',
  icon: 'icons/combinations.svg',
  component: Combinations,
  type: 'vanilla',
  props: [chartData, theme],
  width: 400,
  height: 240
}
