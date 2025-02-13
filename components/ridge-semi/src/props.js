import { boolean, string, value, classList, radiogroup } from 'ridge-build/src/props.js'
const size = {
  name: 'size',
  label: '尺寸',
  type: 'string',
  control: 'radiogroup',
  options: [
    {
      label: '小',
      value: 'small'
    },
    {
      label: '正常',
      value: 'default'
    },
    {
      label: '大',
      value: 'large'
    }
  ],
  value: 'default'
}

const size2 = {
  name: 'size',
  label: '尺寸',
  type: 'string',
  control: 'radiogroup',
  options: [
    {
      label: '小',
      value: 'small'
    },
    {
      label: '正常',
      value: 'default'
    }
  ],
  value: 'default'
}
const disabled = boolean('disabled', '禁用', false)

const validateStatus = {
  name: 'validateStatus',
  label: '校验状态',
  type: 'string',
  control: 'radiogroup',
  options: [{
    label: '正常',
    value: 'default'
  }, {
    label: '错误',
    value: 'error'
  }, {
    label: '警告',
    value: 'warning'
  }],
  value: 'default'
}
const btnType = {
  name: 'type',
  label: '类型',
  type: 'string',
  control: 'select',
  options: [
    {
      label: '主要',
      value: 'primary'
    },
    {
      label: '次要',
      value: 'secondary'
    },
    {
      label: '第三',
      value: 'tertiary'
    },
    {
      label: '警告',
      value: 'warning'
    },
    {
      label: '危险',
      value: 'danger'
    }
  ]
}
const type = {
  name: 'type',
  label: '类型',
  type: 'string',
  control: 'select',
  options: [
    {
      label: '主要',
      value: 'primary'
    },
    {
      label: '次要',
      value: 'secondary'
    },
    {
      label: '第三',
      value: 'tertiary'
    },
    {
      label: '第四',
      value: 'quaternary'
    },
    {
      label: '警告',
      value: 'warning'
    },
    {
      label: '危险',
      value: 'danger'
    },
    {
      label: '成功',
      value: 'success'
    }
  ],
  value: 'primary'
}

const btnTheme = radiogroup('theme', '主题', [{
  label: '浅色',
  value: 'light'
}, {
  label: '深色',
  value: 'solid'
}, {
  label: '无',
  value: 'borderless'
}, {
  label: '边框',
  value: 'outline'
}])

const tagTheme = radiogroup('type', '样式类型', [
  {
    label: '默认',
    value: 'light'
  }, {
    label: '浅色',
    value: 'ghost'
  }, {
    label: '深色',
    value: 'solid'
  }
])

const icon = {
  name: 'icon',
  label: '图标',
  type: 'string',
  connect: true,
  btnText: '选择',
  control: () => import('./icon/IconSelect.jsx'),
  value: 'IconLanguage'
}

const color = {
  name: 'color',
  label: '颜色',
  type: 'string',
  control: 'select',
  options: 'amber, blue, cyan, green, grey, indigo, light-blue, light-green, lime, orange, pink, purple, red, teal, violet, yellow, white'.split(',').map(v => {
    return {
      label: v.trim(),
      value: v.trim()
    }
  }),
  connect: true,
  value: 'blue'
}

const colorStage = {
  name: 'colorStage',
  label: '梯度',
  type: 'string',
  control: 'select',
  options: '0,1,2,3,4,5,6,7,8,9'.split(',').map(v => {
    return {
      label: v.trim(),
      value: v.trim()
    }
  }),
  value: '5'
}

const direction = radiogroup('direction', '方向', [{
  label: '横向',
  value: 'horizontal'
}, {
  label: '纵向',
  value: 'vertical'
}], 'horizontal')

export {
  icon,
  color,
  size,
  size2,
  disabled,
  btnType,
  btnTheme,
  direction,
  colorStage,
  tagTheme,
  validateStatus,
  type
}
