module.exports = {
  externals: [
    {
      module: 'react',
      root: 'React',
      dist: 'react@18.2.0/umd/react.production.min.js'
    },
    {
      module: 'react-dom',
      dependencies: ['react'],
      root: 'ReactDOM',
      dist: 'react-dom@18.2.0/umd/react-dom.production.min.js'
    },
    {
      module: 'vue',
      root: 'Vue',
      dist: 'vue/dist/vue.min.js'
    },
    {
      module: 'ridgejs',
      root: 'RidgeCore'
    },
    {
      module: 'debug',
      root: 'createDebug'
    },
    {
      module: 'ridgejs-editor',
      root: 'RidgeEditor'
    }
  ]
}
