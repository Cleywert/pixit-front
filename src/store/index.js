import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rota: "",
    dialog: {
      show: false,
      message: "",
      action: "",
      key: ""
    }
  },
  mutations: {
    setRota(state, payload) {
      state.rota = payload
    },
    toggleDialog(state, payload) {
      if (state.dialog.show) {
        state.dialog = {
          show: false,
          message: "",
          action: "",
          key: ""
        }
      } else {
        state.dialog = payload;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
