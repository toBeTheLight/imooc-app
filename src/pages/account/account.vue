<template>
  <transition name="rightbottomopacity">
  <div class="account">
    <i class="iconfont icon-guanbifuzhi" @click="backSource"></i>
    <h1 v-text="accountTitle"></h1>
    <router-view></router-view>
  </div>
  </transition>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "src/base/base.scss";
  .account{
    position: absolute;
    top: 0;
    z-index: 100;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-top: 22*$px;
    background-image: url(../../assets/images/account-bg.jpg);
    background-size: 300%;
    background-color: #111A25;
  }
  .icon-guanbifuzhi{
    color: #b7bbbf;
    font-size: 38*$px;
    font-weight: 900;
    margin-left: 22*$px;
  }
  h1{
    margin-top: 190*$px;
    margin-bottom: 80*$px;
    font-size: 51*$px;
    color: white;
    font-family: "黑体";
    text-align: center;
  }
  // .fromright-enter-active,.fromright-leave-active{
  //   transition: all .5s ease;
  // }
  // .fromright-leave-to,.fromright-enter{
  //   transform: translate3d(100%, 0, 0);
  // }
</style>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'account',
  data () {
    return {
      transition: 'fromright'
    }
  },
  computed: {
    ...mapGetters([
      'accountTitle',
      'sourceUrl'
    ])
  },
  methods: {
    backSource () {
      this.$router.push(this.sourceUrl)
    }
  },
  watch: {
  },
  beforeRouteEnter (to, from, next) {
    next()
  }
}
</script>
