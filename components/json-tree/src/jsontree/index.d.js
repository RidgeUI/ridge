import JSONTree from './JSONTree.jsx'
import { boolean, json } from 'ridge-build/src/props.js'
export default {
  name: 'JSONTree',
  title: 'JSON树',
  component: JSONTree,
  icon: 'icons/CarbonContainerRegistry.svg',
  type: 'react',
  props: [
    json(),
    boolean('invertTheme', '浅色', true)
  ],
  width: 120,
  height: 120
}
