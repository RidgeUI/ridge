import './style.css'
import { radiogroup, select } from 'ridge-build/src/props'

const color = select('color', '颜色', [
  'primary', 'secondary', 'success', 'error', 'info', 'warning'
], 'primary', false, false)

const btnColor = select('color', '颜色', [
  'inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'
], 'primary')

const btnVariant = radiogroup('variant', '样式', [{
  label: '文本',
  value: 'text'
}, {
  label: '默认',
  value: 'contained'
}, {
  label: '边框',
  value: 'outlined'
}])

const size = radiogroup('size', '尺寸', [{
  label: '小',
  value: 'small'
}, {
  label: '中',
  value: 'medium'
}, {
  label: '大',
  value: 'large'
}])

const size2 = radiogroup('size', '尺寸', [{
  label: '小',
  value: 'small'
}, {
  label: '中',
  value: 'medium'
}])

const variant = radiogroup('variant', '样式', [{
  label: '有边',
  value: 'outlined'
}, {
  label: '默认',
  value: 'standard'
}, {
  label: '填充',
  value: 'filled'
}])

const inputType = radiogroup('type', '类型', [{
  label: '文本',
  value: 'text'
}, {
  label: '密码',
  value: 'password'
}, {
  label: '填充',
  value: 'filled'
}])

const icon = {
  name: 'icon',
  label: '图标',
  type: 'string',
  value: 'home',
  control: () => import('./icon/IconSelect.jsx'),
  connect: true
}

const orientation = radiogroup('orientation', '方向', [{
  label: '横向',
  value: 'horizontal'
}, {
  label: '纵向',
  value: 'vertical'
}])

export {
  btnVariant,
  variant,
  color,
  btnColor,
  size,
  size2,
  orientation,
  icon
}
