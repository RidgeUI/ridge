import SnackBar from './SnackBar.jsx'
import { number, value, string } from 'ridge-build/src/props.js'
import { color, size2, icon } from '../utils.js'

export default {
  name: 'SnackBar',
  component: SnackBar,
  title: '便捷通知',
  type: 'react',
  icon: 'icons/snackbar.svg',
  width: 350,
  height: 160,
  props: [
    value('boolean', '打开通知'),
    number('autoHideDuration', '自动关闭', 6000),
    string('message', '提示消息', '这是一条提示信息'),
    string('btnText', '关闭按钮', '')
  ],
  events: [{
    name: 'onChange',
    label: '关闭'
  }]
}
