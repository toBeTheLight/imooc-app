<template>
  <div id="app">
  <!--keep-alive上样式-->
  <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
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
    async getsessionID (to) {
      // 无sessionID即当前未登录过
      // 请求服务器查看是否登录未过期
      if (!getSession(types.USER_STATE) || !getLocal(types.USER_INFO)) {
        try {
          const res = await common.getUserState()
          // 服务器登录状态
          if (res.state === 1) {
            console.log('服务器状态未过期，自动登录')
            this.setUserState(res.result)
            this.$router.push(to)
          } else {
            console.log('服务器状态已过期，请重新登录')
            this.$router.push('/account')
          }
        } catch (err) {
          console.log('服务器状态已过期，请重新登录')
          this.$router.push('/account')
          console.log(err)
        }
      } else {
        console.log('本地数据完整，自动登录')
        this.setUserState({userinfo: JSON.parse(getLocal(types.USER_INFO))})
        this.$router.push(to)
      }
    },
    async askForSessionID (to) {
      try {
        const res = await common.getUserState()
        // 服务器登录状态
        if (res.state === 1) {
          console.log('服务器状态未过期，自动登录')
          this.setUserState(res.result)
          this.$router.push(to)
        } else {
          console.log('服务器状态已过期，请重新登录')
          this.$router.push('/account')
        }
      } catch (err) {
        console.log('服务器状态已过期，请重新登录')
        this.$router.push('/account')
        console.log(err)
      }
    }
  },
  created () {
    this.getsessionID('/index')
  },
  watch: {
    $route (to, from, next) {
      // 需强制验证的路由数组
      const pathArr = ['/message']
      if (pathArr.indexOf(to.path) !== -1) {
        this.askForSessionID(to.path)
      }
    }
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
