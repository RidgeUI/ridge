import BaseContainer from '../BaseContainer.js'
import './style.css'

/**
 * 内容切换显示容器
 */
export default class SwitchContainer extends BaseContainer {
  /**
   * 容器挂载
   * @param {*} el
   */
  async mounted () {
    this.containerEl.classList.add('switch-container')
    this.forceUpdateChildren = true
    await this.toggleState()
  }

  /**
   * 切换到显示某个内容元素, 当未加载时,执行加载和初始化动作
   */
  async toggleState (index) {
    const { current } = this.props
    const childElements = this.containerEl.children

    if (childElements.length > 0) {
      let currentIndex = current == null ? this.containerEl.children[0].getAttribute('ridge-title') : current
      if (index != null) {
        currentIndex = index
      }

      for (let i = 0; i < childElements.length; i++) {
        if (currentIndex === childElements[i].getAttribute('ridge-title') || current === i || (i === 0 && current === true) || (i === 1 && current === false)) {
          childElements[i].style.display = ''
          childElements[i].setAttribute('toggle-on', true)
          if (childElements[i].getAttribute('ridge-mount') !== 'mounted') {
            childElements[i].ridgeNode.mount(childElements[i])
          }
        } else {
          childElements[i].removeAttribute('toggle-on')
          childElements[i].style.display = 'none'
        }
      }
    }
  }

  // 挂载子节点：  但是像Tab容器这样，可以延迟挂载
  async mountChildNode (childNode, div) {
    const { preload } = this.props

    if (preload || this.isEditor) {
      await childNode.mount(div)
    } else {
      div.setAttribute('ridge-title', childNode.config.title)
      div.ridgeNode = childNode
    }
  }

  // Editor Only
  childSelected (childEl) {
    // const childElements = this.getChildElements()

    this.toggleState(childEl.getConfig().title)
  }

  onChildRemoved () {
    this.toggleState()
  }

  onChildAppended (childNode) {
    const childElements = this.getChildElements()
    this.toggleState(childElements.indexOf(childNode.el))
  }

  updated () {
    this.toggleState()
    this.containerEl.classList.add('switch-container')
  }

  getChildStyle (view) {
    const style = this.getResetStyle()

    style.width = '100%'
    style.height = '100%'
    style.position = 'absolute'
    style.left = 0
    style.top = 0
    return style
  }

  onStyleUpdated () {
    this.containerEl.style.position = 'relative'
  }
}
