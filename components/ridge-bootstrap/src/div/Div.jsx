import React from 'react'
export default ({
  text,
  mask,
  classList,
  onClick
}) => {
  const className = classList.join(' ')

  const style = {
    width: '100%',
    height: '100%'
  }
  if (mask) {
    style.maskSize = 'contain'
    style.maskImage = `url("${mask}")`
    style.maskRepeat = 'no-repeat'
  }

  return (
    <div
      className={className} style={style} onClick={() => {
        onClick && onClick()
      }}
    >{text}
    </div>
  )
}
