// api服务
import * as types from '../mutation-types.js'
// storageBeforeRequest 先读取localStorage,再请求数据，并存入localStorage
// import {storageBeforeRequest} from '../baseTool.js'

// state
const state = {
  accountTitle: '欢迎登录慕课网'
}
// getters
const getters = {
  accountTitle: state => state.accountTitle
}
// actions
const actions = {
}
// mutations
const mutations = {
  [types.ACCOUNT_TITLE] (state, result) {
    state.accountTitle = result
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
