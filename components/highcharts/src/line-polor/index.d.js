import LinePolor from './LinePolor'
import { chartData, theme } from '../utils/props'
import { boolean } from 'ridge-build/src/props'

export default {
  name: 'LinePolor',
  title: '蛛网图',
  icon: 'icons/chart-line.svg',
  component: LinePolor,
  type: 'vanilla',
  props: [chartData, theme, boolean('isArea', '面积图', false)],
  width: 400,
  height: 240
}
