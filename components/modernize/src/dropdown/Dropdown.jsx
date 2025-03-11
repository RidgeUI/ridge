import React from 'react'
export default ({
  btnText,
  type = 'primary',
  size,
  icon,
  split,
  menus = [],
  onMenuClick
}) => {
  const btnClassList = ['btn', 'btn-' + type, 'btn-' + size]
  const toggleClassList = ['btn', 'btn-' + type, 'btn-' + size, 'dropdown-toggle', 'dropdown-toggle-split']

  if (!split) {
    btnClassList.push('dropdown-toggle')
  }
  return (
    <div className='btn-group'>
      <button className={btnClassList.join(' ')} type='button' data-bs-toggle='dropdown' aria-expanded='false'>
        {icon && <i className={'bi me-2 bi-' + icon} />}
        {btnText}
      </button>
      {split &&
        <button type='button' className={toggleClassList.join(' ')} data-bs-toggle='dropdown' aria-expanded='false'>
          <span class='visually-hidden'>Toggle Dropdown</span>
        </button>}
      <ul className='dropdown-menu'>
        {menus.map(menu =>
          <li key={menu.value}>
            <a
              className='dropdown-item' href='#' onClick={() => {
                onMenuClick && onMenuClick(menu.value, menu.label)
              }}
            >{menu.label}
            </a>
          </li>)}
      </ul>
    </div>
  )
}
