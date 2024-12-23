import TimePicker from './TimePicker.jsx'
import { size } from '../props.js'
import { value, radiogroup, number, onChange, boolean } from 'ridge-build/src/props.js'
export default {
  name: 'TimePicker',
  title: '时间选择',
  component: TimePicker,
  icon: 'icons/time-picker.svg',
  type: 'react',
  props: [
    value(),
    size,
    radiogroup('format', '格式', [
      {
        label: '时分秒',
        value: 'HH:mm:ss'
      }, {
        label: '时分',
        value: 'HH:mm'
      },
      {
        label: '时',
        value: 'HH'
      }
    ], 'HH:mm:ss'),
    number('hourStep', '小时步长', 1),
    number('minuteStep', '分钟步长', 1),
    number('secondStep', '秒步长', 1),
    boolean('disabled', '禁用', false)
  ],
  events: [
    onChange
  ],
  width: 300,
  height: 40
}
