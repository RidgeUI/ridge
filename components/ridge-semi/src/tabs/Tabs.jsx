import React from 'react'
import { Tabs, TabPane } from '@douyinfe/semi-ui'

export default ({
  tabs = [],
  value = '',
  size,
  direction,
  type = 'line',
  input,
  onChange
}) => {
  return (
    <Tabs
      type={type} size={size === 'default' ? 'medium' : size} tabPosition={direction === 'horizontal' ? 'top' : 'left'} activeKey={value} onChange={key => {
        input && input(key)
        onChange && onChange(key)
      }}
    >
      {tabs && tabs.map((opt, i) => {
        return <TabPane tab={opt.label} itemKey={opt.value} key={opt.value || i} />
      })}
    </Tabs>
  )
}
