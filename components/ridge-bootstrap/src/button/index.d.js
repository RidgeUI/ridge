import Button from './Button.jsx'
import { string, radiogroup, boolean } from 'ridge-build/src/props.js'
import { type, size, icon, src } from '../props.js'
export default {
  name: 'button',
  title: '按钮',
  component: Button,
  icon: 'bi bi-pause-btn',
  type: 'react',
  props: [
    string('text', '文本', '按钮'),
    type,
    src,
    icon,
    radiogroup('size', '尺寸', size, 'btn-normal', false),
    radiogroup('style', '风格', [{
      label: '深色',
      value: 'general'
    }, {
      label: '细边',
      value: 'outline'
    }, {
      label: '浅色',
      value: 'light'
    }], 'general', false),
    boolean('rounded', '圆角', false, false),
    boolean('full', '填充', false, false),
    boolean('disabled', '禁用', false, true),
    boolean('withBadge', '圆点', false),
    string('badgeCount', '数量', '')
  ],
  events: [{
    label: '点击',
    name: 'onClick'
  }],
  width: 90,
  height: 36
}
