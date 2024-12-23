import { DatePicker } from 'antd'
// import 'dayjs/locale/zh-cn'

function isTodayRange (current, [before, after]) {
  const targetDate = dayjs(current)
  const today = dayjs()
  const diffInDays = targetDate.diff(today, 'day')

  return diffInDays > before && diffInDays < after
}

const { RangePicker } = DatePicker
export default props => {
  const finalProps = Object.assign({}, props)

  const zh = window.antd?.locales?.zh_CN?.DatePicker
  if (props.isRange) {
    return <RangePicker {...finalProps} locale={zh} />
  } else {
    let disabledDate = null
    if (props.dayRange) {
      disabledDate = (current) => {
        return !isTodayRange(current, [0, props.dayRange])
      }
    }
    return <DatePicker disabledDate={disabledDate} locale={zh} {...finalProps} />
  }
}
