import SelectIconModal from 'ridgejs-editor/control/SelectIconModal'
import icons from './icons'

export default ({
  value,
  onChange
}) => {
  return (
    <SelectIconModal
      value={value} onChange={onChange} iconList={icons.map(name => {
        return {
          key: name,
          label: name,
          Component: <span
            className='material-icons' style={{
              fontSize: '24px',
              color: '#343a40'
            }}
                     >{name}
          </span>
        }
      })}
    />
  )
}
