import React from 'react'
import { Dropdown, Space, Button } from 'antd'

export default props => {
  const icons = window.icons
  const onClick = e => {
    props.onClick && props.onClick(e.key)
  }

  const dropProps = {
    menu: {
      items: props.menu.map(m => {
        const o = Object.assign({}, m)
        if (m.icon && icons[m.icon]) {
          const AntdIcon = icons[m.icon]
          o.icon = <AntdIcon />
        }
        return o
      }),
      onClick
    }
  }

  const Icon = icons[props.icon] ?? icons.DownOutlined
  if (props.placeType === 'plain') {
    const { DownOutlined } = icons
    return (
      <Dropdown {...dropProps}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {props.text}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    )
  } else if (props.placeType === 'button') {
    return (
      <Dropdown {...dropProps}>
        <Button icon={<Icon />}>{props.text}</Button>
      </Dropdown>
    )
  } else if (props.placeType === 'dropbutton') {
    return (
      <Dropdown.Button {...dropProps} icon={<Icon />}>
        {props.text}
      </Dropdown.Button>
    )
  }
}
