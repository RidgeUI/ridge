export default {
  name: 'UserPanel',
  state: {
    userAvatar: '',
    userId: '',
    loginUserModalVisible: '0',
    displayState: ''
  },

  computed: {
  },

  async setup () {
    this.checkLoginStatus()
  },

  destory () {
  },

  watch: {
  },

  actions: {
    getServerUrl () {
      return this.composite.appPackageObject.ridgeServerUrl || 'http://localhost:7080'
    },

    async checkLoginStatus () {
      const response = await this.axios.get(this.getServerUrl() + '/api/user/current')

      if (response.data.session.user) {
        this.state.userId = response.data.session.user.id
        this.state.displayState = 'logon'
      } else {
        this.state.displayState = 'unlogin'
      }
    },
    openLoginModal () { // 打开登录框
      this.state.loginUserModalVisible = '1'
    },

    loginConfirmed () { // 登录成功
      this.checkLoginStatus()
    }
  }
}
