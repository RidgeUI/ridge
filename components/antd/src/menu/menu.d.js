import Menu from './Menu.jsx'
export default {
  name: 'menu',
  title: '导航菜单',
  description: '用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。',
  icon: 'icons/menu.svg',
  component: Menu,
  props: [{
    name: 'mode',
    label: '模式',
    type: 'string',
    control: 'select',
    options: [{
      label: '横向',
      value: 'horizontal'
    }, {
      label: '纵向',
      value: 'inline'
    }],
    value: 'inline'
  }, {
    name: 'items',
    label: '菜单项',
    type: 'array',
    control: 'json',
    value: [
      {
        label: '邮件',
        key: 'mail',
        icon: 'MailOutlined'
      },
      {
        label: '应用',
        key: 'app',
        icon: 'AppstoreOutlined',
        disabled: true
      },
      {
        label: '子菜单',
        key: 'SubMenu',
        icon: 'SettingOutlined',
        children: [

          {
            label: 'Option 1',
            key: 'setting:1'
          },
          {
            label: 'Option 2',
            key: 'setting:2'
          },
          {
            type: 'group',
            label: 'Item 2',
            children: [
              {
                label: 'Option 3',
                key: 'setting:3'
              },
              {
                label: 'Option 4',
                key: 'setting:4'
              }
            ]
          }
        ]
      }
    ]
  }],
  externals: ['index.umd.min.js'],
  width: 200,
  height: 375
}
