import Button from './Button.jsx'
import { string, radiogroup, boolean } from 'ridge-build/src/props.js'
import { type, size, icon } from '../props.js'
export default {
  name: 'button',
  title: '按钮',
  icon: 'bi bi-pause-btn',
  component: Button,
  type: 'react',
  props: [
    string('text', '文本', '按钮'),
    type,
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
    radiogroup('size', '尺寸', size, 'btn-normal', false),
    icon,
    boolean('full', '填充', false, false),
    boolean('rounded', '圆角', false, false)
  ],
  events: [{
    label: '点击',
    name: 'onClick'
  }],
  width: 120,
  height: 40
}
