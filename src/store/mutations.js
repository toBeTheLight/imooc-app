import * as types from './mutation-types.js'
import {setLocal, setSession} from '../service/storage.js'

export default {
  // 记录来源url
  [types.SOURCE_URL] (state, url) {
    state.sourceUrl = url
  },
  // 记录用户信息并缓存sessionID
  [types.USER_STATE] (state, {sessionID, userinfo}) {
    state.userinfo = userinfo
    setLocal(types.USER_INFO, userinfo)
    setSession(types.USER_STATE, sessionID)
  }
}
