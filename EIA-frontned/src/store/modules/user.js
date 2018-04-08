import { register, login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: null,
    avatar: './src/assets/avatar.jpg',
    userId: 0,
    email: null,
    telephone: null
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ID: (state, userId) => {
      state.userId = userId
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_TELEPHONE: (state, telephone) => {
      state.telephone = telephone
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          commit('SET_TOKEN', response.token)
          setToken(response.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 注册
    Register({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        register(username, username, userInfo.password, userInfo.name, userInfo.telephone).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          commit('SET_ID', response.id)
          commit('SET_NAME', response.name)
          commit('SET_TELEPHONE', response.telephone)
          commit('SET_EMAIL', response.email)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      commit('SET_TOKEN', '')
      removeToken()
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }

  }
}

export default user
