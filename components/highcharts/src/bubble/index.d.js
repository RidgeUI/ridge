import Bubble from './Bubble.js'
import { chartData, theme } from '../utils/props.js'
export default {
  name: 'Bubble',
  title: '气泡图',
  component: Bubble,
  icon: 'icons/bubble.svg',
  type: 'vanilla',
  props: [chartData, theme],
  externals: [
    '/highcharts/highcharts-more.js'
  ],
  width: 200,
  height: 200
}
