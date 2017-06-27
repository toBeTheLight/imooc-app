<template lang="html">
  <footer>
    <ul>
      <li v-for="item in footerInfo">
        <router-link :to="item.to">
          <i class="iconfont" :class="[{'active': item.title===title}, item.icon]"></i>
          <p v-text="item.title" :class="{'active': item.title===title}"></p>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
  @import "src/base/base";
  footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  ul{
    display: flex;
    height: 104*$px;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    box-shadow: 0 -3*$px 3*$px rgba(0,0,0,.1);
    li{
      display: flex;
      width: 25%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    p{
      font-size: 24*$px;
    }
  }
  .iconfont{
    font-size: 42*$px;
    color: #b7bbbf;
  }
  .active{
    color: #ff284b;
  }
</style>

<script>
export default {
  props: ['title'],
  name: 'footerNav',
  data () {
    return {
      footerInfo: [
        {
          title: '首页',
          icon: 'icon-home',
          to: 'index'
        },
        {
          title: '课程',
          icon: 'icon-class',
          to: 'class'
        },
        {
          title: '下载',
          icon: 'icon-downloadzhuanhuan',
          to: 'download'
        },
        {
          title: '我的',
          icon: 'icon-user',
          to: 'user'
        }
      ]
    }
  }
}
</script>
