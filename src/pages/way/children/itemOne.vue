<template>
  <li>
    <div class="bg-first box"></div>
    <div class="bg-second box"></div>
    <div class="main box">
      <div class="tags" :class="info.color">
        <p class="tags-wrapper">
        </p>
      </div>
      <div class="content">
        <h3 v-text="info.title"></h3>
        <p class="num">
          <span v-if="info.classCount">{{info.classCount}}门课</span><span v-if="info.studentsCount">{{info.studentsCount}}人学习</span>
        </p>
        <p class="des" v-text="info.des"></p>
        <span class="price" v-if="info.price">￥{{info.price}}</span>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['info'],
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/base/base';
  li{
    width: 512*$px;
    position: relative;
    margin: 0 auto 37*$px;
    .box{
      width: 512*$px;
      height: 381*$px;
      border-radius: 5*$px;
      box-shadow: 0 0 5*$px 2*$px rgba(0,0,0,.3);
      background-color: white;
      &.main{
        position: relative;
        z-index: 100;
      }
      &.bg-second,&.bg-first{
        left: 0;
        position: absolute;
      }
      &.bg-second{
        transform: scale(.98);
        top: 10*$px;
      }
      &.bg-first{
        transform: scale(.96);
        top: 20*$px;
      }
    }
    .tags{
      height: 158*$px;
    }
    .content{
      box-sizing: border-box;
      padding: 13*$px 33*$px;
    }
    h3{
      font-size: 31*$px;
      font-weight: bold;
      white-space:nowrap; 
      overflow:hidden; 
      text-overflow:ellipsis;
    }
    .des{
      color: #adb2b6;
      font-size: 21*$px;
    }
    .num{
      color: #adb2b6;
      font-size: 20*$px;
      span{
        margin-right: 70*$px;
      }
    }
    .price{
      color: #ff3557;
    }
  }
</style>
