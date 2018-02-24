const project = {
  state: {
    active: '0'
  },

  mutations: {
    SET_ADDACTIVE: (state, addActive) => {
      state.addActive = addActive
    },
    SET_REDUCEACTIVE: (state, reduceActive) => {
      state.reduceActive = reduceActive
    }
  },

  actions: {
    Next({ commit }) {
      commit('SET_ADDACTIVE')
    },
    Previous({ commit }) {
      commit('SET_REDUCEACTIVE')
    }
  }
}

export default project
