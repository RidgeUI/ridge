import PopConfirm from './PopConfirm.jsx'
import { size, type, icon } from '../props'
import { string, radiogroup } from 'ridge-build/src/props.js'
export default {
  name: 'popconfirm',
  title: '确认按钮',
  component: PopConfirm,
  icon: 'icons/popconfirm.svg',
  type: 'react',
  props: [
    string('title', '确认标题', '确定是否要保存？'),
    string('content', '确认正文', '此修改将不可逆'),
    string('btnText', '按钮文本', '确认'),
    icon,
    type,
    size,
    radiogroup('theme', '主题', [{
      label: '浅色',
      value: 'light'
    }, {
      label: '深色',
      value: 'solid'
    }, {
      label: '无',
      value: 'borderless'
    }, {
      label: '边框',
      value: 'outline'
    }])
  ],
  events: [{
    label: '点击取消',
    name: 'onCancel'
  }, {
    label: '点击确认',
    name: 'onConfirm'
  }],
  width: 300,
  height: 52
}
