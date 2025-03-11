module.exports = {
  localNpmDir: '../../public/npm',
  configureWebpack: {
    externals: {
      antd: 'antd',
      '@douyinfe/semi-ui': 'SemiUI',
      '@douyinfe/semi-icons': 'SemiIcons',
      '@ant-design/icons': 'icons'
    }
  }
}
