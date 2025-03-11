import React from 'react'
import * as Icons from '@ant-design/icons'
export default props => {
  const AntdIconComponent = Icons.SoundFilled

  if (AntdIconComponent) {
    return <AntdIconComponent />
  } else {
    return null
  }
  // const Icon = window.icons[props.icon]
  // if (Icon) {
  //   return (
  //     <Icon
  //       style={{
  //         color: props.color,
  //         fontSize: props.size + 'px'
  //       }}
  //       twoToneColor={props.color}
  //       spin={props.spin}
  //       rotate={props.rotate}
  //     />
  //   )
  // } else {
  //   return <div />
  // }
}
