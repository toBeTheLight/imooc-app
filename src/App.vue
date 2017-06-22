<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {getLocal, getSession} from './service/storage.js'
import * as types from './store/mutation-types.js'
import * as common from './service/common/getData.js'
import {mapMutations} from 'vuex'
export default {
  name: 'app',
  methods: {
    ...mapMutations({
      setUserState: types.USER_STATE
    }),
    async getsessionID () {
      // 无sessionID即当前未登录过
      // 请求服务器查看是否登录未过期
      if (!getSession(types.USER_STATE) && !getLocal(types.USER_INFO)) {
        try {
          const res = await common.getUserState()
          console.log('登录成功')
          // 服务器登录状态
          if (res.state === 1) {}
          this.setUserState(res.result)
          this.$router.push('/index')
        } catch (err) {
          this.$router.push('/account')
          console.log(err)
        }
      }
    }
  },
  created () {
    this.getsessionID()
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
