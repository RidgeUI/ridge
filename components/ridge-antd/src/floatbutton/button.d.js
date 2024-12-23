import FloatButton from './FloatButton'

// .split('\n').map(line => {
//   const k = line.split('\t')
//   return { name: k[0], description: k[1], type: k[2], value: k[3]}
// })
export default {
  name: 'float-button',
  title: '浮动按钮',
  component: FloatButton,
  icon: 'icons/float-button.svg',
  props: [
    {
      name: 'icon',
      label: '图标',
      type: 'string',
      control: async () => {
        const Module = await import('../utils/iconControl.js')
        return Module.default
      },
      value: 'HeartFilled'
    }, {
      name: 'right',
      label: '靠右',
      type: 'number',
      value: 24
    }, {
      name: 'bottom',
      label: '靠下',
      type: 'number',
      value: 24
    }, {
      name: 'description',
      label: '描述',
      type: 'string'
    }, {
      name: 'type',
      label: '类型',
      type: 'string',
      control: 'select',
      options: [{
        label: '默认',
        value: 'default'
      }, {
        label: '主要',
        value: 'primary'
      }],
      value: 'default'
    }, {
      name: 'shape',
      label: '形状',
      type: 'string',
      control: 'select',
      options: [{
        label: '圆形',
        value: 'circle '
      }, {
        label: '方形',
        value: 'square'
      }],
      value: 'square'
    }, {
      name: 'badge',
      label: '徽标'
    }
  ],
  externals: ['index.umd.min.js'],
  events: [{
    label: '单击事件',
    name: 'onClick'
  }],
  width: 40,
  height: 40
}
