import BaseContainer from '../BaseContainer'

export default class FlexBoxContainer extends BaseContainer {
  getContainerStyle () {
    const {
      // 相关系统变量
      direction = 'row',
      alignItems = 'stretch',
      gap = 0,
      padding,
      flexWrap,
      justify = 'flex-start',
      rectStyle
    } = this.props
    const containerStyle = {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: direction,
      flexWrap: flexWrap ? 'wrap' : 'no-wrap',
      justifyContent: justify,
      alignItems,
      boxSizing: 'border-box',
      padding: padding + 'px',
      gap: gap + 'px'
    }

    Object.assign(containerStyle, rectStyle)
    return containerStyle
  }

  // 放入一个新的rect后，根据位置放置其所在子节点的索引
  checkNodeOrder (rect) {
    const centerX = rect.x + rect.width / 2
    const centerY = rect.y + rect.height / 2
    const childNodes = this.containerEl.childNodes
    const {
      // 相关系统变量
      direction = 'row'
    } = this.props

    if (direction === 'row') {
      // 横向
      for (let i = 0; i < childNodes.length; i++) {
        const bc = childNodes[i].getBoundingClientRect()
        const compareX = bc.x + bc.width / 2
        if (compareX > centerX) {
          return i
        }
      }
    } else if (direction === 'column') {
      // 纵向
      for (let i = 0; i < childNodes.length; i++) {
        const bc = childNodes[i].getBoundingClientRect()
        const compareY = bc.y + bc.height / 2
        if (compareY > centerY) {
          return i
        }
      }
    }
    return -1
  }

  childSelected (node) {
    const configStyle = node.config.style
    // 调整实际宽度
    if (!configStyle.flex && !configStyle.autoSize) {
      if (this.props.direction === 'row' && node.el.offsetWidth !== 0) {
        node.el.style.width = node.el.offsetWidth + 'px'
        node.config.style.width = node.el.offsetWidth
      } else if (node.el.offsetHeight !== 0) {
        node.el.style.height = node.el.offsetHeight + 'px'
        node.config.style.height = node.el.offsetHeight
      }
    }
  }

  getChildStyle (node) {
    const style = this.getResetStyle()
    const configStyle = node.config.style

    if (!configStyle.visible) {
      style.display = 'none'
    } else {
      style.display = ''
    }
    if (configStyle.flex) {
      style.flex = configStyle.flex
      style.overflow = 'hidden'
    } else {
      style.flex = ''
      // 主轴方向宽高
      if (!configStyle.autoSize) { // 非自由长度(固定长度)
        if (this.props.direction === 'row') {
          style.width = configStyle.width ? (configStyle.width + 'px') : ''
        } else {
          style.height = configStyle.height ? (configStyle.height + 'px') : ''
        }
      }
    }
    // 交叉轴高度
    if (this.props.alignItems !== 'stretch') {
      if (this.props.direction === 'row') {
        style.height = configStyle.height ? (configStyle.height + 'px') : ''
      } else if (this.props.direction === 'column') {
        style.width = configStyle.width ? (configStyle.width + 'px') : ''
      }
    }
    return style
  }
}
