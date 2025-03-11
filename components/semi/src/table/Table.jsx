import React from 'react'
import { Table } from '@douyinfe/semi-ui'

export default ({
  columns = [],
  dataSource = [],
  size,
  rowKey,
  selectionChanged,
  pagination = false
}) => {
  const [selectedRows, setSelectedRows] = React.useState([])
  const convertOptionItemToSemiCol = (item, key) => {
    return Object.assign({}, item, {
      title: item.label,
      dataIndex: item.value
    })
  }
  const rowSelection = {
    getCheckboxProps: record => ({
      disabled: record.name === '设计文档', // Column configuration not to be checked
      name: record.name
    }),
    onSelect: (record, selected) => {
    },
    onSelectAll: (selected, selectedRows) => {
    },
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRows(selectedRows)
      selectionChanged && selectionChanged(selectedRowKeys, selectedRows)
    }
  }
  return <Table rowKey={rowKey} selectedRows={selectedRows} size={size} rowSelection={rowSelection} columns={columns.map(convertOptionItemToSemiCol)} dataSource={dataSource} pagination={pagination} />
}
