---
layout: post
title: "imooc-app day01 模板初始化与开发依赖配置"
categories: vue
tags: 项目
---

* content
{:toc}
使用Vue2.x Vuex webpack axios仿慕课网app。第一天。
完整初始模板修改并补充开发环境所需依赖




## init
```
vue init webpack imooc-app
cd imooc-app
npm install
```

## 初运行

1.
```
npm run dev
```
出现依赖未正确引入报错，错误原因默认为生产环境。
可修改`package.json`中对应部分为
```
"dev": "cross-env NODE_ENV=development node build/dev-server.js",
//npm install cross-env --save-dev可解决操作系统指令不同的兼容问题
```
或者可将`build\dev-server.js`中对应部分改为
```js
// if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
// }
//去掉if判断，使process.env.NODE_ENV只能从配置文件中读取
```
暂时采用第二种修改方式

2.
```
npm run build
```
资源404错误，发现文件路径不对，修改`config\index.js`中对应位置为
```
build:{
  ...
  assetsPublicPath: './'------->assetsPublicPath: './'
  ...
}
```

## 修改开发相关依赖配置
### scss
考虑使用scss
```
npm install node-sass sass-loader --save-dev
```
在`build\webpack.base.conf.js`中添加配置
```js
{
  test:/\.scss$/,
  loader:["style","css","sass"]
}
```
在*.vue中给<style>添加`lang="scss"`
同时在`build\utils.js`中已做好了包括`less sass scss stylus`的相关配置，使用只需安装对应依赖，并修改上方列举配置即可

### autoprefixer
可直接修改`package.json`中的`"browserslist"`部分
