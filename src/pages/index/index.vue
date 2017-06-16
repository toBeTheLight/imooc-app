<template lang="html">
  <div class="index">
    <headTitle :title="title"></headTitle>
    <pullLoad :topCB="refreshAll" :bottomCB="loadBottom" ref="pullLoad">
      <div class="content">
      </div>
    </pullLoad>
  </div>
</template>

<script>
  import {headTitle, pullLoad} from '../../components'
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
      pullLoad
    }
}
</script>

<style lang="scss" scoped>
@import "../../base/base.scss";
.content{
  height: 800px;
}
</style>
