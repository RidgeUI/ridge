import Button from './Button.jsx'

export default {
  name: 'Button',
  component: Button,
  title: '按钮',
  type: 'react',
  width: 260,
  height: 40,
  props: [{
    name: 'text',
    label: '按钮',
    type: 'string',
    connect: true,
    value: '内容'
  }]
}
