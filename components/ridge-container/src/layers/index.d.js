import LayeredContainer from './LayeredContainer.js'
import { boolean, children, classList } from 'ridge-build/src/props'
export default {
  name: 'switch-container',
  component: LayeredContainer,
  title: '切换容器',
  type: 'vanilla',
  icon: 'icons/layers.svg',
  props: [{
    name: 'current',
    label: '当前内容',
    connect: true,
    type: 'string',
    value: ''
  },
  boolean('preload', '预加载', true),
  classList(),
  children],
  fullScreenable: true,
  width: 540,
  height: 360
}
