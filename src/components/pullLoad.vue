<template lang="html">
  <div class="touch-area" :style="pullMove">
    <div v-if="topCB">
      <div v-show="topState=='pull'" class="state">
        <div class="pull">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <span class="state-message">下拉刷新</span>
      </div>
      <div v-show="topState=='able'" class="state">
        <div class="able">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <span class="state-message">释放加载</span>
      </div>
      <div v-show="topState=='wait'" class="state">
        <div class="wait">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <span class="state-message">正在加载</span>
      </div>
    </div>
    <slot></slot>
    <div v-if="bottomCB && !bottomAllLoad" class="bottom-message">
      <p>上滑加载更多</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/base/base";
@keyframes pointLine {
  from{width: 4*$px}
  50%{width: 30*$px}
  to{width: 4*$px}
}
.touch-area{
  color: #b7bbbf;
}
.state{
  height: 118*$px;
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    width: 145*$px;
    height: 48*$px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    i{
      width: 4*$px;
      height: 4*$px;
      border-radius: 50%;
      background-color: #b7bbbf;
    }
  }
}
.wait{
  i:first-child{
    animation: pointLine 1.2s .6s infinite;
  }
  i:nth-child(2){
    animation: pointLine 1.2s .4s infinite;
  }
  i:nth-child(3){
    animation: pointLine 1.2s .2s infinite;
  }
  i:last-child{
    animation: pointLine 1.2s 0s infinite;
  }
}
.state-message{
  width: 145*$px;
  font-size: 25*$px;
}
.bottom-message{
  font-size: 25*$px;
  height: 3.52em;
  line-height: 3.52em;
  text-align: center;
}
</style>

<script>
export default {
  name: 'pullLoad',
  props: {
    pullDistance: {
      type: Number,
      default: 70
    },
    topCB: {
      type: Function
    },
    bottomCB: {
      type: Function
    }
  },
  data () {
    return {
      pullDistanceCopy: 0,
      fromTop: false,
      startY: '',
      pullMove: '',
      topState: 'pull',
      onTopLoading: false,
      topAllLoad: false,
      onBottomLoading: false,
      bottomAllLoad: false
    }
  },
  computed: {
  },
  methods: {
    initPullTop () {
      this.$el.addEventListener('touchstart', this.touchStartCB)
      this.$el.addEventListener('touchmove', this.touchMoveCB)
      this.$el.addEventListener('touchend', this.touchEndCB)
    },
    destroyTopEvent () {
      this.$el.removeEventListener('touchstart', this.touchStartCB)
      this.$el.removeEventListener('touchmove', this.touchMoveCB)
      this.$el.removeEventListener('touchend', this.touchEndCB)
    },
    initPullBottom () {
      this.$root.$el.addEventListener('scroll', this.onScroll)
    },
    destoryBottomEvent () {
      this.$root.$el.removeEventListener('scroll', this.onScroll)
    },
    touchStartCB (event) {
      if (this.onTopLoading) {
        event.preventDefault
        return false
      }
      this.fromTop = this.$root.$el.scrollTop < 10
      if (!this.fromTop) {
        return
      }
      let startY = event.targetTouches[0].clientY
      this.startY = startY
      return false
    },
    touchMoveCB (event) {
      if (this.onTopLoading) {
        return
      }
      if (!this.fromTop) {
        return
      }
      let nowY = event.changedTouches[0].clientY
      if ((nowY - this.startY) < 0) {
        this.topState = 'pull'
        nowY = this.startY
      }
      if ((nowY - this.startY) < this.pullDistanceCopy) {
        this.topState = 'pull'
      }
      if ((nowY - this.startY) >= this.pullDistanceCopy) {
        this.topState = 'able'
      }
      if ((nowY - this.startY) > this.pullDistanceCopy * 1.2) {
        nowY = this.startY + this.pullDistanceCopy * 1.2
      }
      this.pullMove = `transform:translate3d(0,${nowY - this.startY}px,0)`
      if ((nowY - this.startY) >= 0) {
        event.preventDefault()
      }
      return false
    },
    touchEndCB (event) {
      if (this.onTopLoading) {
        return
      }
      if (!this.fromTop) {
        return
      }
      if (this.topState === 'able') {
        this.topState = 'wait'
        this.onTopLoading = true
        this.topCB()
        return
      } else {
        this.topLoadEnd()
      }
    },
    topLoadEnd () {
      this.onTopLoading = false
      this.fromTop = false
      this.startY = 0
      this.pullMove = `transform:translate3d(0,0,0)`
    },
    topAllEnd () {
      setTimeout(() => {
        this.topAllLoad = true
      }, 500)
    },
    onScroll () {
      let eventEl = this.$root.$el
      if (!this.onBottomLoading && eventEl.scrollHeight <= eventEl.clientHeight + eventEl.scrollTop + 1) {
        this.onBottomLoading = true
        this.bottomCB()
      }
    },
    bottomLoadEnd () {
      this.onBottomLoading = false
    },
    bottomAllEnd () {
      this.bottomAllLoad = true
    }
  },
  watch: {
    topAllLoad: function (value) {
      console.log(this.topAllLoad)
      if (value) {
        this.destroyTopEvent()
      }
    },
    bottomAllLoad: function (value) {
      if (value) {
        this.destoryBottomEvent()
      }
    }
  },
  mounted () {
    if (this.topCB) {
      this.initPullTop()
      if (this.pullDistance <= 70) {
        this.pullDistanceCopy = 1.18 * (document.documentElement.style.fontSize.replace('px', ''))
      }
    }
    if (this.bottomCB) {
      this.initPullBottom()
    }
  }
}
</script>
