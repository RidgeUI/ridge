import Tabs from './Tabs.jsx'
import { boolean, json, number, radiogroup, string, value } from 'ridge-build/src/props.js'
import { btnColor, btnVariant, size, icon, variant, color, orientation } from '../utils.js'

export default {
  name: 'Tabs',
  component: Tabs,
  title: '切换面板',
  type: 'react',
  icon: 'icons/tabs.svg',
  width: 380,
  height: 56,
  props: [
    value(),
    json('tabs', '面板列表', [{
      label: '发现音乐',
      value: 'discover',
      icon: 'music_video'
    }, {
      label: '排行榜',
      value: 'order',
      icon: 'sort',
      disabled: true
    }, {
      label: '歌手',
      value: 'face',
      icon: 'face'
    }]),
    color,
    radiogroup('iconPosition', '图标位置', [{
      label: '上方',
      value: 'top'
    }, {
      label: '左侧',
      value: 'start'
    }]),
    boolean('centered', '居中', false),
    boolean('scrollable', '可滚动', true),
    orientation
  ]
}
