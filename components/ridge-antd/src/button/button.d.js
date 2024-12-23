import Button from './Button.jsx'
import { boolean, radiogroup, string } from 'ridge-build/src/props.js'
import { size, btnColor, btnVariant } from '../utils/props.js'

export default {
  name: 'button',
  title: '按钮',
  component: Button,
  type: 'react',
  icon: 'icons/button.svg',
  props: [
    string('text', '文本', '按钮', true),
    btnVariant,
    btnColor,
    size,
    boolean('danger', '危险', false),
    boolean('disabled', '失效', false),
    boolean('ghost', '幽灵', false),
    boolean('loading', '载入中', false, true),
    radiogroup('shape', '形状', [{
      label: '默认',
      value: 'default'
    }, {
      label: '圆形',
      value: 'circle'
    }, {
      label: '圆角',
      value: 'round'
    }], 'default')
  ],
  events: [{
    label: '单击事件',
    name: 'onClick'
  }],
  width: 64,
  height: 32
}
