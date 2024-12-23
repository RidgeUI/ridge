import React from 'react'
import { Cascader } from '@douyinfe/semi-ui'

export default ({
  value,
  treeData,
  multiple,
  maxTagCount,
  separator = '/',
  disabled,
  size = 'size',
  input,
  onChange,
  placeholder,
  filterTreeNode
}) => {
  return (
    <Cascader
      value={value}
      leafOnly
      treeData={treeData}
      separator={separator}
      size={size}
      filterTreeNode={filterTreeNode}
      multiple={multiple}
      disabled={disabled}
      maxTagCount={maxTagCount}
      style={{ width: '100%' }}
      onChange={val => {
        input && input(val)
        onChange && onChange(val)
      }}
      placeholder={placeholder}
    />
  )
}
