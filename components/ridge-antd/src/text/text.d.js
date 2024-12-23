import Text from './Text.jsx'

export default {
  name: 'Text',
  component: Text,
  icon: 'icons/Typography.svg',
  title: '文本',
  description: '文本类型内容的展示',
  props: [
    {
      name: 'text',
      label: '内容',
      type: 'string',
      connect: true,
      value: '这是一段文本'
    },
    {
      name: 'code',
      label: '代码',
      description: '添加代码样式',
      type: 'boolean',
      value: false
    },
    {
      name: 'copyable',
      label: '可拷贝',
      description: '是否可拷贝，为对象时可进行各种自定义',
      type: 'boolean',
      value: false
    },
    {
      name: 'delete',
      label: '删除',
      description: '添加删除线样式',
      type: 'boolean',
      value: false
    },
    {
      name: 'disabled',
      label: '禁用',
      description: '禁用文本',
      type: 'boolean',
      value: false
    },
    {
      name: 'editable',
      label: '编辑',
      type: 'boolean',
      description: '是否可编辑，为对象时可对编辑进行控制',
      value: false
    },
    {
      name: 'ellipsis',
      label: '溢出省略',
      type: 'boolean',
      value: true
    },
    {
      name: 'keyboard',
      label: '键盘',
      description: '添加键盘样式',
      type: 'boolean',
      value: false
    },
    {
      name: 'mark',
      label: '标记',
      description: '添加标记样式',
      type: 'boolean',
      value: false
    },
    {
      name: 'strong',
      description: '是否加粗',
      type: 'boolean',
      value: false
    },
    {
      name: 'italic',
      description: '是否斜体',
      type: 'boolean',
      value: false
    },
    {
      name: 'type',
      description: '文本类型',
      type: 'normal |secondary | success | warning | danger',
      value: ''
    },
    {
      name: 'underline',
      description: '添加下划线样式',
      type: 'boolean',
      value: false
    }
  ],
  events: [{
    label: '点击文本',
    name: 'onClick'
  }, {
    label: '按下回车键',
    name: 'onPressEnter'
  }],
  width: 160,
  height: 36
}
