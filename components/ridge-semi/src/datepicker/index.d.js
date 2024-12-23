import { onChange, select, value } from 'ridge-build/src/props.js'
import DatePicker from './DatePicker.jsx'
import { size } from '../props.js'
export default {
  name: 'DatePicker',
  icon: 'icons/date-picker.svg',
  title: '日期选择',
  component: DatePicker,
  type: 'react',
  width: 260,
  height: 40,
  props: [
    value(),
    size,
    select('type', '类型', [{
      label: '日期',
      value: 'date'
    }, {
      label: '日期范围',
      value: 'dateRange'
    }, {
      label: '日期时间',
      value: 'dateTime'
    }, {
      label: '日期时间范围',
      value: 'dateTimeRange'
    }, {
      label: '月份',
      value: 'month'
    }, {
      label: '月份范围',
      value: 'monthRange'
    }])
  ],
  events: [
    onChange
  ]
}
