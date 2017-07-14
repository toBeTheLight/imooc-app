<template lang="html">
    <li class="one-item">
      <div class="tags" :class="info.color">
        <p class="tags-wrapper">
          <span v-for="item in info.tags" v-text="item"></span>
        </p>
      </div>
      <div class="content">
        <h3 v-text="info.title"></h3>
        <p class="des" v-text="info.des"></p>
        <p>
          <span v-if="info.classCount">{{info.classCount}}门课/</span><span v-if="info.studentsCount">{{info.studentsCount}}人学习</span>
          <span class="price" v-if="info.price">￥{{info.price}}</span>
        </p>
      </div>
    </li>
</template>

<style lang="scss" scoped>
  @import "src/base/base";
  .one-item{
    display: flex;
    width: 685*$px;
    height: 165*$px;
    font-size: 20*$px;
    background-color: white;
    padding: 20*$px 0;
    margin: 0 auto;
    overflow: hidden;
    border-bottom: 1px #e8ebed solid;
  }
  .tags{
    box-sizing: border-box;
    width: 189*$px;
    padding: 20*$px;
    flex-grow: 0;
    flex-shrink:: 0;
    color: white;
    .tags-wrapper{
      display: flex;
      flex-direction: column;
      height: 100%;
      // overflow: hidden;
    }
    span{
      display: inline-block;
      margin-right: 17*$px;
    }
  }
  .content{
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;
    padding: 20*$px 23*$px 0;
    background-color: white;
    height: 160*$px;
    box-sizing: border-box;
    h3{
      font-size: 28*$px;
      font-weight: 500;
      line-height: 1.1em;
    }
    .des{
      color: #adb2b7;
      flex: none;
      line-height: .26rem;
      display:block;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
  }
  .num{
    padding: 0 23*$px;
    color: #4b535a;
  }
  .price{
    margin-left: .3rem;
    color: #ff0e36;
  }
</style>

<script>
export default {
  props: ['info'],
  filters: {
    cutTo15 (value) {
      let tempString = ''
      for (let i = 0, length = 0; i < value.length && length <= 40; i++) {
        tempString += value[i]
        if (/\w|\s+/.test(value[i])) {
          length += 1
        } else {
          length += 2
        }
      }
      if (tempString !== value) {
        tempString += '...'
      }
      return tempString
    }
  }
}
</script>
