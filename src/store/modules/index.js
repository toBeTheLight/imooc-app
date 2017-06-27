// api服务
// import indexData from '../../service/index/getData.js'
// import * as types from '../mutation-types.js'
// storageBeforeRequest 先读取localStorage,再请求数据，并存入localStorage
// import {storageBeforeRequest} from '../../base/baseTool.js'

// state
const state = {
  // indexSwiper: null
}
// getters
const getters = {
  // indexSwiper: state => state.indexSwiper
}
// actions
const actions = {
  // getIndexSwiper: storageBeforeRequest(types.INDEX_SWIPER, indexData.getIndexSwiper)
}
// mutations
const mutations = {
  // [types.INDEX_SWIPER] (state, result) {
  //   state.indexSwiper = result
  // }
}
export default {
  state,
  getters,
  actions,
  mutations
}
