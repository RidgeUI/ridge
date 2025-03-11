import SideSheet from './SideSheet.jsx'
import { value, slot, string, radiogroup, boolean, number } from 'ridge-build/src/props.js'
export default {
  name: 'SideSheet',
  title: '侧边栏',
  component: SideSheet,
  icon: 'icons/side-sheet.svg',
  type: 'react',
  props: [
    slot('content', '内容'),
    Object.assign(value('boolean', '打开')),
    string('title', '标题'),
    radiogroup('placement', '放置位置', [{
      label: '左部',
      value: 'left'
    }, {
      label: '右部',
      value: 'right'
    }]),
    boolean('mask', '显示遮罩'),
    boolean('maskClosable', '点遮罩关闭'),
    boolean('closable', '可关闭'),
    number('customizeWidth', '宽度')
  ],
  width: 300,
  height: 200

}
