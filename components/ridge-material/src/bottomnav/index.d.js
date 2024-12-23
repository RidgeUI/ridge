import BottomNavigation from './BottomNavigation.jsx'
import { boolean, radiogroup, string, value } from 'ridge-build/src/props.js'
import { btnColor, size, icon } from '../utils.js'

export default {
  name: 'BottomNavigation',
  component: BottomNavigation,
  title: '底部导航',
  type: 'react',
  icon: 'icons/bottom-nav.svg',
  width: 160,
  height: 60,
  props: [
    value(),
    boolean('showLabels', '显示标签', true),
    {
      name: 'tabs',
      label: '列表',
      type: 'object',
      connect: true,
      value: [
        {
          label: '首页',
          value: 'home',
          icon: 'home'
        },
        {
          label: '我的收藏',
          value: 'favorite',
          icon: 'favorite'
        },
        {
          label: '消息',
          value: 'message',
          icon: 'message'
        }
      ]
    }
  ]
}
