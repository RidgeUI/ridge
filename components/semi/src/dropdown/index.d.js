import { optionConfig, radiogroup, slot, string } from 'ridge-build/src/props.js'
import DropDown from './DropDown.jsx'
import { btnTheme, type } from '../props.js'
export default {
  name: 'DropDown',
  title: '下拉',
  component: DropDown,
  icon: 'icons/dropdown.svg',
  type: 'react',
  props: [optionConfig('menus', '下拉项'),
    radiogroup('trigger', '触发方式', [{
      label: '悬浮',
      value: 'hover'
    }, {
      label: '点击',
      value: 'click'
    }, {
      label: '右键',
      value: 'contextMenu'
    }]),
    type,
    btnTheme,
    string('btnText', '按钮文本', '下拉菜单'),
    slot('content', '内容')
  ],
  events: [{
    label: '项目点击',
    name: 'onItemClick'
  }],
  width: 300,
  height: 52
}
