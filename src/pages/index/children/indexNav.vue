<template>
  <ul>
    <li v-for="item in navInfo">
      <router-link :to="item.to">
        <div class="icon-wrapper" :style="{backgroundColor: item.bgColor}">
          <i :class="item.icon" class="iconfont"></i>
        </div>
        <p v-text="item.title"></p>
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  @import "src/base/base.scss";
  ul{
    display: flex;
    height: 168*$px;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    p{
      margin-top: 15*$px;
      font-size: 26*$px;
      text-align: center;
    }
    .icon-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 73*$px;
      height: 73*$px;
      border-radius: .304rem / .304rem;
      .iconfont{
        font-weight: 500;
        font-size: 42*$px;
      }
    }
  }
</style>

<script>
export default {
  data () {
    return {
      navInfo: [
        {
          title: '实战',
          bgColor: '#ffbb5e',
          icon: 'icon-shizhan',
          to: 'coding'
        },
        {
          title: '路径',
          bgColor: '#3ee6a0',
          icon: 'icon-iconway',
          to: 'way'
        },
        {
          title: '猿问',
          bgColor: '#9eaceb',
          icon: 'icon-question',
          to: 'question'
        },
        {
          title: '手记',
          bgColor: '#49c5ff',
          icon: 'icon-note',
          to: 'note'
        },
        {
          title: '发现',
          bgColor: '#ff5f7a',
          icon: 'icon-faxian',
          to: 'find'
        }
      ]
    }
  }
}
</script>
