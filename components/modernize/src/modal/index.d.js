import { value } from 'ridge-build/src/props.js'
import Modal from './Modal.jsx'
export default {
  name: 'Modal',
  title: '对话框',
  component: Modal,
  icon: 'bi bi-calendar3-event',
  type: 'react',
  props: [
    value('boolean', '打开', false), {
      name: 'title',
      label: '标题',
      type: 'string',
      value: '对话框'
    }, {
      name: 'body',
      label: '内容',
      type: 'slot'
    }, {
      name: 'showHeader',
      label: '显示头部',
      type: 'boolean',
      value: true
    }, {
      name: 'showFooter',
      label: '显示底部',
      type: 'boolean',
      value: true
    }],
  events: [{
    label: '点击关闭',
    name: 'onClose'
  }, {
    label: '点击确定',
    name: 'onConfirm'
  }],
  hideable: false,
  width: 600,
  height: 400
}
