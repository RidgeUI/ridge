import Pagination from './Pagination.jsx'
import { number, onChange, value } from 'ridge-build/src/props.js'
import { size, variant, color } from '../utils.js'

export default {
  name: 'Pagination',
  component: Pagination,
  title: '分页器',
  type: 'react',
  icon: 'icons/button.svg',
  width: 420,
  height: 40,
  props: [
    value('number', '当前', 0),
    number('count', '总页数', 10),
    variant,
    color,
    size
  ],
  events: [
    onChange
  ]
}
