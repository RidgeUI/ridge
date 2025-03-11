import React from 'react'
import './style.scss'
export default ({
  value = 80,
  showPercent = true,
  fontColor = '#FFF',
  barEmptyColor = 'transparent', // 进度条背景色
  barColor1 = '#65FFFF', // 渐变最初色
  barColor2 = '#00A8FF' // 渐变最深色，边框同色
}) => {
  return (
    <div
      className='ridge-progress-bar-1'
    >
      <div
        className='quotaBar'
      >
        <div
          className='bar'
          style={{
            border: `1px solid ${barColor2}`,
            backgroundColor: barEmptyColor
          }}
        >
          <div
            className='percent'
            style={{
              color: fontColor,
              width: `${value}%`,
              backgroundImage: `linear-gradient(to right, ${barColor1} , ${barColor2})`
            }}
          > {showPercent && (value + '%')}
          </div>
        </div>
      </div>
    </div>
  )
}
