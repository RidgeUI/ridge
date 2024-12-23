import Pagination from './Pagination.jsx'
import { size, type, disabled } from '../props'
import { classList, number, onChange, value } from 'ridge-build/src/props.js'
export default {
  name: 'pagination',
  title: '分页器',
  component: Pagination,
  icon: 'icons/pagination.svg',
  order: 4,
  type: 'react',
  props: [
    value('number', '当前页', 1),
    number('pageSize', '每页条数', 10),
    number('total', '总数', 120),
    size,
    classList()
  ],
  events: [
    onChange
  ],
  width: 450,
  height: 32
}
