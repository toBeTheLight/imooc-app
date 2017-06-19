import * as types from './mutation-types'
const setSourceUrl = ({commit}, url) => {
  commit(types.SOURCE_URL, url)
}
export default {
  setSourceUrl
}
