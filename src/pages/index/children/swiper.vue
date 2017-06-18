<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-if="indexSwiper" v-for="item in indexSwiper">
        <a :href="item.url">
          <img :src="item.img" alt="">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "src/base/base.scss";
  .swiper-container{
    height: 250*$px;
    width: 750*$px;
  }
  .swiper-pagination{
    box-sizing: border-box;
    padding-right: 20*$px;
    font-size: 0;
    text-align: right;
  }
  img{
    height: 100%;
  }

</style>

<script>
import '@/assets/style/swiper.min.css'
import '@/assets/script/swiper.min.js'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'swiper',
  data () {
    return {
      swiper: null
    }
  },
  computed: {
    ...mapGetters([
      'indexSwiper'
    ])
  },
  methods: {
    ...mapActions([
      'getIndexSwiper'
    ]),
    init: function () {
      console.log(this.swiper)
      if (this.swiper) {
        this.swiper.update()
      }
      let selector = this.$el.className
      /* eslint-disable */
      this.swiper = new Swiper('.' + selector, {
        autoplay: 3000,
        speed: 800,
        loop: true,
        // autoplayDisableOnInteraction : false,
        pagination : '.swiper-pagination'
      })
      /* eslint-enable */
    }
  },
  watch: {
    indexSwiper: function (value, oldValue) {
      this.$nextTick(function () {
        this.init()
      })
    }
  },
  created () {
    this.getIndexSwiper()
  }
}
</script>
