<template lang="html">
  <div class="coding">
    <headBack :title="title" :backUrl="backUrl"></headBack>
    <pullLoad :topCB="refreshAll" ref="pullLoad">
      <swiper :swiperData="swiper" :backUrl='backUrl' ></swiper>
    </pullLoad>
  </div>
</template>

<script>
import {pullLoad, swiper, headBack} from '../../components'
import indexData from '../../service/index/getData'
import {getLocal, setLocal} from '../../service/storage'

export default {
  name: 'coding',
  data () {
    return {
      swiper: null,
      backUrl: 'index',
      title: '实战课程'
    }
  },
  components: {
    headBack,
    pullLoad,
    swiper
  },
  methods: {
    initSwiper () {
      this.swiper = JSON.parse(getLocal('INDEX_SWIPER'))
    },
    async getIndexSwiper () {
      try {
        let res = await indexData.getIndexSwiper()
        if (res.state === 1) {
          if (JSON.stringify(res.result) === JSON.stringify(this.swiper)) {
            return
          }
          this.swiper = res.result
          setLocal('INDEX_SWIPER', res.result)
        }
      } catch (err) {

      }
    },
    refreshAll () {
      setTimeout(() => {
        this.$refs.pullLoad.topLoadEnd()
        this.$refs.pullLoad.topAllEnd()
        alert('下拉刷新无接口')
      }, 2000)
    }
  },
  created () {
    this.initSwiper()
    this.getIndexSwiper()
    console.log(this.$refs)
  }
}
</script>

<style lang="scss" scoped>
@import "src/base/base";
</style>
