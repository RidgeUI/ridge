import React, { useEffect, useRef, useState } from 'react'
import './chart.scss'

export default ({
  color,
  percent,
  grid = 6,
  faceColor
}) => {
  const [fontSize, setFontSize] = useState(12)
  const ref = useRef(null)

  useEffect(() => {
  // 获取父元素的高度
    const parentHeight = ref.current.offsetHeight
    setFontSize(parentHeight / 2)
  })
  return (
    <div
      ref={ref}
      style={{
        fontSize: fontSize + 'px',
        height: '100%',
        '--hue': 223,
        '--bg': 'hsl(var(--hue),90%,10%)',
        '--fg': 'hsl(var(--hue),90%,90%)',
        '--fill': color,
        '--trans-dur': '0.3s'
      }}
      className='yr-progress__bar'
    >
      <div className='yr-progress__bar-fill-wrap yr-progress__bar-fill-wrap--glow'>
        <div
          className='yr-progress__bar-fill' data-fill='' style={{
            transform: `translate3d(calc(-${100 - percent}% + 0.83929em), 0px, 0px)`
          }}
        />
      </div>
      <div className='yr-progress__bar-fill-wrap'>
        <span id='yr-progress' className='yr-progress__bar-fill-sr'>Year Progress</span>
        <div
          aria-labelledby='yr-progress' className='yr-progress__bar-fill' role='progressbar' aria-valuemin='0' aria-valuenow='16' aria-valuemax='100' data-fill=''
          style={{
            transform: `translate3d(-${100 - percent}%, 0px, 0px)`
          }}
        />
      </div>
      <div className='yr-progress__bar-divs'>
        {new Array(grid).fill(null).map((_, index) => <div key={index} className='yr-progress__bar-div' />)}
      </div>
    </div>
  )
}
