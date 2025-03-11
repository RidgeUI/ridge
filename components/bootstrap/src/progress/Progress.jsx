import React from 'react'
export default ({
  value = '',
  striped,
  type = 'primary',
  animated,
  text
}) => {
  return (
    <div
      className='progress' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100' style={{
        width: '100%',
        height: '100%'
      }}
    >
      <div
        className={['progress-bar', 'bg-' + type, striped ? 'progress-bar-striped' : '', animated ? 'progress-bar-animated' : ''].join(' ')} style={{
          width: value + '%'
        }}
      >{text}
      </div>
    </div>
  )
}
