import Title from './Title.jsx'

export default {
  name: 'Title',
  component: Title,
  icon: 'icons/Typography.svg',
  title: '标题',
  props: [
    {
      name: 'text',
      label: '内容',
      type: 'string',
      value: '这是一段文本'
    },
    {
      name: 'level',
      label: '级别',
      description: '重要程度，相当于 h1、h2、h3、h4、h5',
      type: 'number',
      value: 1
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
      name: 'mark',
      label: '标记',
      description: '添加标记样式',
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
  }],
  width: 250,
  height: 50
}
