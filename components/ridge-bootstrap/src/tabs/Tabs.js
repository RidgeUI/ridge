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
            className='nav-item' key={item.value} onClick={() => {
              input && input(item.value)
            }}
          >
            <a className={['nav-link', item.value === value ? 'active' : ''].join(' ')} aria-current='page'>{item.label}</a>
          </li>
        )
      })}
    </ul>
  )
}
