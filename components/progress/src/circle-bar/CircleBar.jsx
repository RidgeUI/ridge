import React from 'react'
import './style.scss'
export default ({
  value = 80,
  barBgColor = 'transparent', // 进度条背景色
  barGrad1 = 'E6ECF4', // 渐变最初色
  barGrad2 = 'E6ECF4', // 渐变最初色
  barBdColor = '#fff',
  outerBorderColor = 'rgba(255,255,255,0.2)'
}) => {
  const containerStyle = {
    width: '100%',
    height: '100%',
    border: '4px solid ' + outerBorderColor
  }

  return (
    <div
      className='ridge-circle-bar'
      style={containerStyle}
    >
      <div
        className='circleQuotaBar'
      >
        {/* 进度条 */}
        <div
          className='bar'
          style={{
            border: `1px solid ${barBdColor}`,
            backgroundColor: barBgColor
          }}
        >
          <div
            className='percent'
            style={{
              borderTop: '1px solid' + barBdColor,
              height: `${value}%`,
              backgroundImage: 'linear-gradient(to top, ' + barGrad1 + ' , ' + barGrad2 + ')'
            }}
          />
        </div>
      </div>
    </div>
  )
}
