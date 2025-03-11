import SelectIconModal from 'ridgejs-editor/control/SelectIconModal'
import * as SemiIcons from '@douyinfe/semi-icons'

export default ({
  value,
  onChange
}) => {
  const icons = Object.keys(SemiIcons).filter(key => key.startsWith('Icon')).map(name => {
    const Componet = SemiIcons[name]
    return {
      key: name,
      label: name,
      Component: <Componet />
    }
  })

  return (
    <SelectIconModal
      value={value} onChange={onChange} iconList={icons}
    />
  )
}
