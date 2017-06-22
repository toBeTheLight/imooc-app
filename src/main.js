// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import axios from 'axios'
import './assets/script/rem'
import './assets/style/reset.css'
import './assets/fonts/iconfont.css'
import './assets/style/base.css'

axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.$http = axios
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
