import Slider from './Slider.jsx'
import { size } from '../props.js'
import { value, radiogroup, number, onChange, boolean } from 'ridge-build/src/props.js'
export default {
  name: 'Slider',
  title: '滑动选择',
  component: Slider,
  icon: 'icons/slider.svg',
  type: 'react',
  props: [
    value('number'),
    size,
    number('min', '最小值', 0),
    number('max', '最大值', 100),
    number('step', '步长', 1),
    radiogroup('direction', '方向', [{
      label: '垂直',
      value: 'vertical'
    }, {
      label: '水平',
      value: 'horizontal'
    }], 'horizontal'),
    boolean('disabled', '禁用', false)
  ],
  events: [
    onChange
  ],
  width: 300,
  height: 40

}
