import LayeredContainer from './LayeredContainer.js'
export default {
  name: 'switch-container',
  component: LayeredContainer,
  title: '动态切换',
  type: 'vanilla',
  icon: 'icons/layers.svg',
  props: [{
    name: 'current',
    label: '当前内容',
    connect: true,
    type: 'string',
    value: ''
  }, {
    name: 'preload',
    label: '预加载',
    type: 'boolean',
    value: true
  }, {
    name: 'classNames',
    label: '样式',
    type: 'class',
    value: []
  }, {
    name: 'children',
    hidden: true,
    type: 'children',
    value: []
  }],
  fullScreenable: true,
  width: 540,
  height: 360
}
