// import axios from 'axios'
// const ajax = axios
// 有接口demo
// const getIndexSwiper = (success, fail) => ajax.get('./json/index-swiper.json').then(success()).catch(fail())
import * as allData from '../api.js'

// const getIndexSwiper = (suc, fal) => {
//   const result = allData.indexSwiper
//   const random = Math.random()
//   if (random > 0.5) {
//     suc(result)
//   } else {
//     fal()
//   }
// }

const getIndexSwiper = () => {
  return new Promise((resolve, reject) => {
    const random = Math.random()
    setTimeout(() => {
      if (random > 0.5) {
        resolve(allData.indexSwiper)
      } else {
        reject('fail')
      }
    }, 10)
  })
}

export default {
  getIndexSwiper
}
