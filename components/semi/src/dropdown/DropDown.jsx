import React from 'react'
import { Button, Dropdown, Upload } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'

export default ({
  menus = [],
  trigger = 'hover',
  theme,
  type,
  btnText,
  onItemClick,
  content = null
}) => {
  return (
    <Dropdown
      trigger={trigger}
      render={
        <Dropdown.Menu>
          {menus.map(
            (menu, i) => {
              let IconComponent = null
              if (menu.icon) {
                IconComponent = SemiIcons[menu.icon]
              }
              if (menu.label) {
                if (menu.upload) {
                  return (
                    <Dropdown.Item icon={IconComponent && <IconComponent />} key={i}>
                      <Upload
                        action='none'
                        multiple showUploadList={false} uploadTrigger='custom' onFileChange={files => {
                          onItemClick && onItemClick(menu.value, files)
                        }} accept={menu.accept}
                      >
                        {menu.label}
                      </Upload>
                    </Dropdown.Item>
                  )
                } else {
                  return (
                    <Dropdown.Item
                      icon={IconComponent && <IconComponent />}
                      onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        onItemClick && onItemClick(menu.value)
                      }} key={i}
                    >{menu.label}
                    </Dropdown.Item>
                  )
                }
              } else if (menu.title) {
                return (
                  <Dropdown.Title
                    key={i}
                  >{menu.title}
                  </Dropdown.Title>
                )
              } else {
                return <Dropdown.Divider key={i} />
              }
            }
          )}
        </Dropdown.Menu>
      }
    >
      {content && content()}
      {!content && <Button type={type} theme={theme}>{btnText}</Button>}
    </Dropdown>
  )
}
