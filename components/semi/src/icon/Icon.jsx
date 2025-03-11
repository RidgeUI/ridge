import React, { useEffect, useState } from 'react'
import { Icon } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'
import './icon.less'

const loadSvg = (src, loaded) => {
  fetch(src.replace(/\/+/g, '/'))
    .then(response => response.text())
    .then(svgString => {
      // 注意：在浏览器环境中，你可能需要使用原生的DOMParser
      // 但如果你正在Node环境中或者想要更好的兼容性，你可以使用'xmldom'
      try {
        const parser = new window.DOMParser()
        const svgDoc = parser.parseFromString(svgString, 'image/svg+xml')
        loaded && loaded(svgString)
      } catch (e) {
      }
      // this.setState({ svgContent: svgString })
    })
    .catch(error => {
      console.error('Error fetching SVG:', error)
    })
}

export default ({
  icon,
  color,
  size,
  classList
}) => {
  const [svg, setSvg] = useState(null)
  const IconComponent = SemiIcons[icon]

  const style = {
    width: '100%',
    fontSize: size + 'px',
    color
  }
  useEffect(() => {
    if (!IconComponent && icon) {
      loadSvg(icon, svgString => {
        setSvg(svgString)
      })
    }
  })
  if (IconComponent) {
    return <IconComponent style={style} className={classList.join(' ')} />
  } else {
    return (
      <Icon
        style={style} svg={<div
          className='semi-svg-dangerous'
          style={{
            width: '100%',
            height: '100%'
          }}
          dangerouslySetInnerHTML={{ __html: svg }}
                           />}
      />
    )
  }
}
