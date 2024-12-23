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
          Component: <i
            style={{
              fontSize: '22px'
            }} className={'bi bi-' + name}
                     />
        }
      })}
    />
  )
}
