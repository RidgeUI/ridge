import LineBar from './LineBar'

export default {
  name: 'LineBar',
  title: '进度条1',
  component: LineBar,
  icon: 'bi bi-pie-chart',
  type: 'react',
  props: [{
    label: '当前值',
    name: 'value',
    type: 'number',
    connect: true,
    value: 80
  }, {
    label: '空白色',
    name: 'barEmptyColor',
    type: 'color',
    value: 'transparent'
  }, {
    label: '背景1',
    name: 'barColor1',
    type: 'color',
    value: '#9BBEE6'
  }, {
    label: '背景2',
    name: 'barColor2',
    type: 'color',
    value: '#E6ECF4'
  }, {
    label: '显示百分比',
    name: 'showPercent',
    type: 'boolean',
    value: true
  }, {
    label: '字体颜色',
    name: 'fontColor',
    type: 'color',
    value: '#FFF'
  }],
  width: 120,
  height: 40
}
