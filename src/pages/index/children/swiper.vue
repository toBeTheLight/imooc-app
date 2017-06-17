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
    return {}
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
      let selector = this.$el.className
      console.log(selector, Swiper)
      /* eslint-disable */
      var swiper = new Swiper('.' + selector, {
        autoplay: 3000,
        speed: 800,
        loop: true,
        autoplayDisableOnInteraction : false
      })
      /* eslint-enable */
    }
  },
  watch: {
    indexSwiper: function (value, oldValue) {
      console.log(value)
      this.init()
    }
  },
  created () {
    this.getIndexSwiper()
  }
}
</script>
