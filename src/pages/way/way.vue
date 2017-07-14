<template lang="html">
  <transition name="right">
    <div class="way">
      <headTitle :title="title" :backUrl="backUrl" :style="headStyle" :fade="fade" ref="headTitle"></headTitle>
      <ul @scroll="onScroll">
        <template v-for="(item, index) in wayList"> 
          <itemOne :info="item"></itemOne>
        </template>
      </ul>
    </div>
  </transition>
</template>
<script>
  import {headTitle, itemOne} from './children'
  import indexData from '../../service/index/getData'
  export default {
    name: 'way',
    data () {
      return {
        title: '职业路径',
        backUrl: '',
        wayList: [],
        headStyle: '',
        headStartHeight: '',
        fade: ''
      }
    },
    methods: {
      async changeCoding () {
        let res = await indexData.getIndexWayInfo()
        if (res.state === 1) {
          this.wayList = res.result
        }
      },
      onScroll (event) {
        let elUl = event.target
        let scrollTop = elUl.scrollTop
        let elHeadTitle = this.$refs.headTitle.$el
        if (!this.headStartHeight) {
          this.headStartHeight = window.getComputedStyle(elHeadTitle).height.replace('px', '')
        }
        let minHeight = window.getComputedStyle(elUl).marginTop.replace('px', '')
        let computedHeight = this.headStartHeight - 2 * scrollTop
        if (computedHeight <= minHeight - 3) {
          computedHeight = minHeight - 3
        }
        if (computedHeight <= minHeight * 1.5) {
          this.headStyle = `height:${computedHeight}px`
          this.fade = 'opacity: 0'
        } else {
          this.headStyle = `height:${computedHeight}px`
          this.fade = 'opacity: 1'
        }
      }
    },
    created () {
      this.changeCoding()
    },
    components: {
      headTitle,
      itemOne
    }
  }
</script>
<style lang="scss" scoped>
  @import "src/base/base";
  .way{
    background: white;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  ul{
    margin-top: 118*$px;
    padding-top: 114*$px;
    box-sizing: border-box;
    overflow: auto;
    height: calc(100% - 1.18rem);
  }
</style>
