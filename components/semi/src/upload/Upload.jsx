import React from 'react'
import { Upload, Button } from '@douyinfe/semi-ui'

export default ({
  btnText = '点击上传',
  draggable = false,
  fileLimit,
  directory = false,
  maxSize = 10,
  renderContent,
  multiple = true,
  input,
  onChange
}) => {
  const fileChange = (fileList) => {
    const newFileList = [...fileList] // spread to get new array

    let outputValue = newFileList.map(item => URL.createObjectURL(item))
    if (!multiple) {
      outputValue = outputValue[0]
    }
    input && input(outputValue)
    onChange && onChange(outputValue)
  }

  const config = {
    draggable,
    maxSize: maxSize * 1024,
    multiple,
    uploadTrigger: 'custom',
    showUploadList: false,
    directory,
    onFileChange: fileChange
  }

  if (fileLimit) {
    config.accept = fileLimit
  }

  return (
    <Upload {...config}>
      {renderContent && renderContent(config)}
      {!renderContent && <Button>{btnText}</Button>}
    </Upload>
  )
}
