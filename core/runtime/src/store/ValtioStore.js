import debug from 'debug'
import StoreObject from './StoreObject'
import { PROP, STORE } from '../plugins/promote'

const log = debug('ridge:store')
const error = debug('ridge:store-error')
/**
 * Store engine based on Valtio Lib(Proxied Object)
 **/
export default class RidgeStore {
  constructor (composite) {
    this.composite = composite // 所在组件
    this.properties = composite.properties // 初始化store参数属性

    // 仓库对象
    this.storeObjects = {}
  }

  // 更改参数，更改后，store按属性重新更新状态
  setProperties (properties) {
    this.properties = properties
    for (const storeObject of Object.values(this.storeObjects)) {
      storeObject.updateProps(properties)
    }
  }

  /**
   * Load & Init JS-Stores
   **/
  load (modules, properties) {
    for (const StoreModule of Array.isArray(modules) ? modules : [modules]) {
      this.registerPageStore(StoreModule, properties)
    }
  }

  /**
   * 获取状态值，支持以下格式
   * 'storeName.state.stateName'
   * 'storeName.computed.computeValue'
   * @param {*} expr 状态值表达式
   * @param {*} payload 为scoped时 计算的参数。 注意如果多层嵌套，就会有多个scope，所有payload是个数组
   * @returns
   */
  getStoreValue (expr, scopes) {
    const [storeKey, type, ...stateName] = expr.split('.')

    if (storeKey === STORE && type === PROP) {
      return this.properties[stateName[0]]
    } else if (this.storeObjects[storeKey]) {
      return this.storeObjects[storeKey].getValue(type, stateName.join('.'), scopes)
    }
  }

  // 对表达式进行订阅
  subscribe (expr, cb) {
    if (!expr) return
    try {
      const [storeKey, type, ...stateName] = expr.split('.')
      log('subscribe', expr)

      if (this.storeObjects[storeKey]) {
        this.storeObjects[storeKey].subscribe(type, stateName, cb)
      }
    } catch (e) {
      console.error('subscribe error', expr, e)
    }
  }

  // 设置状态改变
  dispatchChange (expr, val, scoped) {
    const [storeKey, type, ...stateName] = expr.split('.')
    if (this.storeObjects[storeKey]) {
      this.storeObjects[storeKey].dispatchChange(type, stateName.join('.'), val, scoped)
    }
  }

  // 执行动作
  doStoreAction (storeName, actionName, event) {
    if (this.storeObjects[storeName]) {
      this.storeObjects[storeName].doStoreAction(actionName, event)
    }
  }

  // 进行Store初始化
  registerPageStore (StoreModule, properties) {
    log('RegisterPageStore', StoreModule)
    if (!StoreModule.name) {
      log('Store Not Registered: No Name')
      return
    }
    const moduleName = StoreModule.name

    this.storeObjects[moduleName] = new StoreObject(StoreModule, this.composite)
    this.storeObjects[moduleName].initStore(properties)
  }

  destory () {
    for (const store of Object.values(this.storeObjects)) {
      store.destory()
    }
  }
}
