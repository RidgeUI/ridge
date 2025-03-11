import React from 'react'
import { Upload, Button, Avatar } from '@douyinfe/semi-ui'
import * as SemiIcons from '@douyinfe/semi-icons'

export default ({
  type,
  icon,
  btnText = '点击上传',
  url,
  fileLimit,
  directory,
  maxSize,
  multiple,
  input,
  onChange
}) => {
  const IconComponent = SemiIcons[icon]
  const IconPlus = SemiIcons.IconPlus
  const style = {
    backgroundColor: 'var(--semi-color-overlay-bg)',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--semi-color-white)'
  }
  const hoverMask = (
    <div style={style}>
      {IconComponent && <IconComponent />}
    </div>
  )

  const fileChange = (fileList) => {
    const newFileList = [...fileList] // spread to get new array

    let outputValue = newFileList.map(item => URL.createObjectURL(item))
    if (!multiple) {
      outputValue = outputValue[0]
    }
    input && input(outputValue)
    onChange && onChange(outputValue)
  }
  const acceptProp = {
    action: 'https://api.semi.design/upload',
    uploadTrigger: 'custom',
    showUploadList: false,
    maxSize: maxSize * 1024
  }
  if (fileLimit) {
    acceptProp.accept = fileLimit
  }
  if (type === 'draggable') {
    return (
      <Upload
        dragIcon={IconComponent && <IconComponent />}
        draggable
        {...acceptProp}
        dragMainText='点击上传文件或拖拽文件到这里'
        onFileChange={fileChange}
      />
    )
  } else {
    return (
      <Upload
        action='https://api.semi.design/upload'
        listType={type}
        directory={directory}
        multiple={multiple}
        {...acceptProp}
        onFileChange={fileChange}
        onChange={({ fileList }) => {
          console.log('onChange', fileList)
        }}
      >
        {type === 'button' &&
          <Button icon={IconComponent ? <IconComponent /> : null} theme='light'>
            {btnText}
          </Button>}
        {type === 'avatar' &&
          <Avatar src={url} hoverMask={hoverMask} />}
        {type === 'picture' && (IconComponent ? <IconComponent size='extra-large' /> : <IconPlus size='extra-large' />)}
      </Upload>
    )
  }
}
