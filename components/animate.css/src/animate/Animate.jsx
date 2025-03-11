import React from 'react'
export default ({
  child,
  repeat = 1,
  delay = 0,
  duration = 1000,
  classList
}) => {
  const style = {
    width: '100%',
    height: '100%',
    'animation-duration': duration + 'ms',
    '-webkit-animation-duration': duration + 'ms',
    'animation-delay': delay + 'ms',
    '-webkit-animation-delay': delay + 'ms',
    'animation-iteration-count': `${repeat}`,
    '-webkit-animation-iteration-count': repeat
  }
  return (
    <div style={style} className={'animate__animated ' + classList.join(' ')}>
      {child && child()}
    </div>
  )
}
