import React from 'react'
export default ({
  tabs = [],
  style = 'nav-tabs',
  align = '',
  value = '',
  input
}) => {
  const classList = ['nav', style, align].join(' ')

  return (
    <ul className={classList}>
      {tabs.map(item => {
        return (
          <li
            style={{
              cursor: 'pointer'
            }}
            className='nav-item' key={item.value} onClick={() => {
              input && input(item.value)
            }}
          >
            <a className={['nav-link', String(item.value) === String(value) ? 'active' : ''].join(' ')}>{item.label}</a>
          </li>
        )
      })}
    </ul>
  )
}
