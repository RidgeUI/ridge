import React from 'react'
import './range.scss'

export default ({
  color,
  percent
}) => {
  return (
    <div
      className='monitoring-x-range' style={{
        '--p': percent,
        '--color': color
      }}
    />
  )
}
