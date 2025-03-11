import SideSheet from './SideSheet.jsx'
import { boolean, string, onClick, radiogroup, slot, value } from 'ridge-build/src/props.js'
export default {
  name: 'SideSheet',
  title: '侧边栏',
  component: SideSheet,
  icon: 'icons/modal.svg',
  type: 'react',
  props: [
    value('boolean', '打开', false),
    string('title', '标题', '基本对话框'),
    slot('content', '内容'),
    boolean('mask', '显示遮罩', false)
  ],
  events: [{
    name: 'onClose',
    label: '关闭'
  }],
  hideable: false,
  width: 350,
  height: 200
}
