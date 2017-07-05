<template lang="html">
  <header>
    <router-link :to="backUrl">
      <span><</span>
      <span>{{title}}</span>
    </router-link>
  </header>
</template>

<script>
export default {
  props: ['title', 'backUrl']
}
</script>

<style lang="scss" scoped>
</style>
