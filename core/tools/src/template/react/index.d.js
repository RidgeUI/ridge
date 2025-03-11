import Component from './Component.jsx'

export default {
  name: 'component',
  component: Component,
  title: '组件',
  type: 'react',
  width: 260,
  height: 40,
  props: [{
    name: 'name',
    type: 'string',
    connect: true,
    value: '内容'
  }]
}
