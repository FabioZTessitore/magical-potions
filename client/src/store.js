import Vue from 'vue'
import Vuex from 'vuex'

import io from 'socket.io-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: '',
    user: {
      username: ''
    },
    game: {
      money: 0
    }
  },

  getters: {
    socket: state => {
      return state.socket
    },
    user: state => {
      return state.user
    },
    money: state => {
      return state.game.money
    }
  },

  mutations: {
    setSocketConnection: state => {
      state.socket = io('127.0.0.1:3001');
    },
    setUserData: (state, userdata) => {
      state.user.username = userdata.username
      state.game.money = userdata.money
    }
  },

  actions: {
    establishSocketConnection: context => {
      context.commit('setSocketConnection')
    },
    setUserData: (context, data) => {
      context.commit('setUserData', data)
    }
  }
})
