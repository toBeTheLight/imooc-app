import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/account',
      name: 'account',
      component: resolve => require(['@/pages/account/account.vue'], resolve),
      children: [
        {
          path: '/account/',
          redirect: '/account/login'
        },
        {
          path: '/account/login',
          name: 'login',
          component: resolve => require(['@/pages/account/children/login.vue'], resolve)
        },
        {
          path: '/account/reg',
          name: 'reg',
          component: resolve => require(['@/pages/account/children/reg.vue'], resolve)
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/pages/index/index.vue'], resolve)
    }
  ]
})
