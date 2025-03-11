import React, { useEffect } from 'react'
import './github-markdown.css'

const dataURLtoBlob = async (dataURL) => {
  const res = await fetch(dataURL)
  const blob = await res.blob()
  return blob
}

const dataURLToString = async dataURL => {
  const blob = await dataURLtoBlob(dataURL)
  return await blob.text()
}

export default ({
  mdfile
}) => {
  const ref = React.createRef()

  useEffect(() => {
    if (mdfile) {
      dataURLToString(mdfile).then(text => {
        ref.current.innerHTML = window.marked.parse(text)
        ref.current.scrollTop = 0
      })
    }
  })
  return <div className='markdown-body' ref={ref} />
}
