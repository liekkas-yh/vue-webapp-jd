export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token'), // 保留登录状态
    userinfo: {},
    routes: []
  },
  getters: {
    isLogin (state) {
      // do something
      // 如何判断用户真的登录了？建议使用userinfo来判断。
      // 说明：在这里我们用token简单判断！！
      // 思考：仅使用Token来判断是否登录了，为什么不靠谱？（Token过期、假Token）
      return Boolean(state.token)
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    resetUser (state) {
      state.token = ''
      localStorage.removeItem('token')
    }
  }

}
