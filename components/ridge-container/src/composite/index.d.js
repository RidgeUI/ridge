import Composite from './CompositeWrapper'

export default {
  name: 'composite',
  component: Composite,
  title: '子页面',
  icon: 'icons/composite.svg',
  type: 'vanilla',
  width: 520,
  height: 400,
  props: [{
    name: 'packageName',
    label: '应用名称',
    type: 'string',
    value: ''
  }, {
    name: 'pagePath',
    label: '页面路径',
    type: 'string',
    value: ''
  }, {
    name: 'classList',
    label: '样式',
    type: 'style',
    value: []
  }],
  events: []
}
