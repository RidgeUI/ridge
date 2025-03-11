import Spinners from './Spinner.js'

export default {
  name: 'Spinners',
  component: Spinners,
  title: '加载中',
  icon: 'icons/spinner.svg',
  type: 'vanilla',
  props: [{
    name: 'showLoading',
    label: '加载中',
    connect: true,
    type: 'boolean'
  }, {
    name: 'message',
    label: '提示文本',
    connect: true,
    type: 'string',
    value: '请等待...'
  }, {
    name: 'target',
    label: '覆盖目标',
    type: 'decorate',
    value: ''
  }, {
    name: 'styleClassList',
    label: '样式',
    type: 'style',
    value: []
  }],
  events: [],
  width: 120,
  height: 80
}
