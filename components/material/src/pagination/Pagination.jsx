import { Pagination } from '@mui/material'

export default ({
  value,
  variant,
  size,
  input,
  color,
  count,
  onChange
}) => {
  const properties = {
    page: value,
    color,
    variant,
    count,
    size,
    onChange: (event, page) => {
      input && input(page)
      onChange && onChange(page)
    }
  }
  return <Pagination {...properties} />
}
