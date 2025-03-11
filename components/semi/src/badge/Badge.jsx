import React from 'react'
import { Badge } from '@douyinfe/semi-ui'

export default ({
  count,
  type,
  overflowCount,
  theme,
  dot
}) => {
  return (
    <Badge
      count={count}
      theme={theme}
      type={type}
      dot={dot}
      overflowCount={overflowCount}
    />
  )
}
