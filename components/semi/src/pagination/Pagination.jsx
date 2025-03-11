import React from 'react'
import { Pagination } from '@douyinfe/semi-ui'

export default ({
  value,
  pageSize,
  size,
  total,
  classList,
  input,
  onChange
}) => {
  return (
    <Pagination
      className={classList.join(' ')}
      currentPage={value} pageSize={pageSize} size={size} total={total} onChange={current => {
        onChange && onChange(current)
        input && input(current)
      }}
    />
  )
}
