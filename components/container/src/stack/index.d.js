import StackContainer from './StackContainer.js'
import { children, classList } from 'ridge-build/src/props'
export default {
  name: 'stack-container',
  component: StackContainer,
  title: '多层容器',
  type: 'vanilla',
  icon: 'icons/RadixIconsStack.svg',
  props: [
    classList(),
    children],
  fullScreenable: true,
  width: 540,
  height: 360
}
