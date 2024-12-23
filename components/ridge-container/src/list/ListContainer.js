import createDebug from 'debug'

const debug = createDebug('container:list')

export default class ListContainer {
  constructor (props) {
    this.props = props
  }

  mount (el) {
    this.el = el
    this.containerEl = document.createElement('div')

    try {
      this.containerEl.classList.add(...(this.props.classNames ?? []).join(' ').split(' '))
    } catch (e) {

    }
    // for (const className of this.props.classNames ?? []) {
    //   this.containerEl.classList.add(className)
    // }

    el.appendChild(this.containerEl)
    this.renderUpdate()
  }

  updateChildStyle () {
    if (this.props.template && this.props.template.el) {
      this.props.template.el.style.width = this.props.template.config.style.width + 'px'
      this.props.template.el.style.height = this.props.template.config.style.height + 'px'
    }
  }

  update (props) {
    this.props = props
    this.renderUpdate()
  }

  renderUpdate () {
    const {
      classNames
    } = this.props
    this.containerEl.className = classNames.join(' ')
    Object.assign(this.containerEl.style, this.getContainerStyle())
    if (!this.props.__isEdit) {
      // 运行状态
      this.renderListItems()
    } else {
      this.renderUpdateSlots()
    }
  }

  /**
   * 更新渲染列表插槽内容
   * @param {*} props
   */
  renderUpdateSlots (props) {
    if (props) { // update
      if (props.template !== this.props.template) {
        this.containerEl.append(props.template.el)
      }
    } else {
      // 初始化mount
      if (this.props.template) {
        if (this.props.template.el == null) {
          const el = document.createElement('div')
          this.containerEl.append(el)
          this.props.template.mount(el)
        } else {
          this.containerEl.append(this.props.template.el)
        }
      }
    }
  }

  getContainerStyle () {
    const {
      padding,
      gap,
      layout,
      columns = 2,
      rows = 0
    } = this.props

    const containerStyle = {
      width: '100%',
      height: '100%',
      gap: gap + 'px',
      padding: padding + 'px',
      boxSizing: 'border-box'
    }
    if (layout === 'list') { // 竖行列表： 纵向排列，一行一个
      containerStyle.display = 'flex'
      containerStyle.flexDirection = 'column'
      containerStyle.alignContent = 'flex-start'
      containerStyle.overflow = 'auto'
    }
    if (layout === 'flex') { // 换行列表： 按固定宽度或者定义宽度横向排列、放不下换行
      containerStyle.display = 'flex'
      containerStyle.flexDirection = 'row'
      containerStyle.flexWrap = 'wrap'
      containerStyle.alignContent = 'flex-start'
      containerStyle.overflow = 'auto'
    }
    if (layout === 'grid') { // 矩阵式： 按定义横向横向方式
      containerStyle.display = 'grid'
      containerStyle.overflow = 'auto'
      containerStyle.alignContent = 'start'
      containerStyle.gridTemplateColumns = `repeat(${columns || 1}, 1fr)`
      this.containerEl.style.gridTemplateRows = `repeat(${rows || 1}, 1fr)`
    }
    return containerStyle
  }

  /**
   * 运行期间更新渲染列表
   */
  async renderListItems () {
    if (!this.props.template) return
    const { dataSource, fixed, layout, template, fixedHeight, onItemClick, selected, itemClassNames = [], selectedClassNames = [] } = this.props

    debug('renderListItems', dataSource)
    await template.load(true)
    if (this.items == null) {
      this.items = []
    }

    if (Array.isArray(dataSource)) {
      for (let index = 0; index < dataSource.length; index++) {
        const data = dataSource[index]
        if (this.items[index] == null) {
          const newEl = document.createElement('div')
          const itemComponent = this.props.template.clone()
          itemComponent.setScopedData({
            i: index,
            list: dataSource,
            item: data,
            selected
          })
          itemComponent.mount(newEl)
          this.items[index] = itemComponent
          const itemWrapperStyle = {
            position: '',
            top: '',
            left: '',
            transform: '',
            width: 'auto',
            height: 'auto'
          }

          // 纵列里列表，固定高度
          if (layout === 'list' && fixedHeight) {
            itemWrapperStyle.height = itemComponent.config.style.height + 'px'
          }

          // 换行列表、固定宽高
          if (layout === 'flex' && fixed) {
            itemWrapperStyle.height = itemComponent.config.style.height + 'px'
            itemWrapperStyle.width = itemComponent.config.style.width + 'px'
          }
          Object.assign(newEl.style, itemWrapperStyle)
          this.containerEl.appendChild(newEl)
          newEl.onclick = () => {
            onItemClick && onItemClick(index, data)
          }
        } else {
          this.items[index].setScopedData({
            i: index,
            list: dataSource,
            item: data,
            selected
          })
          this.items[index].forceUpdate()

          this.items[index].el.onclick = () => {
            onItemClick && onItemClick(index, data)
          }
        }
      }
      debug('renderListItems Finsished', dataSource)
      while (this.items.length > dataSource.length) {
        const pop = this.items.pop()
        debug('remove ', pop, dataSource)
        const el = pop.el
        pop.unmount()
        if (el && el.parentElement === this.containerEl) {
          this.containerEl.removeChild(el)
        }
      }
    } else {
      if (this.items.length) {
        for (const itemComponent of this.items) {
          const el = itemComponent.el
          itemComponent.unmount()
          if (el && el.parentElement === this.containerEl) {
            this.containerEl.removeChild(el)
          }
        }
        this.items = []
      }
    }

    for (let i = 0; i < this.containerEl.children.length; i++) {
      const classList = Array.from(this.containerEl.children[i].classList)

      if (selected != null && ((Array.isArray(selected) && selected.includes(i)) || i === selected)) { // 选中状态
        this.containerEl.children[i].className = Array.from(new Set([...classList, ...itemClassNames, ...selectedClassNames])).join(' ')
      } else { // 未选中
        this.containerEl.children[i].className = Array.from(new Set([...classList.filter(name => !selectedClassNames.includes(name)), ...itemClassNames])).join(' ')
      }
    }
  }

  getChildStyle (view) {
    const style = this.getResetStyle()
    const configStyle = view.config.style

    style.width = configStyle.width ? (configStyle.width + 'px') : ''
    style.height = configStyle.height ? (configStyle.height + 'px') : ''
    return style
  }
}
