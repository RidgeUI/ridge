import React from 'react'
import { Table } from '@douyinfe/semi-ui'

export default ({
  columns = [],
  dataSource = [],
  size,
  pagination = false
}) => {
  const convertOptionItemToSemiCol = (item, key) => {
    return Object.assign({}, item, {
      title: item.label,
      dataIndex: item.value
    })
  }
  return <Table size={size} columns={columns.map(convertOptionItemToSemiCol)} dataSource={dataSource} pagination={pagination} />
}
