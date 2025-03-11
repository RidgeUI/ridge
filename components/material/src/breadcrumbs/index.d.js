import Breadcrumbs from './Breadcrumbs.jsx'
import { boolean, radiogroup, string, value } from 'ridge-build/src/props.js'
import { btnColor, size, icon } from '../utils.js'

export default {
  name: 'Breadcrumbs',
  component: Breadcrumbs,
  title: '面包屑',
  type: 'react',
  icon: 'icons/breadcrumbs.svg',
  width: 360,
  height: 60,
  props: [
    value(),
    boolean('showLabels', '显示标签', true),
    {
      name: 'navs',
      label: '导航数据',
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
          label: '特别关注',
          value: 'message',
          icon: 'message'
        }
      ]
    }
  ]
}
