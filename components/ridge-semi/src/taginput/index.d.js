import TagInput from './TagInput.jsx'
import { size, validateStatus } from '../props.js'
import { value, onChange, boolean } from 'ridge-build/src/props.js'
export default {
  name: 'TagInput',
  title: '标签输入',
  component: TagInput,
  icon: 'icons/tag-input.svg',
  type: 'react',
  props: [
    value(),
    size,
    validateStatus,
    boolean('disabled', '禁用', false)
  ],
  events: [
    onChange
  ],
  width: 300,
  height: 40

}
