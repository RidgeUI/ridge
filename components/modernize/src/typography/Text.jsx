import React from 'react'
export default ({
  text = '',
  classList = []
}) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }} className={classList.join(' ')}
    >{text}
    </div>
  )
}
