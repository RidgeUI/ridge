import RidgeContext, { VERSION } from './RidgeContext.js'
import Composite from './node/Composite.js'
import Element from './node/Element.js'
import ValtioStore from './store/ValtioStore.js'
import ReactComposite from './framework/ReactComposite.jsx'
const ELEMENT_SCHEMA_URL = 'https://ridge-ui.com/schemas/element'
const COMPOSITE_SCHEMA_URL = 'https://ridge-ui.com/schemas/composite'
window.Ridge = RidgeContext

window.RidgeCore = {
  ReactComposite
}

export default RidgeContext

export {
  RidgeContext,
  VERSION,
  ELEMENT_SCHEMA_URL,
  COMPOSITE_SCHEMA_URL,
  Composite,
  Element,
  ValtioStore,
  ReactComposite
}
