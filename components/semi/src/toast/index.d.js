import Toast from './Toast.jsx'
import { boolean, json, number, radiogroup, select, string, value } from 'ridge-build/src/props.js'
export default {
  name: 'notification',
  title: '提示',
  component: Toast,
  icon: 'icons/toast.svg',
  type: 'react',
  props: [
    value('boolean', '打开'),
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
    }], 'info')
  ],
  width: 300,
  height: 40
}
