import Tabs from './Tabs.jsx'
import { optionConfig, radiogroup } from 'ridge-build/src/props.js'
export default {
  name: 'Tabs',
  component: Tabs,
  title: '页签',
  icon: 'icons/tab.svg',
  type: 'react',
  props: [
    optionConfig('tabs', '页签项'), {
      name: 'value',
      label: '当前项',
      connect: true,
      type: 'string',
      value: 'tab1'
    }, {
      name: 'style',
      label: '样式',
      type: 'string',
      control: 'radiogroup',
      options: [{
        label: '链接',
        value: 'link'
      }, {
        label: '页签',
        value: 'nav-tabs'
      }, {
        label: '按钮',
        value: 'nav-pills'
      }, {
        label: '下划线',
        value: 'nav-underline'
      }],
      value: 'nav-tabs'
    }, radiogroup('align', '对齐', [{
      label: '靠左',
      value: ''
    }, {
      label: '居中',
      value: 'justify-content-center'
    }, {
      label: '靠右',
      value: 'justify-content-end'
    }, {
      label: '填满',
      value: 'nav-fill'
    }, {
      label: '纵向',
      value: 'flex-column'
    }], 'left', false),
    {
      name: 'template',
      label: '项模板',
      type: 'slot',
      value: ''
    }],
  events: [],
  width: 360,
  height: 50
}
