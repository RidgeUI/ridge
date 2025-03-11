import Navigation from './Navigation.jsx'
import { direction, icon } from '../props.js'
import { boolean, json, string } from 'ridge-build/src/props.js'
export default {
  name: 'navigation',
  title: '菜单导航',
  component: Navigation,
  icon: 'icons/navigation.svg',
  type: 'react',
  props: [
    json('items', '菜单项', []),
    direction,
    string('defaultSelected', '默认选择'),
    boolean('showHeader', '显示头部', true),
    Object.assign({}, icon, { name: 'headerIcon', label: '头部图标', value: 'IconLanguage' }),
    string('headerText', '头部内容', '管理控制台'),
    boolean('showCollapse', '显示收起', true)
  ],
  width: 300,
  height: 40
}
