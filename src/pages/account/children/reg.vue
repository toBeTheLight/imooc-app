<template>
  <div class="login">
    <div class="input-wrapper">
      <input type="text" name="account" placeholder="输入注册邮箱" v-model="account">
      <span v-if="account" @click="clearAccountInput">
        <i class="iconfont icon-guanbifuzhi"></i>
      </span>
    </div>
    <div class="input-wrapper">
      <input v-if="cansee" type="text" name="password" placeholder="密码" v-model="password">
      <input v-else type="password" name="password" placeholder="密码" v-model="password">
      <span @click="togglePasswordCansee">
        <i :class="cansee?'icon-see iconfont':'icon-eye_forbid iconfont'"></i>
      </span>
    </div>
    <button type="button" name="button">注册</button>
    <router-link to="/account/login">
      <p class="tips">已有慕课网账号？去登录</p>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  @import "src/base/base.scss";
  .login{
    color: white;
  }
  .input-wrapper{
    box-sizing: border-box;
    padding: 29*$px 42*$px;
    width: 100%;
    height: 106*$px;
    background: rgba(255,255,255,.15);
    input{
      height: 48*$px;
      width: 620*$px;
      background-color: rgba(0,0,0,0);
    }
    &:first-child{
      margin-bottom: 2*$px;
    }
  }
  button{
    height: 108*$px;
    width: 550*$px;
    font-size: 35*$px;
    line-height: 108*$px;
    background-color: #295f7e;
    text-align: center;
    margin: 50*$px 100*$px;
  }
  .icon-guanbifuzhi{
    color: #b7bbbf;
    font-size: 30*$px;
    font-weight: 900;
  }
  .icon-see{
    font-size: 32*$px;
  }
  .icon-eye_forbid{
    font-size: 30*$px;
  }
  .tips{
    font-size: 40*$px;
    color: white;
    text-align: center;
  }
</style>

<script>
import {mapMutations} from 'vuex'
import * as types from '@/store/mutation-types.js'
export default {
  name: 'reg',
  data () {
    return {
      accountTitle: '注册慕课网账号',
      account: '',
      password: '',
      cansee: false
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations({
      setAccountTitle: types.ACCOUNT_TITLE
    }),
    clearAccountInput () {
      this.account = ''
    },
    togglePasswordCansee () {
      this.cansee = !this.cansee
    }
  },
  watch: {

  },
  created () {
    this.setAccountTitle(this.accountTitle)
  }
}
</script>
