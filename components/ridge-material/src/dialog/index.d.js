import { boolean, onChange, value, number, string, slot } from 'ridge-build/src/props.js'
import Dialog from './Dialog.jsx'
export default {
  name: 'Dialog',
  component: Dialog,
  title: '对话框',
  icon: 'icons/dialog.svg',
  type: 'react',
  width: 240,
  height: 160,
  props: [
    value('boolean', '打开', false),
    string('title', '标题', '基本对话框'),
    string('textContent', '文本内容', '默认对话框文本内容'),
    slot('content', '内容'),
    boolean('showFooter', '显示底部', true),
    boolean('mask', '显示遮罩', false),
    boolean('confirmLoading', '确认等待', false)
  ],
  events: [{
    name: 'onOk',
    label: '确认'
  }, {
    name: 'onCancel',
    label: '取消'
  }, {
    name: 'afterClose',
    label: '关闭后'
  }],
  hideable: false
}
