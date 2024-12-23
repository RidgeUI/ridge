import DropDown from './DropDown.jsx'
export default {
  name: 'dropdown',
  title: '下拉菜单',
  description: '当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。',
  icon: 'icons/drop.svg',
  component: DropDown,
  props: [{
    name: 'text',
    label: '文本',
    type: 'string',
    value: '下拉菜单'
  }, {
    name: 'placeType',
    label: '样式',
    type: 'string',
    control: 'select',
    options: [{
      label: '文本',
      value: 'plain'
    }, {
      label: '按钮',
      value: 'button'
    }, {
      label: '下拉按钮',
      value: 'dropbutton'
    }],
    value: 'dropbutton'
  }, {
    name: 'icon',
    label: '图标',
    type: 'string',
    control: async () => {
      const Module = await import('../utils/iconControl.js')
      return Module.default
    },
    value: 'HeartFilled'
  }, {
    name: 'menu',
    label: '下拉项',
    type: 'array',
    control: 'json',
    value: [
      {
        key: '1',
        label: '下拉项1'
      }, {
        key: '2',
        label: '下拉项2'
      }, {
        key: '3',
        label: '下拉项3'
      }
    ]
  }],
  externals: ['index.umd.min.js'],
  width: 160,
  height: 40
}
