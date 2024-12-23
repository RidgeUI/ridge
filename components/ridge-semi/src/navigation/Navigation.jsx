import React from 'react'
import { Nav } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'

export default ({
  items,
  direction,
  defaultSelected,
  showHeader,
  headerIcon,
  headerText,
  showCollapse,
  onClick
}) => {
  // 列表数据转换
  const mapListTree = itemList => {
    return itemList.map(item => {
      if (typeof item === 'string') return item

      const listItem = {
        itemKey: item.value,
        text: item.label
      }

      if (item.icon && SemiIcons[item.icon]) {
        const IconComponent = SemiIcons[item.icon]
        listItem.icon = <IconComponent />
      }
      if (item.children) {
        listItem.items = mapListTree(item.children)
      }
      return listItem
    })
  }
  const props = {}

  // 头部处理
  if (showHeader) {
    props.header = {}
    if (headerText) {
      props.header.text = headerText
    }
    if (headerIcon && SemiIcons[headerIcon]) {
      const IconComponent = SemiIcons[headerIcon]
      props.header.logo = <IconComponent style={{ height: '36px', fontSize: 36 }} />
    }
  }

  // 收起
  if (showCollapse) {
    props.footer = {
      collapseButton: true
    }
  }
  if (defaultSelected) {
    props.defaultSelectedKeys = [defaultSelected]
  }

  return (
    <Nav
      mode={direction}
      items={mapListTree(items)}
      {...props}
      onSelect={data => {
        onClick && onClick(data)
      }}
      onClick={data => console.log('trigger onClick: ', data)}
    />
  )
}
