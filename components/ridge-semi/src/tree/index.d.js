import Tree from './Tree.jsx'
import { boolean, onChange, radiogroup, value } from 'ridge-build/src/props.js'
export default {
  name: 'Tree',
  title: '树',
  component: Tree,
  icon: 'icons/tree.svg',
  type: 'react',
  props: [value(), {
    label: '数据',
    name: 'treeData',
    type: 'json',
    connect: true,
    value: []
  },
  boolean('multiple', '多选', false),
  boolean('leafOnly', '仅子节点', false),
  boolean('directory', '目录模式', false),
  boolean('filterTreeNode', '可过滤', true),
  radiogroup('checkRelation', '选择关系', [{
    label: '关联',
    value: 'related'
  }, {
    label: '非关联',
    value: 'unRelated'
  }
  ], 'unRelated')],
  events: [
    onChange
  ],
  width: 300,
  height: 52
}
