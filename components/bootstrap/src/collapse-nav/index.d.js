import Collapsible from './Collapsible.jsx'
import { classList, json, value } from 'ridge-build/src/props.js'
export default {
  name: 'Collapsible',
  component: Collapsible,
  title: '左侧导航',
  icon: 'bi bi-text-indent-left',
  type: 'react',
  props: [
    value(),
    json('treeData', '导航数据', [{
      label: '首页',
      children: [{
        label: '概览'
      }, {
        label: '详细信息'
      }, {
        label: '数据情况'
      }]
    }, {
      label: '面板',
      children: [{
        label: '概览'
      }, {
        label: '详细信息'
      }]
    }], true),
    classList()
  ],
  events: [{
    label: '点击',
    name: 'onClick'
  }],
  externals: [
    '/bootstrap/dist/js/bootstrap.bundle.min.js'
  ],
  width: 320,
  height: 440
}
