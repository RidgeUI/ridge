import Dropdown from './Dropdown.jsx'
import { boolean, string, radiogroup, optionConfig } from 'ridge-build/src/props.js'
import { funType, size, icon } from '../props.js'
export default {
  name: 'dropdown',
  component: Dropdown,
  title: '下拉菜单',
  icon: 'bi bi-menu-button-fill',
  type: 'react',
  externals: [
    '/bootstrap/dist/js/bootstrap.bundle.min.js'
  ],
  props: [
    string('btnText', '按钮文本', '下拉菜单', true),
    funType,
    icon,
    radiogroup('size', '尺寸', size, 'btn-normal', false),
    boolean('split', '拆分', false, false),
    optionConfig('menus', '下拉列表')
  ],
  events: [{
    label: '菜单项点击',
    name: 'onMenuClick'
  }, {
    label: '按钮点击',
    name: 'onBtnClick'
  }],
  width: 102,
  height: 38
}
