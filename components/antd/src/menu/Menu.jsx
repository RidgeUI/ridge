import React from 'react'
import { Menu } from 'antd'

export default props => {
  const icons = window.icons
  const onClick = e => {
    props.onClick && props.onClick(e.key)
  }

  const rewriteIcon = (item) => {
    const final = Object.assign({}, item)
    if (item.icon && icons[item.icon]) {
      const AntdIcon = icons[item.icon]
      final.icon = <AntdIcon />
    }

    if (final.children) {
      final.children = final.children.map(itm => rewriteIcon(itm))
    }
    return final
  }

  return <Menu onClick={onClick} mode={props.mode} items={props.items.map(t => rewriteIcon(t))} />
}
