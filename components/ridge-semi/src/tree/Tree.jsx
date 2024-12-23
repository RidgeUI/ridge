import React from 'react'
import { Tree } from '@douyinfe/semi-ui'
import { mapOptionToTree } from '../utils'

export default ({
  treeData = [],
  value = '',
  multiple,
  leafOnly,
  checkRelation,
  filterTreeNode,
  directory,
  size,
  input,
  onChange
}) => {
  return (
    <Tree
      style={{
        width: '100%',
        height: '100%',
        overflow: 'auto'
      }}
      value={value}
      treeData={mapOptionToTree(treeData)}
      directory={directory}
      multiple={multiple}
      leafOnly={leafOnly}
      checkRelation={checkRelation}
      filterTreeNode={filterTreeNode}
      onChange={(selectedKey, selected, selectedNode) => {
        if (!multiple && leafOnly) {
          if (!selected.children) {
            input && input(selectedKey)
            onChange && onChange(selectedKey)
          }
        } else {
          input && input(selectedKey)
          onChange && onChange(selectedKey)
        }
      }}
      expandAll
      defaultExpandAll
    />
  )
}
