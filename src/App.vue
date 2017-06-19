<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    getsessionID () {
      this.$router.push('/account')
    }
  },
  created () {
    console.log(1)
    this.getsessionID()
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
