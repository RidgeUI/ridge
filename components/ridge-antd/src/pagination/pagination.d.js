import Pagination from './Pagination.jsx'
export default {
  name: 'pagination',
  title: '分页',
  description: '采用分页的形式分隔长列表，每次只加载一个页面。当内容过多、加载/渲染所有数据将花费很多时间时使用',
  icon: 'icons/pagination.svg',
  component: Pagination,
  props: [{
    name: 'current',
    label: '当前页',
    type: 'number',
    value: 1
  }, {
    name: 'pageSize',
    label: '每页条数',
    type: 'number',
    value: 20
  }, {
    name: 'total',
    label: '总数',
    type: 'number',
    value: 156
  }, {
    name: 'size',
    label: '尺寸',
    type: 'string',
    control: 'select',
    options: [{
      label: '小',
      value: 'small'
    }, {
      label: '正常',
      value: 'default'
    }],
    value: 'default'
  }, {
    name: 'simple',
    label: '简洁',
    type: 'boolean',
    value: false
  }],
  width: 500,
  height: 32
}
