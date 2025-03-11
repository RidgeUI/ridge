import createDebug from 'debug'

const debug = createDebug('container:list')

export default class ListContainer {
  constructor (props) {
    this.props = props
  }

  mount (el) {
    this.el = el
    if (!this.scrollerEl) {
      this.scrollerEl = document.createElement('div')
      this.containerEl = document.createElement('div')

      this.scrollerEl.style.width = '100%'
      this.scrollerEl.style.height = '100%'
      // for (const className of this.props.classNames ?? []) {
      //   this.containerEl.classList.add(className)
      // }

      el.appendChild(this.scrollerEl)
      this.scrollerEl.appendChild(this.containerEl)
      this.renderUpdate()
    }
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
    this.scrollerEl.className = classNames.join(' ')
    Object.assign(this.containerEl.style, this.getContainerStyle())
    Object.assign(this.scrollerEl.style, this.getScrollerStyle())
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

  getScrollerStyle () {
    const {
      layout,
      padding
    } = this.props
    if (layout === 'list' || layout === 'flex' || layout === 'grid') {
      return {
        boxSizing: 'border-box',
        padding: padding + 'px',
        overflow: 'hidden auto'
      }
    }
    if (layout === 'line') {
      return {
        boxSizing: 'border-box',
        padding: padding + 'px',
        overflow: 'auto hidden'
      }
    }
  }

  getContainerStyle () {
    const {
      gap,
      layout
    } = this.props

    const containerStyle = {
      gap: gap + 'px',
      display: 'flex',
      padding: 0
    }
    if (layout === 'list') { // 竖行列表： 纵向排列，一行一个
      containerStyle.width = '100%'
      containerStyle.flexDirection = 'column'
    }
    if (layout === 'line') { // 单行模式
      containerStyle.height = '100%'
      containerStyle.width = 'fit-content'
      containerStyle.flexDirection = 'row'
    }
    if (layout === 'flex') { // 横向
      containerStyle.width = '100%'
      containerStyle.flexDirection = 'row'
      containerStyle.flexWrap = 'wrap'
    }
    if (layout === 'grid') { // 矩阵式： 按定义横向横向方式
      containerStyle.width = '100%'
      containerStyle.height = '100%'
      containerStyle.flexDirection = 'row'
      containerStyle.flexWrap = 'wrap'
    }
    return containerStyle
  }

  /**
   * 运行期间更新渲染列表
   */
  async renderListItems () {
    if (!this.props.template) return
    const { dataSource, fixed, layout, gap, padding, rows, columns, template, fixedHeight, fixedWidth, onItemClick, selected, itemClassNames = [], selectedClassNames = [] } = this.props

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
          // 单行列表，固定宽度
          if (layout === 'line' && fixedWidth) {
            itemWrapperStyle.width = itemComponent.config.style.width + 'px'
          }

          // 换行列表、固定宽高
          if (layout === 'flex' && fixed) {
            itemWrapperStyle.height = itemComponent.config.style.height + 'px'
            itemWrapperStyle.width = itemComponent.config.style.width + 'px'
          }
          // 换行列表、固定宽高
          if (layout === 'grid') {
            // itemWrapperStyle.flex = `1 1 calc((100% - ${gap * (columns - 1)}px) / ${columns})`
            itemWrapperStyle.height = `calc((100% - ${gap * (rows - 1)}px) / ${rows})`
            itemWrapperStyle.width = `calc((100% - ${gap * (columns - 1)}px) / ${columns})`
            // itemWrapperStyle.height = (100 / rows) + '%'
          }

          Object.assign(newEl.style, itemWrapperStyle)
          this.containerEl.appendChild(newEl)
          newEl.onclick = () => {
            onItemClick && onItemClick(index, data)
          }

          if (data != null) {
            itemComponent.mount(newEl)
          } else {
            itemComponent.el = newEl
          }
        } else {
          this.items[index].setScopedData({
            i: index,
            list: dataSource,
            item: data,
            selected
          })
          if (data == null) {
            this.items[index].unmount()
          } else {
            if (!this.items[index].getIsMounted()) {
              this.items[index].mount()
            } else {
              this.items[index].forceUpdate()
            }
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
        // this.containerEl.children[i].classList.add('ridge-is-selected')
        this.containerEl.children[i].className = Array.from(new Set([...classList, ...itemClassNames, ...selectedClassNames])).join(' ')

        // 2. 创建自定义事件
        const customEvent = new CustomEvent('selected', {
          bubbles: true
        })
        this.containerEl.children[i].dispatchEvent(customEvent)
      } else { // 未选中
        // this.containerEl.children[i].classList.remove('ridge-is-selected')
        this.containerEl.children[i].className = Array.from(new Set([...classList.filter(name => !selectedClassNames.includes(name)), ...itemClassNames])).join(' ')
        this.containerEl.children[i].dispatchEvent(new CustomEvent('unselected', {
          bubbles: true
        }))
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
