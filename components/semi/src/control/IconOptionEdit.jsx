import React from 'react'
import { List } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'

export default ({
  value,
  onChange
}) => {
  return (
    <div style={{
      padding: '12px'
    }}
    >
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
        dataSource={Object.keys(SemiIcons).filter(key => key.startsWith('Icon'))}
        renderItem={item => {
          const Component = SemiIcons[item]
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
                    onChange && onChange(item)
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
