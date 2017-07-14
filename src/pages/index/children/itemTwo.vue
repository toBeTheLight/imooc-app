<template lang="html">
    <li class="two-item">
      <div class="tags" :class="info.color">
        <p class="tags-wrapper">
          <span v-for="item in info.tags" v-text="item"></span>
        </p>
      </div>
      <div class="content">
          <h3 v-text="info.title"></h3>
          <p class="des" >{{info.des | cutTo15}}</p>
      </div>
      <div class="num-price-wrapper">
        <p class="num" v-text="info.studentsCount+'人学习'"></p>
        <p class="price" v-if="info.price">￥{{info.price}}</p>
      </div>
    </li>
</template>

<style lang="scss" scoped>
  @import "src/base/base";
  .two-item{
    width: 321*$px;
    height: 294*$px;
    font-size: 20*$px;
    border-radius: 7*$px;
    background-color: white;
    margin-bottom: 20*$px;
    overflow: hidden;
  }
  .tags{
    height: 71*$px;
    line-height: 71*$px;
    box-sizing: border-box;
    padding: 0 20*$px;
    color: white;
    .tags-wrapper{
      height: 100%;
      overflow: hidden;
      white-space: nowrap;
    }
    span{
      display: inline-block;
      margin-right: 17*$px;
    }
  }
  .content{
    position: relative;
    padding: 20*$px 23*$px 0;
    background-color: white;
    height: 170*$px;
    box-sizing: border-box;
    h3{
      font-size: 28*$px;
      font-weight: 900;
      line-height: 1.1em;
      margin-bottom: 13*$px;
    }
    .des{
      color: #adb2b7;
    }
  }
  .num-price-wrapper{
    display: flex;
    justify-content: space-between;
    padding: 0 23*$px;
  }
  .num{
    color: #4b535a;
  }
  .price{
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
