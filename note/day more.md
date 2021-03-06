## 问题一 swiper引入
报错
`Cannot assign to read only property 'exports' of object '#<Object>'`
经查是`cmd`与`es7 import`冲突的原因，参考他人项目未出现此问题。
### 方法一
将`.babelrc`中
```
"plugins": ["transform-runtime"],
//改为
"plugins": [],
//原因不太清楚
```
### 方法二
将静态文件`swiper.js`中`src`中的静态文件夹移入与`src`同级的`static`文件夹中
//涉及到webpack编译的问题
### 方法三
打开swiper将其`cmd规范`相关代码删除，可解决此问题。
### 方法四
将`cmd`规范改为`export {Swiper}`使用`ES7`规范

### 结果
解决此问题的过程中遇到了下面的几点
1. babel 插件的使用(以后可能会根据业务需求配置)
2. `src/assets`与`static`的问题，涉及到webpack编译过程，目前像`css`与`图片`还没看出区别
最最终，没有用插件而自己写了一个`vue`组件  

## 问题二 视图更新后对元素进行操作
针对初始数据变化如从`null`到`第一次获得数据`后，对引起的视图更新`dom`做初始化处理的选择  
点：`created`时`watch`已创建，`created`中进行的数据修改可被`watch`观测,`updated`初始状态发生在`created`之后,`mounted`之后，无法检测`created`数据改变引起的视图变化(其实视图还未渲染，故不触发`updated`)
### 情景一
数据变化发生在`created`，依赖`dom`操作，在`watch`中使用`this.$nextTick`
### 情景二
数据变化发生在`mounted`，依赖`dom`操作，在`updated`中直接执行代码
### 情景三
数据变化发生在`mounted`，依赖`单一数据变化引起的domb变化`操作，在数据对应`watch`中使用`this.$nextTick`
### 情景四
其他处理选择同情景二三

## 问题三 数据Vuex与props
swiper.vue数据管理做的不好。可由`vuex`改为`props`
### 结果:
1. 个性化数据(且偏展示型)通过`props`由父组件向子组件进行传递
2. 多组件公用数据(包括修改等)通过`vuex`进行管理

## 问题四 v-if 与 router-view选择
虽然大部分时候两者能达到同样的效果，但是按照功能区分，与交互状态或者数据状态相关的使用`v-if`，功能不同虽然表现可能类似还是使用`router-view`区分，同时重要的一点`router`内容可以按需加载。

  ## 问题五 css中img的打包的问题
  static为与src同级目录
  ### 情景一 图片放入static 相对路径引入
  ```
  url(../../../static/images/account-bg.jpg)
  // dev、build正常
  // 编译后
  // dev
  url(/static/img/account-bg.4446dc1.jpg)
  // build
  url(./static/img/account-bg.4446dc1.jpg)
  ```
  ### 情景二 图片放入static 根路径引入
  ```
  url(/static/images/account-bg.jpg)
  // 编译后
  url(/static/images/account-bg.jpg)
  // dev正常
  // build 404
  ```
  ### 情景三 图片放入src/assets 相对路径引入
  ```
  url(/src/assets/images/account-bg.jpg)
  编译后
  url(./static/img/account-bg.4446dc1.jpg)
  // dev 正常
  // build 正常
  ```
  ### 情景四 图片放入src/assets 根路径引入
  ```
  url(/src/assets/images/account-bg.jpg)
  编译后
  url(/src/assets/images/account-bg.jpg)
  // dev 404
  // build 404
  ```
  根据相关资料
  1. [详解配置文件](http://www.jianshu.com/p/c7bbc1a6f813)
  2. [详解路径](http://www.cnblogs.com/libin-1/p/6592114.html)
  3. [webpack官方文档解释](https://webpack.js.org/guides/asset-management/#loading-images)
  > //当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换
          // webpack-dev-server也会默认从publicPath为基准，使用它来决定在哪个目录下启用服务，来访问webpack输出的文件。
          publicPath: '/',

  根据正常情况build编译后路径应该为`output.publicPath`+`url-loader`,然而根路径引入的资源未做任何处理。研究了很久`file-loader`未发现哪里对根路径做了限制，有时间再研究。
  ### 结论
  由设计来说希望资源统一放在一个目录下，所以统一放入`src\assets`中并以**相对路径**引入。  
  删除`static`目录，去除`webpack.prod.conf.js`中`copy`任务。
