import Rating from './Rating.jsx'
import { icon, size } from '../props.js'
import { value, radiogroup, number, onChange, boolean } from 'ridge-build/src/props.js'
export default {
  name: 'Rating',
  title: '评分',
  component: Rating,
  icon: 'icons/rating.svg',
  type: 'react',
  props: [
    value(),
    size,
    number('count', '长度', 5),
    boolean('allowHalf', '半星', true),
    boolean('disabled', '禁用', true)
  ],
  events: [
    onChange
  ],
  width: 300,
  height: 40

}
