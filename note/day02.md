---
layout: post
title:  "imocc-app day02 生产依赖配置"
categories: vue
tags:  项目
---

* content
{:toc}
使用Vue2.x Vuex webpack axios仿慕课网app。第二天。
添加或修改生产环境所需依赖vue-router、axios、Vuex、fast-click。




## vue-router
### 配置
基本配置模板已完成，修改为history模式，配置懒加载。`router\index.js `修改对应部分为
```js
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/pages/index/index.vue'], resolve)//实现懒加载
    }
  ]
})
```
### 懒加载

## axios
### axios导入项目
```
npm install axios --save
```
添加至项目中，由于axios为独立非依赖vue，无法使用`Vue.use(***)`的方式添加，有两种方式可供选择
1.
在`src\main.js`中
```js
import Vue form 'vue'
import axios form 'axios'
Vue.prototype.$http = axios;
```
2.

### 跨域相关设置
如需要发送cookie，需设置
`axios.defaults.withCredentials = true`(ajax相关)

## Vuex
[Vuex 文档](https://vuex.vuejs.org/zh-cn/mutations.html)
[Vuex 源代码](https://github.com/vuejs/vuex)
```
npm install vuex --save
```
创建目录结构
```
//暂时不使用modules区分模块
├── src/
│   └── store/
│       ├── index.js             //入口文件               
│       ├── state.js             //初始化数据               
│       ├── getters.js           //类计算属性
│       ├── actions.js           //类异步方法
│       ├── mutations.js         //类同步方法
│       └── mutation-types.js    //统一管理事件类型常量
```
在`src\store\index.js`做相关配置(分离状态管理模块)
```js
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
```
后在根节点注入store，即在`src/main.js`中修改对应位置为
```js
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
```
其他js文件暂不配置或默认
```
export default {}
```
## fast-click
```js
npm install fastclick --save
```
在`src/main.js`中配置
```js
import FastClick from 'fastclick'
if ('addEventListener' in document){
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}
```
## rem.js
创建目录结构
```
//用来存放静态资源
├── src/
│   └── assets/
│       ├── images/
│       ├── script/  
│       └── style/
```
在`.eslintgnore`中添加`src/assets/script/*.js`忽略格式检查
将rem.js放入script后
```
import './assets/script/rem'
```
其他直接引入静态资源做相同引入
