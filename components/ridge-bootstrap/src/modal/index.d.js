import Modal from './Modal.jsx'
export default {
  name: 'Modal',
  title: '对话框',
  component: Modal,
  icon: 'icons/modal.svg',
  type: 'react',
  props: [{
    name: 'show',
    label: '打开',
    connect: true,
    type: 'boolean',
    value: false
  }, {
    name: 'title',
    label: '标题',
    type: 'string',
    value: '对话框'
  }, {
    name: 'header',
    label: '头部',
    type: 'slot'
  }, {
    name: 'body',
    label: '内容',
    type: 'slot'
  }, {
    name: 'showFooter',
    label: '显示底部',
    type: 'boolean',
    value: true
  }, {
    name: 'footer',
    label: '底部',
    type: 'slot'
  }],
  events: [{
    label: '点击关闭',
    name: 'onClose'
  }, {
    label: '点击确定',
    name: 'onConfirm'
  }],
  width: 600,
  height: 400
}
