import { boolean, select } from 'ridge-build/src/props.js'
import { size } from '../props.js'
import Spin from './Spin.jsx'
export default {
  name: 'spin',
  title: '加载器',
  component: Spin,
  icon: 'icons/spin.svg',
  type: 'react',
  props: [
    size,
    boolean('spinning', '加载中', true),
    select('icon', '图标样式', ['IconSpin', 'IconSync', 'IconLoading', 'IconRotationStroked'])
  ],
  events: [{
    label: '选择下拉项',
    name: 'onItemClick'
  }],
  width: 300,
  height: 52
}
