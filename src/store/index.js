import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import index from './modules/index.js'
import account from './modules/account.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  modules: {
    index,
    account
  }
})
