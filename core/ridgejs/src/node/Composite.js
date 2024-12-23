import ValtioStore from '../store/ValtioStore'
import Element from './Element'
import BaseNode from './BaseNode'
import { STORE, PROP } from '../plugins/promote'
import Debug from 'debug'
const debug = Debug('ridge:composite')

/**
 * 包含多个元素的组合型元素
 **/
class Composite extends BaseNode {
  constructor ({
    id,
    packageName,
    compositePath,
    properties,
    config,
    appPackageObject,
    context
  }) {
    super()
    this.id = id
    this.config = config
    this.compositePath = compositePath
    this.context = context
    this.appPackageObject = appPackageObject
    this.loader = context.loader
    this.packageName = packageName
    this.properties = properties || config.properties
  }

  // 加载页面配置  运行时调用
  async loadConfig () {
    this.config = await this.context.loadComposite(this.packageName, this.compositePath)

    if (this.config == null || !this.config.elements) {
      this.config = null
    }
  }

  // 首屏渲染，决定绘制时即计算，前提：必须加载页面配置文件， 尽最大可能绘制所有可用内容
  firstPaint (el) {
    if (el) {
      this.el = el
    }
    this.firstPainted = true
    this.updateStyle()
    this.initializeNodes()
    // 检测是否位于循环之中，避免上层组件已经是自身
    if (this.el.closest('[composite-id="' + this.getCompositeId() + '"]') !== this.el) {
      this.setStatus('Circular')
    }

    this.children = []
    for (const nodeId of this.config.children ?? []) {
      const element = this.getNode(nodeId)
      if (element) {
        const div = document.createElement('div')
        this.el.appendChild(div)
        element.parent = this
        this.children.push(element)
        element.firstPaint(div)
        //  this.childrenPromises.push(element.mount(div))
      }
    }
  }

  // 根据配置初始化所有节点对象
  initializeNodes () {
    this.nodes = {}
    // 创建每个组件实例
    for (let i = 0; i < this.config.elements.length; i++) {
      const node = this.createElement(this.config.elements[i])
      this.nodes[node.getId()] = node
    }
    this.initChildren()
    this.events = {}
    this.updatePromotedElement()
  }

  /**
   * 根据页面配置读取页面控制对象结构
   * @param {Element} el DOM 根元素
   */
  async initialize () {
    debug(this.packageName, this.compositePath, 'initialize start')
    if (!this.config) {
      this.config = await this.context.loadComposite(this.packageName, this.compositePath)
    }

    if (!this.config) {
      return false
    }
  }

  // 预加载所有组件
  async loadChildren () {
    const promises = []
    if (!this.config) {
      this.config = await this.context.loadComposite(this.packageName, this.compositePath)
    }
    for (const node of Object.values(this.nodes)) {
      promises.push(await node.load())
    }
    await Promise.allSettled(promises)
  }

  getCompositeId () {
    return this.id || `${this.packageName ?? ''}${this.compositePath}`
  }

  getNodes (filter) {
    const nodes = Object.values(this.nodes)
    if (filter) {
      return nodes.filter(filter)
    } else {
      return nodes
    }
  }

  getNode (id) {
    return this.nodes[id]
  }

  getRootNode (id) {
    return this.children.filter(childNode => childNode.id === id)[0]
  }

  getBlobUrl (url) {
    return this.context.getBlobUrl(url, this.packageName)
  }

  initChildren () {
    if (!this.config.children) {
      this.children = Object.values(this.nodes).filter(n => n.config.parent == null)
    } else {
      this.children = Array.from(new Set(this.config.children)).map(id => this.nodes[id]).filter(n => n)
    }

    for (const childNode of this.children) {
      childNode.parent = this
      childNode.initChildren()
    }
  }

  createElement (config) {
    return new Element({
      composite: this,
      config
    })
  }

  getJsModules () {
    return this.jsModules || []
  }

  // 挂载
  async mount (el) {
    if (el) {
      this.el = el

      if (el.ridgeComposite) {
        el.ridgeComposite.unmount()
      }
      this.el.ridgeComposite = this
    }
    debug(this.packageName, this.compositePath, 'mounting')

    if (!this.config) {
      this.setStatus('Loading')
      await this.loadConfig()
    }
    this.removeStatus('Loading')

    if (!this.config) {
      this.setStatus('Page-not-found')
      return
    }
    if (!this.firstPainted) {
      this.firstPaint()
    }

    // 加载应用包定义，以便后续store读取，作为整体应用的配置来源
    if (!this.appPackageObject) {
      this.appPackageObject = await this.context.loadAppPackageJSON(this.packageName)
    }

    debug('style updated')
    await this.importJSFiles()
    await this.loadStore()
    debug(this.packageName, this.compositePath, 'js imported')
    // 挂载前事件
    this.emit('postMount')
    // 挂载根节点
    debug(this.packageName, this.compositePath, 'mounting all root eles')

    const promises = []
    for (const element of this.children ?? []) {
      promises.push(element.mount())
    }
    await Promise.allSettled(promises)

    this.onPageLoaded && this.onPageLoaded()
    debug(this.packageName, this.compositePath, 'mounted')
    this.initializeEvents()
    this.emit('loaded')
  }

  /**
   * 渲染所有根节点。抽取出方法的主要目的是 slot节点要放置到根上， 对于运行期间 slot节点要做特殊处理，不挂载到根上，而编辑期间则无此限制
   */
  async mountRootComponents () {

  }

  // 卸载
  unmount () {
    this.el.classList.remove('ridge-composite')
    this.el.removeAttribute('composite-id')
    // this.el.setAttribute('composite-id', this.getCompositeId())
    if (this.config) {
      const { classNames = [] } = this.config.style
      delete this.el.style.background

      classNames && classNames.forEach(cn => {
        this.el.classList.remove(cn)
      })
      for (const childNode of this.children) {
        const el = childNode.el
        try {
          childNode.unmount()
        } catch (e) {
          //
        }
        if (el && el.parentElement === this.el) {
          this.el.removeChild(el)
        }
      }
      this.store && this.store.destory()
    }
  }

  // 更新自身样式
  updateStyle () {
    this.el.classList.add('ridge-composite')
    this.el.setAttribute('composite-id', this.getCompositeId())
    if (this.config && this.config.style && this.el) {
      this.el.style.background = ''

      if (this.config.style.widthFix) {
        this.el.style.width = this.config.style.width + 'px'
        this.el.style.overflowX = 'hidden'
      } else {
        this.el.style.width = '100%'
      }
      if (this.config.style.heightFix) {
        this.el.style.height = this.config.style.height + 'px'
        this.el.style.overflowY = 'hidden'
      } else {
        this.el.style.height = '100%'
      }
      const { background, classNames = [] } = this.config.style
      background && Object.assign(this.el.style, {
        background
      })
      classNames && classNames.forEach(cn => {
        this.el.classList.add(cn)
      })
    }
  }

  // 更新子节点位置样式
  updateChildStyle (childNode) {
    if (childNode.el) {
      if (childNode.config.full) {
        childNode.el.classList.add('ridge-is-full')
        childNode.el.style.transform = 'none'
        childNode.el.style.width = ''
        childNode.el.style.height = ''
      } else {
        const style = childNode.config.style
        childNode.el.classList.remove('ridge-is-full')
        childNode.el.style.position = 'absolute'
        childNode.el.style.left = 0
        childNode.el.style.top = 0
        childNode.el.style.transform = `translate(${style.x}px, ${style.y}px)`
        childNode.el.style.width = style.width ? (style.width + 'px') : ''
        childNode.el.style.height = style.height ? (style.height + 'px') : ''
      }
    }
  }

  getScopedData () {
    return []
  }

  // 导入页面脚本文件
  async importJSFiles () {
    const { jsFiles } = this.config
    const jsModules = []
    for (const filePath of jsFiles ?? []) {
      try {
        const JsModule = await this.context.loadModule(this.packageName, filePath)
        if (JsModule) {
          JsModule.filePath = filePath
          jsModules.push(JsModule)
        }
      } catch (e) {
        console.error('JS Module Load Fail: ', this.packageName + '/' + filePath)
      }
    }
    this.jsModules = jsModules
  }

  initializeEvents () {
    this.el.onclick = event => {
      this.emit('onClick', [event])
    }
  }

  /**
   * 处理定义在Composite上的事件配置
   * @param {*} name
   * @param {*} payload
   */
  handleInternalEventConfig (name, payload) {
    if (this.config.events && this.config.events[name]) {
      for (const action of this.config.events[name]) {
        if (action.store && action.method) {
          this.store.doStoreAction(action.store, action.method, {
            payload,
            eventArgs: action.payload
          })
        }
      }
    }
  }

  /**
   * 增加外部监听事件
   * @param {*} name
   * @param {*} callback
   */
  on (name, callback) {
    this.events[name] = callback
  }

  /**
   * 事件触发入口
   * @param {*} name
   * @param {*} payload
   */
  emit (name, payload) {
    // 先调用内部循环处理
    this.handleInternalEventConfig(name, payload)
    // 然后发到外部
    if (this.events[name]) {
      this.events[name](payload ?? [])
    }

    if (this.properties[name] && typeof this.properties[name] === 'function') {
      this.properties[name].call(null, payload)
    }
  }

  setProperties (props) {
    this.properties = props

    this.store && this.store.setProperties(this.properties)
    this.updatePromotedElement()
  }

  updatePromotedElement () {
    // 获取Promote的属性
    if (this.nodes) {
      for (const node of Object.values(this.nodes)) {
        for (const [key, value] of Object.entries(node.config.propEx || {})) {
          if (typeof value === 'string' && value.startsWith(STORE + '.' + PROP)) {
            const [store, prop, label] = value.split('.')
            if (this.properties[label]) {
              // TODO promote set to config.prop
              node.config.props[key] = this.properties[label]
              // node.properties[key] = this.properties[label]
              node.forceUpdateProperty()
            }
          }
        }
      }
    }
  }

  /**
   * 加载页面状态库
   * */
  async loadStore () {
    // 加载页面引入的storejs
    this.store = new ValtioStore(this)
    this.store.load(this.jsModules, this.properties)

    // 状态库类型节点
    const storeNodes = this.getNodes().filter(node => node.config.store)

    for (const storeNode of storeNodes) {
      await storeNode.load()
      this.store.load([Object.assign({}, storeNode.componentDefinition.component, {
        name: storeNode.config.id
      })], storeNode.getProperties())
    }
  }
}

export default Composite
