import Radials from './Radials.jsx'
import { color, slot } from 'ridge-build/src/props.js'
export default {
  name: 'Radials',
  title: '辐射',
  component: Radials,
  icon: 'icons/badge.svg',
  type: 'react',
  props: [
    color('color1', '颜色1', '#FFE20345'),
    color('color2', '颜色2', '#FF5A00FF'),
    color('color3', '颜色3', '#FFDB00FF'),
    color('color4', '颜色4', '#FF0049FF'),
    color('color5', '颜色5', '#FF7000FF'),
    color('color6', '颜色6', '#FF0000FF'),
    slot('slot', '插槽')
  ],
  fullScreenable: true,
  width: 300,
  height: 40
}
