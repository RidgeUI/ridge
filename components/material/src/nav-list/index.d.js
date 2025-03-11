import NavList from './NavList.jsx'
import { boolean, value } from 'ridge-build/src/props.js'

export default {
  name: 'NavList',
  component: NavList,
  title: '导航列表',
  type: 'react',
  icon: 'icons/chip.svg',
  width: 200,
  height: 360,
  props: [
    value(),
    {
      name: 'listData',
      label: '菜单列表',
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
    },
    boolean('dense', '紧密', true)
  ],
  events: [{
    name: 'onBtnClick',
    label: '按钮点击'
  }]
}
