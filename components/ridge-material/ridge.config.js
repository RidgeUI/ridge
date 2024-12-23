module.exports = {
  localNpmDir: '../../public/npm',
  configureWebpack: {
    externals: {
      '@mui/material': 'MaterialUI',
      '@douyinfe/semi-ui': 'SemiUI',
      '@douyinfe/semi-icons': 'SemiIcons'
    }
  }
}
