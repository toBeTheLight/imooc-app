import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '',
    //   redirect: '/index'
    // },
    // 注册页
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
          component: require('@/pages/account/children/login.vue')
        },
        {
          path: '/account/reg',
          name: 'reg',
          component: require('@/pages/account/children/reg.vue')
        }
      ]
    },
    // 主页
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/pages/index/index.vue'], resolve)
    },
    // 实战
    {
      path: '/coding',
      name: 'coding',
      component: resolve => require(['@/pages/coding/coding.vue'], resolve)
    },
    {
      path: '/way',
      name: 'way',
      component: resolve => require(['@/pages/way/way.vue'], resolve)
    }
  ]
})
