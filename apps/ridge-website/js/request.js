export default {
  name: 'RequestForm',
  state: {
    name: '',  // 组件名称
    valid: '', // 组件有效性
    iconImage: '', // 图标
    coverImage: '', // 覆盖图
    version: '', // 版本
    description: '', // 描述
    author: '', // 作者
    type: '', // 类型
    requestOk: false, // 请求成功
    npmStatus: '', // 检测的npm状态
    loading: false,  // 加载中
  },

  computed: {
    showErrorMessage: () => {
      return this.valid === false
    }
  },

  async setup () {
    this.axios.defaults.withCredentials = true
    this.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'     
  },

  actions: {
    async fetchFromRepo () { // 获取仓库
      const fetched = await fetch(`//registry.npmmirror.com/${this.name}/latest`, {
        method: 'GET',
        credentials: 'include'
      })
      if (fetched.status === 200) {
        const response = await fetched.json()
        
        if (response.ridgeUserId || response.ridgeType === 'app') {
          this.type = 'app'
        } else if (response.ridgeDist) {
          this.type = 'component'
        } else {
          this.npmStatus = '组件库非ridge平台相关应用或组件'
          return false
        }
        this.iconImage = '//unpkg.com/' + this.name + '/' + response.icon
        this.coverImage = '//unpkg.com/' + this.name + '/' + response.cover
        this.version = response.version
        this.description = response.description
        this.author = typeof response.author === 'object' ? response.author.name : response.author
        this.npmStatus = '名称检测正常'
        return true
      } else {
        this.npmStatus = '组件未发布到npm仓库: ' + `https://registry.npmmirror.com/${this.name}/latest`
        return false
      }
    },
    
    async subscribe () { // 提交
      this.loading = true

      const checked = await this.fetchFromRepo()
      if (!checked) {
        this.loading = false
        return
      }
      try {
        const fetched = await fetch(`/api/repo/request/commit`, {
          method: 'POST',
          headers: {
           'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name
          }),
          credentials: 'include'
        })

        if (fetched.status === 200) {
          const response = await fetched.json()
          if (response.code === '100403') {
            location.href = '#/login'  
          } else {
            this.requestOk = true
          }
        }
      } catch (e) {
        this.npmStatus = '服务暂时不可用，请稍后提交'
        this.loading = false
      }
   }
  }
}
