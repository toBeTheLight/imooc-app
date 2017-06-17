<template lang="html">
  <div class="index">
    <headTitle :title="title"></headTitle>
    <pullLoad :topCB="refreshAll"  ref="pullLoad">
      <swiper></swiper>
    </pullLoad>
  </div>
</template>

<script>
  import {headTitle, pullLoad} from '../../components'
  import swiper from './children/swiper'
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
      swiper
    }
}
</script>

<style lang="scss" scoped>
</style>
