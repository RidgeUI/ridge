import { select } from 'ridge-build/src/props'

const theme = select('theme', '主题', [{
  label: '默认',
  value: 'default'
}, {
  label: 'amy',
  value: 'amy'
}, {
  label: 'ayuLight',
  value: 'ayuLight'
}, {
  label: 'barf',
  value: 'barf'
}, {
  label: 'birdsOfParadise',
  value: 'birdsOfParadise'
}, {
  label: 'clouds',
  value: 'clouds'
}, {
  label: 'espresso',
  value: 'espresso'
}, {
  label: 'solarizedLight',
  value: 'solarizedLight'
}], 'default')

export {
  theme
}
