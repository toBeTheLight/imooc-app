<template lang="html">
  <div class="index">
    <headTitle :title="title"></headTitle>
    <pullLoad :topCB="refreshAll" :bottomCB="loadBottom" ref="pullLoad">
      <swiper></swiper>
      <indexNav></indexNav>
      <!-- 课程推荐  -->
      <section class="class two-item">
        <h2>
          <i></i>
          <p>课程推荐</p>
        </h2>
        <span class="change" @click="changeClass">换一换</span>
        <ul>
          <template v-for="(info, index) in classInfo" >
            <itemTwo :info="info" key="index"></itemTwo>
          </template>
        </ul>
      </section>
      <!-- 职业路径  -->
      <section class="way one-item">
        <h2>
          <i></i>
          <p>职业路径</p>
        </h2>
        <span class="change" @click="changeWay">换一换</span>
        <ul>
          <template v-for="(info, index) in wayInfo" >
            <itemOne :info="info" key="index"></itemOne>
          </template>
        </ul>
      </section>
    </pullLoad>
    <footerNav :title="title"></footerNav>
  </div>
</template>

<script>
  import {headTitle, pullLoad, footerNav} from '../../components'
  import swiper from './children/swiper'
  import indexNav from './children/indexNav'
  import itemTwo from './children/itemTwo'
  import itemOne from './children/itemOne'
  import indexData from '../../service/index/getData'
  export default {
    name: 'index',
    data () {
      return {
        title: '首页',
        classInfo: null,
        wayInfo: null
      }
    },
    methods: {
      async changeClass () {
        this.classInfo = (await indexData.getIndexClassInfo()).result
      },
      async changeWay () {
        this.wayInfo = (await indexData.getIndexWayInfo()).result
      },
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
    created () {
      this.changeClass()
      this.changeWay()
    },
    components: {
      headTitle,
      pullLoad,
      swiper,
      itemTwo,
      itemOne,
      indexNav,
      footerNav
    }
}
</script>

<style lang="scss" scoped>
@import "src/base/base";
  .index{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    overflow: auto;
    background-color: #f3f5f7;
    padding-bottom: 104*$px;

  }
  section{
    position: relative;
    h2{
      display: flex;
      height: 123*$px;
      align-items: center;
      justify-content: center;
      i{
        margin-right: 15*$px;
      }
      p{
        font-size: 27*$px;
      }
    }
    .change{
      position: absolute;
      right: .3rem;
      top: .4rem;
      color: #b4b8bc;
      font-size: 26*$px;
    }
  }
  .two-item{
    ul{
      display: flex;
      padding: 0 20*$px;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
  .one-item{
    background-color: white;
    ul{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
  .class{
    i{
      @include icon-bg(27,27,'../../assets/images/index/icon-class-h1.png');
    }
  }
  .way{
    i{
      @include icon-bg(27,27,'../../assets/images/index/icon-way-h1.png');
    }
  }
</style>
