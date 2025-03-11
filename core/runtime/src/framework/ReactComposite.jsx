import React, { useRef, useEffect } from 'react'

/**
 * 给出应用的页面（app+page）将其作为React组件进行显示
 */
export default ({
  app,
  path,
  ridge,
  ...args
}) => {
  const ref = useRef(null)

  let ridgeContext = ridge
  if (!ridgeContext) {
    ridgeContext = globalThis.ridge
  }

  if (!ridgeContext) {
    console.error('请在页面引入ridgejs库')
    return <>请在页面引入ridgejs库</>
  }

  useEffect(() => {
    // 只针对 app + path的修改才重新mount，大部分情况应该仅mount一次
    const composite = ridgeContext.createComposite(app, path, args)
    composite.mount(ref.current)
  }, [app, path])

  useEffect(() => {
    if (ref.current.ridgeComposite) {
      ref.current.ridgeComposite.setProperties(args)
    }
  })

  return (
    <div
      ref={ref}
      className='composite-view'
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  )
}
