<template lang="html">
  <header>
    <div>
      <router-link :to="backUrl">
        <i class="iconfont icon-back" @click="historyBack"></i>
      </router-link>
      <span v-text="title" class="page-name"></span>
    </div>
    <img :style="fade" class="bg-img" src="../../../assets/images/way/bg-way-title.jpg"/>
  </header>
</template>

<script>
export default {
  props: ['title', 'backUrl', 'fade'],
  data () {
    return {
    }
  },
  methods: {
    historyBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/base/base";
  header{
    position: fixed;
    width: 100%;
    overflow: hidden;
    display: flex;
    box-sizing: border-box;
    padding-top: 32*$px;
    /*height: 118*$px;*/
    height: 313*$px;
    justify-content: space-between;
    flex: none;
    color: white;
    background-color: #34394b;
    background-size: 100%;
    transition: height .05s linear;
    
    .bg-img{
      position: absolute;
      opacity: 1;
      top: 0;
      left: 0;
      width: 100%;
      z-index: -1;
      transition: opacity .5s linear;
    }
  }
  .icon-back{
    margin-left: 40*$px;
  }
  .page-name{
    margin-left: 61*$px;
  }
  .icon-cart{
    font-size: 34*$px;
    margin-right: 40*$px;
  }
</style>
