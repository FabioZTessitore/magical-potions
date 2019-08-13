import Vue from 'vue'
import Vuex from 'vuex'

import io from 'socket.io-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: ''
  },
  getters: {
    socket: state => {
      return state.socket
    }
  },
  mutations: {
    setSocketConnection: state => {
      state.socket = io('127.0.0.1:3001');
    }
  },
  actions: {
    establishSocketConnection: context => {
      context.commit('setSocketConnection')
    }
  }
})
