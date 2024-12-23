import { boolean, onChange, radiogroup, value } from 'ridge-build/src/props.js'
import TreeSelect from './TreeSelect.jsx'
import { size } from '../props.js'
export default {
  name: 'TreeSelect',
  title: '树选择',
  component: TreeSelect,
  icon: 'icons/tree-select.svg',
  type: 'react',
  props: [
    value(), {
      label: '数据',
      name: 'treeData',
      type: 'json',
      connect: true,
      value: []
    },
    size,
    boolean('multiple', '多选', false),
    boolean('leafOnly', '仅子节点', false),
    boolean('filterTreeNode', '可过滤', true),
    radiogroup('checkRelation', '选择关系', [{
      label: '关联',
      value: 'related'
    }, {
      label: '非关联',
      value: 'unRelated'
    }
    ], 'unRelated')
  ],
  events: [
    onChange
  ],
  width: 300,
  height: 52
}
