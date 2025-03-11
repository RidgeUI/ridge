export const STORE = 'Promote'
export const PROP = 'props'

export const getStoreValue = (key, composite) => {
  if (key.startsWith(STORE + '.' + PROP)) {
    const [store, prop, label] = key.split('.')
    return composite.properties[label]
  }
  return null
}
