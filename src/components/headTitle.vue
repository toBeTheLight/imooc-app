<template lang="html">
  <header>
    <span class="page-name" >{{title}}</span>
    <div class="function">
      <i class="iconfont icon-search"></i>
      <i class="iconfont icon-email"></i>
      <i class="iconfont icon-cart"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'headTitle',
  props: ['title']
}
</script>

<style lang="scss" scoped>
  @import "src/base/base";
  header{
    position: fixed;
    display: flex;
    justify-content: space-between;
    height: 118*$px;
    width: 100%;
    z-index: 10;
    line-height: 118*$px;
    color: white;
    background-color: #34394b;
  }
  .page-name{
    margin-left: 37*$px;
    font-size: 32*$px;
  }
  .function{
    height: 100%;
    width: 356*$px;
    display: flex;
    justify-content: space-around;;
    align-items:center;
  }
  .icon-search{
    width: 33*$px;
  }
  .icon-email{
    width: 37*$px;
  }
  .icon-cart{
    width: 37*$px;
  }
</style>
