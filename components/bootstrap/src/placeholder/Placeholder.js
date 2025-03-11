export default ({
  type = '',
  animation = ''
}) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }} className={'placeholder-' + animation}
    >
      <div
        style={{
          width: '100%',
          height: '100%'
        }} className={'placeholder bg-' + type}
      />
    </div>
  )
}
