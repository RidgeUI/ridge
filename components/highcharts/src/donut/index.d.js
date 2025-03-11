import DonutChart from './DonutChart.js'
import { chartData, theme } from '../utils/props.js'
import { boolean, number } from 'ridge-build/src/props.js'
export default {
  name: 'DonutChart',
  title: '环形图',
  component: DonutChart,
  icon: 'icons/donut.svg',
  type: 'vanilla',
  props: [chartData,
    theme,
    boolean('showLabel', '显示标签', false),
    number('innerSize', '内径', 75)
  ],
  width: 200,
  height: 200
}
