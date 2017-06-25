<template lang="html">
  <div class="index">
    <headTitle :title="title"></headTitle>
    <pullLoad :topCB="refreshAll" :bottomCB="loadBottom" ref="pullLoad">
      <swiper></swiper>
      <indexNav></indexNav>
    </pullLoad>
    <footerNav :title="title"></footerNav>
  </div>
</template>

<script>
  import {headTitle, pullLoad, footerNav} from '../../components'
  import swiper from './children/swiper'
  import indexNav from './children/indexNav'
  export default {
    name: 'index',
    data () {
      return {
        title: '首页'
      }
    },
    methods: {
      refreshAll () {
        setTimeout(() => {
          this.$refs.pullLoad.topLoadEnd()
          this.$refs.pullLoad.topAllEnd()
          alert('下拉刷新无接口')
        }, 2000)
      },
      loadBottom () {
        setTimeout(() => {
          this.$refs.pullLoad.bottomLoadEnd()
          this.$refs.pullLoad.bottomAllEnd()
          alert('上拉加载无接口')
        }, 2000)
      }
    },
    components: {
      headTitle,
      pullLoad,
      swiper,
      indexNav,
      footerNav
    }
}
</script>

<style lang="scss" scoped>
  .index{
    background-color: #f3f5f7;
  }
</style>
