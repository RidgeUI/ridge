import React from 'react'
export default ({
  dataSource,
  columns,
  showLineNumber,
  onClick
}) => {
  return (
    <table className='table table-striped table-hover'>
      <thead>
        <tr>
          {showLineNumber && <th scope='col'>#</th>}
          {columns && columns.map(opt => {
            return <th scope='col' key={opt.value}>{opt.label}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {dataSource && dataSource.map((row, index) =>
          <tr
            key={index} onClick={() => {
              onClick && onClick(row, index, dataSource)
            }}
          >
            {showLineNumber && <th scope='col'>{index + 1}</th>}
            {columns && columns.map(opt => {
              return <td key={opt.value}>{row[opt.value] == null ? '' : row[opt.value]}</td>
            })}
          </tr>)}
      </tbody>
    </table>
  )
}
