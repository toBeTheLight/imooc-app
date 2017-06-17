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
最终采用方法四，不会因为改变`babel`配置影响其他编译，也不会影响我们最初的目录结构设计  
解决此问题的过程中遇到了下面的几点
1. babel 插件的使用(以后可能会根据业务需求配置)
2. `src/assets`与`static`的问题，涉及到webpack编译过程，目前像`css`与`图片`还没看出区别
最最终，没有用插件而自己写了一个`vue`组件  
