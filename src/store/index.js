import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import index from './modules/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    index
  }
})
