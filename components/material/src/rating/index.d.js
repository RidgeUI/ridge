import { boolean, onChange, value, number } from 'ridge-build/src/props.js'
import Rating from './Rating.jsx'
import { size } from '../utils.js'
export default {
  name: 'Rating',
  component: Rating,
  title: '评分',
  icon: 'icons/rating.svg',
  type: 'react',
  width: 260,
  height: 36,
  props: [
    value(),
    number('max', '最大', 5),
    size,
    boolean('disabled', '禁用', false),
    boolean('readOnly', '只读', false),
    boolean('half', '0.5分', false)
  ],
  events: [onChange]
}
