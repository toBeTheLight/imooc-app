<template lang="html">
  <div class="coding">
    <headBack :title="title" :backUrl="backUrl"></headBack>
    <div class="content">
	    <pullLoad :topCB="refreshAll" ref="pullLoad">
	      <swiper :swiperData="swiper" :backUrl='backUrl' ></swiper>
	      <nav>
	        <ul class="coding-nav">
	        	<li v-for="(item, index) in navList"  :class="index == activeListNth ? 'active' : ''" v-text="item.name" @click="listToActive(item.codingType, index)"></li>
	           <span></span>
	           <span></span>
	           <span></span>
	        </ul>
	      </nav>
	      <section>
	        <ul>
	          <template v-for="(item ,index) in activeList">
	            <itemOne :info="item"></itemOne>
	          </template>
	        </ul>
	      </section>
	    </pullLoad>
    </div>
  </div>
</template>

<script>
import {pullLoad, swiper} from '../../components'
import {itemOne, headBack} from './children'
import indexData from '../../service/index/getData'
import codingData from '../../service/coding/getData'
import {getLocal, setLocal} from '../../service/storage'

export default {
  name: 'coding',
  data () {
    return {
      swiper: null,
      backUrl: 'index',
      title: '实战课程',
      navList: [],
      codingList: [],
      activeListNth: 0
    }
  },
  components: {
    headBack,
    pullLoad,
    swiper,
    itemOne
  },
  computed: {
    activeList () {
      let temp = []
      if (!this.activeListNth) {
        return this.codingList
      } else {
        for (let value of this.codingList) {
          if (value.codingType === this.activeListNth) {
            temp.push(value)
          }
        }
      }
      return temp
    }
  },
  methods: {
    initSwiper () {
      this.swiper = JSON.parse(getLocal('INDEX_SWIPER'))
    },
    async getCodingNav () {
      try {
        let res = await codingData.getCodingNav()
        if (res.state === 1) {
          this.navList = res.result
        }
      } catch (err) {
      }
    },
    async getIndexSwiper () {
      try {
        let res = await indexData.getIndexSwiper()
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
    async changeCoding () {
      let res = await indexData.getIndexCodingInfo()
      if (res.state === 1) {
        this.codingList = res.result
        setLocal('INDEX_CODING_INFO', JSON.stringify(res.result))
      }
    },
    refreshAll () {
      setTimeout(() => {
        this.$refs.pullLoad.topLoadEnd()
        this.$refs.pullLoad.topAllEnd()
        alert('下拉刷新无接口')
      }, 2000)
    },
    listToActive (typeID, index) {
      this.activeListNth = index
      console.log(typeID)
    },
    changeActive (type) {
      this.activeListNth = type
    }
  },
  created () {
    this.initSwiper()
    this.getIndexSwiper()
    this.getCodingNav()
    this.changeCoding()
  }
}
</script>

<style lang="scss" scoped>
@import "src/base/base";
.coding{
  height: 100%;
	display: flex;
	flex-direction: column;
}
.content{
	flex: auto;
	overflow: auto;
}
.coding-nav{
  display: flex;
  height: 222*$px;
  padding: 34*$px 30*$px;
  flex-wrap: wrap;
  justify-content: space-between;
  
  li{
    width: 205*$px;
    height: 64*$px;
    margin: 7*$px 0;
    border-radius: 100*$px;
    color: black;
    border: 1px solid #f8f9fa;
    line-height: 64*$px;
    font-size: 29*$px;
    text-align: center;
  }
  span{
    display: block;
    height: 0;
    width: 33%;
    visibility: hidden;
    border: 1px solid black;
  }
  li.active{
    color: white;
    background-color: #ff2d50;
    border: 1px solid #ff2d50;
  }
}
</style>
