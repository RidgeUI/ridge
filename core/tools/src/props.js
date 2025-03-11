const boolean = (name = 'boolean', label = '布尔', defaultValue = true, connect = true) => {
  return {
    name,
    label,
    type: 'boolean',
    width: '50%',
    connect,
    value: defaultValue
  }
}

const number = (name = 'number', label = '数字', defaultValue = 0, connect = true) => {
  return {
    name,
    label,
    type: 'number',
    width: '50%',
    connect,
    value: defaultValue
  }
}

const icon = (name = 'icon', label = '图标') => {
  return {
    name,
    label,
    type: 'string',
    control: 'icon'
  }
}

const string = (name = 'text', label = '文本', defaultValue = '文本', connect = true) => {
  return {
    name,
    label,
    type: 'string',
    value: defaultValue,
    connect
  }
}

const value = (type = 'string', label = '取值', value = '') => {
  return {
    name: 'value',
    type,
    label,
    connect: true,
    value
  }
}

const classList = (name = 'classList', label = '样式') => {
  return {
    name,
    label,
    type: 'style',
    connect: true,
    value: []
  }
}

const image = (name = 'src', label = '图片') => ({
  name,
  type: 'file',
  fileType: 'image',
  multiple: false,
  label,
  connect: true,
  value: ''
})

const mapOptionList = optionList => {
  if (Array.isArray(optionList)) {
    return optionList.map(item => {
      if (typeof item === 'string') {
        return {
          label: item,
          value: item
        }
      } else {
        return item
      }
    })
  } else if (typeof optionList === 'string') {
    const list = optionList.split(/[, ;]/)
    return mapOptionList(list)
  }
}

const radiogroup = (name = 'radiogroup', label = '切换', optionList = [{
  label: '大',
  value: 'btn-lg'
}, {
  label: '正常',
  value: 'btn-normal'
}, {
  label: '小',
  value: 'btn-sm'
}], value, connect = true) => {
  return {
    name,
    label,
    type: 'string',
    control: 'radiogroup',
    optionList: mapOptionList(optionList),
    connect,
    value: value == null ? optionList[0]?.value : value
  }
}

const select = (name = 'select', label = '选择', optionList = [
  {
    label: '大',
    value: 'btn-lg'
  }, {
    label: '正常',
    value: 'btn-normal'
  }
], value, connect = true, required = true) => {
  let list = []
  if (Array.isArray(optionList)) {
    list = optionList.map(item => {
      if (typeof item === 'string') {
        return {
          label: item,
          value: item
        }
      } else {
        return item
      }
    })
  }

  return {
    name,
    label,
    type: 'string',
    control: 'select',
    optionList: list,
    required,
    connect,
    value
  }
}

const slot = (name = 'slot', label = '插槽') => {
  return {
    name,
    label,
    type: 'slot'
  }
}

const color = (name = 'color', label = '颜色', value = '', connect = true) => {
  return {
    name,
    label,
    type: 'color',
    value,
    connect
  }
}

const onClick = {
  label: '单击',
  name: 'onClick'
}
const onChange = {
  label: '改变',
  name: 'onChange'
}

const event = (name, label) => {
  return {
    label, name
  }
}

const children = {
  name: 'children',
  hidden: true,
  type: 'children'
}

const optionConfig = (name = 'options', label = '选项列表', value = [{
  label: '选项1',
  value: 'value1'
}, {
  label: '选项2',
  value: 'value2'
}]) => {
  return {
    name,
    label,
    value,
    type: 'string',
    connect: true,
    control: () => import('ridgejs-editor/control/OptionConfig.jsx')
  }
}

const objectFit = {
  label: '适应',
  name: 'objectFit',
  type: 'string',
  control: 'select',
  optionList: [{
    label: '填充',
    value: 'object-fit-fill'
  }, {
    label: '适应',
    value: 'object-fit-contain'
  }, {
    label: '拉伸',
    value: 'object-fit-cover'
  }, {
    label: '原始',
    value: 'object-fit-none'
  }, {
    label: '重复',
    value: 'object-fit-repeat'
  }]
}
const json = (name = 'json', label = '对象', value = {}, connect = true) => {
  return {
    name,
    label,
    value,
    connect,
    type: 'object'
  }
}

const file = (name = 'file', label = '文件', value = '', connect = true) => {
  return {
    name,
    label,
    value,
    connect,
    type: 'file'
  }
}

const array = (name = 'array', label = '数组', value = []) => {
  return {
    name,
    label,
    value,
    type: 'object'
  }
}

export { boolean, image, number, value, string, file, json, select, array, icon, color, children, classList, radiogroup, optionConfig, slot, onClick, onChange, event, objectFit }
