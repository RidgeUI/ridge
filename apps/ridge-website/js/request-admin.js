export default {
  name: 'RequestAdmin',
  externals: {
    axios: 'axios/dist/axios.min.js'
  },
  state: {
    skip: 0,
    limit: 20,
    currentName: '',
    requests: []
  },
  
  async setup () {
    this.axios.defaults.withCredentials = true
    this.fetchRequestList()
  },

  destory () {
  },

  watch: {
  },

  actions: {
    async fetchRequestList() {
      const result = (await this.axios.get(`/api/repo/request/list?skip=${this.skip}&limit=${this.limit}`)).data

      this.requests = result.data
    },

    async requestClick(item) {
      this.currentName = item.name
    },

    async approve () {
      const result = (await this.axios.post(`/api/repo/request/approve`, {
        name: this.currentName,
        approved: 'true'
      })).data

      this.requests = result.data
    },

    async reject () {
      
    }
  }
}
