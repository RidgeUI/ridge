import React from 'react'
import './style.css'
export default ({
  treeData = [],
  classList,
  value,
  input,
  onChange
}) => {
  return (
    <ul className={'list-unstyled ps-0 ' + classList.join(' ')}>
      {treeData && treeData.map((item, index) => {
        return (
          <li className='mb-1' key={index}>
            <button className='btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed' data-bs-toggle='collapse' data-bs-target={'#colla-' + index} aria-expanded='true'>
              {item.label}
            </button>
            {item.children &&
              <div className='collapse show' id={'colla-' + index}>
                <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
                  {item.children.map((subitem, subIndex) => {
                    return (
                      <li key={subIndex}>
                        <a
                          onClick={() => {
                            onChange && onChange(subitem.value)
                            input && input(subitem.value)
                          }} className={'link-body-emphasis d-inline-flex text-decoration-none rounded ' + (subitem.value === value ? 'fw-medium' : '')}
                        >{subitem.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>}
          </li>
        )
      })}
      <li className='border-top my-3' />
    </ul>
  )
}
