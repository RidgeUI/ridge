import Notification from './Notification.jsx'
import { direction, icon } from '../props.js'
import { boolean, json, number, radiogroup, select, string, value } from 'ridge-build/src/props.js'
export default {
  name: 'notification',
  title: '通知',
  component: Notification,
  icon: 'icons/notification.svg',
  type: 'react',
  props: [
    value('boolean', '打开'),
    string('title', '标题'),
    string('content', '内容'),
    number('duration', '关闭时间', 5),
    boolean('showClose', '可关闭', true),
    select('position', '位置', [{
      label: '右上',
      value: 'topRight'
    }, {
      label: '上',
      value: 'top'
    }, {
      label: '下',
      value: 'bottom'
    }, {
      label: '左上',
      value: 'topLeft'
    }, {
      label: '右下',
      value: 'bottomLeft'
    }], 'topRight'),
    radiogroup('theme', '颜色', [{
      value: 'normal',
      label: '白色'
    }, {
      value: 'light',
      label: '浅色'
    }]),
    select('method', '方法', [{
      label: '默认',
      value: 'open'
    }, {
      label: '信息',
      value: 'info'
    }, {
      label: '错误',
      value: 'error'
    }, {
      label: '警告',
      value: 'warning'
    }, {
      label: '成功',
      value: 'success'
    }], 'open')
  ],
  width: 300,
  height: 40
}
