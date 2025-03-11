import CircleBar from './CircleBar'

export default {
  name: 'CircleBar',
  title: '圆形进度条',
  component: CircleBar,
  icon: 'bi bi-pie-chart',
  type: 'react',
  props: [{
    label: '当前值',
    name: 'value',
    type: 'number',
    value: 80
  }, {
    label: '边框色',
    name: 'barBdColor',
    type: 'color',
    value: '#4A90E2'
  }, {
    label: '背景色',
    name: 'barBgColor',
    type: 'color',
    value: '#9BBEE6'
  }, {
    label: '进度渐变',
    name: 'barGrad1',
    type: 'color',
    value: '#E6ECF4'
  }, {
    label: '进度渐变',
    name: 'barGrad2',
    type: 'color',
    value: '#E6ECF4'
  }],
  width: 100,
  height: 100
}
