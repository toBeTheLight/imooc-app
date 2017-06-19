import * as types from './mutation-types.js'

export default {
  [types.SOURCE_URL] (state, url) {
    state.sourceUrl = url
  }
}
