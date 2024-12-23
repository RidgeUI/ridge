import Modal from './Modal.jsx'
import { boolean, string, onClick, radiogroup, slot, value } from 'ridge-build/src/props.js'
export default {
  name: 'modal',
  title: '对话框',
  component: Modal,
  icon: 'icons/modal.svg',
  type: 'react',
  props: [
    value('boolean', '打开', false),
    string('title', '标题', '基本对话框'),
    string('textContent', '文本内容', '默认对话框文本内容'),
    slot('content', '内容'),
    boolean('showHeader', '显示头部', true),
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
  hideable: false,
  width: 350,
  height: 200
}
