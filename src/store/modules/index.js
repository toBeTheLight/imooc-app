// api服务
import index from '../../service/index/getData.js'
import * as types from '../mutation-types.js'
// state
const state = {
  indexSwiper: null
}
// getters
const getters = {
  indexSwiper: state => state.indexSwiper
}
// actions
const actions = {
  getIndexSwiper ({commit}) {
    commit(types.GET_INDEX_SWIPER, index.getIndexSwiper())
    // index.getIndexSwiper(({result}) => {
    //   commit(types.GET_INDEX_SWIPER, result)
    // }, (error) => { console.log(error) })
  }
}
// mutations
const mutations = {
  [types.GET_INDEX_SWIPER] (state, {result}) {
    state.indexSwiper = result
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
