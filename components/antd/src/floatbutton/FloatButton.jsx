import { FloatButton } from 'antd'
import { createPortal } from 'react-dom'

export default props => {
  let Cont = null
  if (icons && icons[props.icon]) {
    Cont = icons[props.icon]
  }
  const finalProps = Object.assign({ }, props)

  if (Cont) {
    Object.assign(finalProps, {
      icon: <Cont />
    })
  }

  if (props.__isEdit) {
    return <FloatButton style={{ position: 'fixed', left: 0, top: 0 }} {...finalProps} />
  } else {
    return createPortal(<FloatButton style={{ right: props.right, bottom: props.bottom }} {...finalProps} />, document.body)
  }
}
