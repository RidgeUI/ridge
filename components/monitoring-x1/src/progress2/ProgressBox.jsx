import React, { useEffect, useRef, useState } from 'react'
import './chart.scss'

export default ({
  color,
  width,
  faceColor,
  fontSize
}) => {
  const ref = useRef(null)
  const [barHeight, setBarHeight] = useState(12)

  useEffect(() => {
    const re = ref.current.closest('.ridge-element')

    setBarHeight(re.offsetHeight / 8)
  })
  return (
    <div
      ref={ref}
      className='chart' style={{
        '--color': color,
        '--face-color': faceColor,
        '--width': width + '%',
        transform: 'translateY(-20%)',
        fontSize: barHeight + 'px'
      }}
    >
      <div className='bar bar-75 red'>
        <div className='face top'>
          <div className='growing-bar' />
        </div>
        <div className='face side-0'>
          <div className='growing-bar' />
        </div>
        <div className='face floor'>
          <div className='growing-bar' />
        </div>
        <div className='face side-a' />
        <div className='face side-b' />
        <div className='face side-1'>
          <div className='growing-bar' />
        </div>
      </div>
    </div>
  )
}
