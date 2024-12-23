import React, { useState } from 'react'
import * as Icons from '@ant-design/icons'
import { List, Popover, Button, Typography } from '@douyinfe/semi-ui'

const { Text } = Typography

export default ({
  value,
  onChange
}) => {
  const [visible, setVisible] = useState(false)
  const list = [{
    key: 'SoundFilled',
    Component: Icons.SoundFilled
  }]

  const found = list.filter(item => item.key === value)[0]

  let comp = <Icons.SelectOutlined />
  if (found) {
    comp = <found.Component />
  }
  const PopContent = () => {
    return (
      <div style={{
        padding: '12px'
      }}
      >
        <Button
          icon={comp} onClick={() => {
            onChange(null)
          }}
        >取消选择
        </Button>
        <List
          width={960}
          height={720}
          style={{
            overflowY: 'auto',
            overflowX: 'hidden',
            width: '740px',
            height: '640px'
          }}
          grid={{
            gutter: 12,
            span: 3
          }}
          dataSource={list}
          renderItem={item => {
            const Component = item.Component
            if (Component) {
              return (
                <List.Item style={{
                  border: '1px solid var(--semi-color-border)',
                  height: '80px',
                  padding: '16px',
                  fontSize: '24px',
                  backgroundColor: 'var(--semi-color-bg-2)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '12px',
                  borderRadius: '3px'
                }}
                >
                  <Component
                    onClick={() => {
                      onChange && onChange(item.key)
                    }} size='inherit'
                  />
                </List.Item>
              )
            } else {
              return <div>1</div>
            }
          }}
        />
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'var(--semi-color-fill-0)',
      padding: '1px 9px'
    }}>
      {comp}
      <Text>{value}</Text>
      <Popover
        position='leftTop'
        trigger='custom'
        style={{
          padding: '5px'
        }}
        visible={visible}
        onClickOutSide={() => {
          setVisible(false)
        }}
        content={<PopContent />}
      >
        <Button
          icon={<Icons.SelectOutlined />}
          size='small'onClick={() => {
            setVisible(true)
          }}
        />
        <Button
          icon={<Icons.DeleteFilled />}
          size='small'onClick={() => {
            setVisible(true)
          }}
        />
      </Popover>

    </div>
  )
}
