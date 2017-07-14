<template lang="html">
  <transition name="keep">
  	<div class="index">
    <headTitle :title="title" class="top"></headTitle>
    <div class="content">
	    <pullLoad :topCB="refreshAll" :bottomCB="loadBottom" ref="pullLoad">
	      <swiper :swiperData="swiper"></swiper>
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
	      <!-- 今日推荐 -->
	      <section>
	        <!-- <router-link > -->
	          <div class="recommend">
	            <p class="main">基于实战的Python学习之路</p>
	            <p class="sub">体验Python爬虫乐趣，学习Python高级教程，顺利进阶</p>
	          </div>
	        <!-- </router-link> -->
	      </section>
	      <!-- 实战推荐  -->
	      <section class="coding two-item">
	        <h2>
	          <i></i>
	          <p>实战推荐</p>
	        </h2>
	        <span class="change" @click="changeCoding">换一换</span>
	        <ul>
	          <template v-for="(info, index) in codingInfo" >
	            <itemTwo :info="info" key="index"></itemTwo>
	          </template>
	        </ul>
	      </section>
	      <!-- 新课推荐 -->
	      <section class="new one-item">
	        <h2>
	          <i></i>
	          <p>新课上架</p>
	        </h2>
	        <ul>
	          <template v-for="(info, index) in newInfo" >
	            <itemOne :info="info" key="index"></itemOne>
	          </template>
	        </ul>
	      </section>
	      <section class="like two-item">
	        <h2>
	          <i></i>
	          <p>猜你喜欢</p>
	        </h2>
	        <ul>
	          <template v-for="(info, index) in likeInfo" >
	            <itemTwo :info="info" key="index"></itemTwo>
	          </template>
	        </ul>
	      </section>
	    </pullLoad>
    </div>
    <footerNav :title="title" class="footer"></footerNav>
  </div>
  </transition>
</template>

<script>
  import {headTitle, pullLoad, footerNav, swiper} from '../../components'
  import {indexNav, itemOne, itemTwo} from './children'
  import {getLocal, setLocal} from '../../service/storage'
  import indexData from '../../service/index/getData'
  export default {
    name: 'index',
    data () {
      return {
        title: '首页',
        swiper: [],
        classInfo: [],
        wayInfo: [],
        codingInfo: [],
        newInfo: [],
        likeInfo: [],
        likePageNum: 1
      }
    },
    methods: {
      initSwiper () {
        this.swiper = JSON.parse(getLocal('INDEX_SWIPER'))
      },
      async getIndexSwiper () {
        let res = await indexData.getIndexSwiper()
        try {
          if (res.state === 1) {
            if (JSON.stringify(res.result) === JSON.stringify(this.swiper)) {
              return
            }
            this.swiper = res.result
            setLocal('INDEX_SWIPER', JSON.stringify(res.result))
          }
        } catch (err) {
        }
      },
      initClass () {
        this.classInfo = JSON.parse(getLocal('INDEX_CLASS_INFO'))
        // this.changeClass()
      },
      initWay () {
        this.wayInfo = JSON.parse(getLocal('INDEX_WAY_INFO'))
        // this.changeWay()
      },
      initCoding () {
        this.codingInfo = JSON.parse(getLocal('INDEX_CODING_INFO'))
        // this.changeCoding()
      },
      initNew () {
        this.newInfo = JSON.parse(getLocal('INDEX_NEW_INFO'))
      },
      initLike () {
        this.likeInfo = JSON.parse(getLocal('INDEX_LIKE_INFO'))
        this.changeLike()
      },
      async changeClass () {
        let res = await indexData.getIndexClassInfo()
        if (res.state === 1) {
          this.classInfo = res.result
          setLocal('INDEX_CLASS_INFO', JSON.stringify(res.result))
        }
      },
      async changeWay () {
        let res = await indexData.getIndexWayInfo()
        if (res.state === 1) {
          this.wayInfo = res.result
          setLocal('INDEX_WAY_INFO', JSON.stringify(res.result))
        }
      },
      async changeCoding () {
        let res = await indexData.getIndexCodingInfo()
        if (res.state === 1) {
          this.codingInfo = res.result
          setLocal('INDEX_CODING_INFO', JSON.stringify(res.result))
        }
      },
      async changeNew () {
        let res = await indexData.getIndexNewInfo()
        if (res.state === 1) {
          this.newInfo = res.result
          setLocal('INDEX_NEW_INFO', JSON.stringify(res.result))
        }
      },
      async changeLike () {
        let res = await indexData.getIndexLikeInfo(this.likePageNum)
        if (res.state === 1) {
          this.likePageNum ++
          if (this.likeInfo) {
            this.likeInfo = this.likeInfo.concat(res.result)
          } else {
            this.likeInfo = res.result
          }
          this.$refs.pullLoad.bottomLoadEnd()
        }
        if (this.likePageNum === 30) {
          this.$refs.pullLoad.bottomAllEnd()
          return
        }
      },
      refreshAll () {
        setTimeout(() => {
          this.changeClass()
          this.changeCoding()
          this.changeWay()
          this.changeNew()
          this.$refs.pullLoad.topLoadEnd()
          // this.$refs.pullLoad.topAllEnd()
        }, 2000)
      },
      loadBottom () {
        this.changeLike()
      }
    },
    created () {
      this.initSwiper()
      this.initClass()
      this.initWay()
      this.initCoding()
      this.getIndexSwiper()
      // this.initNew()
      this.initLike()
      this.changeClass()
      this.changeWay()
      this.changeCoding()
      this.changeNew()
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
    display:flex;
    flex-direction: column;
    overflow: auto;
    background-color: #f3f5f7;
  }
  .content{
  	flex: auto;
  	overflow: auto;
  }
  .recommend{
    box-sizing: border-box;
    height: 160*$px;
    width: 670*$px;
    padding: 37*$px 0;
    border-radius: 10*$px;
    margin: 37*$px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(270deg, rgba(0, 0, 0, 0.3), rgba(50, 50, 50, .3));
    p{
      text-align: center;
      color: white;
    }
    .main{
      font-size: 40*$px;
    }
    .sub{
      font-size: 20*$px;
      transform: scale(.8);
    }
  }
  section{
    user-select: none;
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
      user-select: none;
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
  .coding{
    i{
      @include icon-bg(27,27,'../../assets/images/index/icon-coding-h1.png');
    }
  }
  .new{
    i{
      @include icon-bg(27,27,'../../assets/images/index/icon-new-h1.png');
    }
  }
  .like{
    i{
      @include icon-bg(27,27,'../../assets/images/index/icon-like-h1.png');
    }
  }
</style>
