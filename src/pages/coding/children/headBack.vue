<template lang="html">
  <header>
    <div>
      <router-link :to="backUrl">
        <i class="iconfont icon-back"></i>
      </router-link>
      <span v-text="title" class="page-name"></span>
    </div>
    <router-link to="cart">
      <i class="iconfont icon-cart"></i>
  	</router-link>
  </header>
</template>

<script>
export default {
  props: ['title', 'backUrl']
}
</script>

<style lang="scss" scoped>
  @import "src/base/base";
	header{
		display: flex;
		align-items: center;
		height: 118*$px;
		justify-content: space-between;
		flex: none;
		color: white;
		background-color: #34394b;
		
	}
	.icon-back{
	  margin-left: 40*$px;
	}
	.page-name{
	  margin-left: 61*$px;
	}
	.icon-cart{
		margin-right: 40*$px;
	}
</style>
