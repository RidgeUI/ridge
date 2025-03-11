export default ({ value, onChange }) => {
  return (
    <input
      value={value} onChange={e => {
        const newVal = e.target.value
        onChange(newVal)
      }}
    />
  )
}
