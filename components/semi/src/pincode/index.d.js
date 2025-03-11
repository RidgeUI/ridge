import PinCode from './PinCode.jsx'
import { size } from '../props'
import { value, radiogroup, number, onChange } from 'ridge-build/src/props.js'
export default {
  name: 'PinCode',
  title: '验证码',
  component: PinCode,
  icon: 'icons/pincode.svg',
  type: 'react',
  props: [
    value(),
    size,
    number('count', '长度', 6),
    radiogroup('format', '输入', [{
      label: '数字',
      value: 'number'
    }, {
      label: '字母数字',
      value: 'mixed'
    }])
  ],
  events: [
    onChange,
    {
      name: 'onComplete',
      label: '输入完成'
    }
  ],
  width: 300,
  height: 40

}
