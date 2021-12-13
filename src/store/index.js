import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rota: "",
    userLog: {},
    dialog: {
      show: false,
      message: "",
      key: ""
    },
    dialogConta: {
      show: false,
      message: "",
      key: ""
    }
  },
  mutations: {
    setRota(state, payload) {
      state.rota = payload
    },
    setUser(state, payload) {
      state.userLog = payload
      if (payload.email) {
        window.localStorage.userLog = JSON.stringify(payload);
      }
    },
    toggleDialog(state, payload) {
      if (state.dialog.show) {
        state.dialog = {
          show: false,
          message: "",
          key: ""
        }
      } else {
        state.dialog = payload;
      }
    },
    toggleDialogConta(state, payload) {
      if (state.dialogConta.show) {
        state.dialogConta = {
          show: false,
          message: "",
          key: ""
        }
      } else {
        state.dialogConta = payload;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
