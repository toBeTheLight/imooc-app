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

const randomArray = (array, num) => {
  let nthArr = []
  let resultArr = []
  while (nthArr.length < num) {
    nthArr.push(Math.floor(Math.random() * array.length))
    nthArr = Array.from(new Set(nthArr))
  }
  nthArr.forEach((value) => {
    resultArr.push(array[value])
  })
  return resultArr
}

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

const getIndexClassInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = JSON.parse(JSON.stringify(allData.indexClassInfo))
      res.result = randomArray(res.result, 4)
      resolve(res)
    }, 10)
  })
}

const getIndexWayInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = JSON.parse(JSON.stringify(allData.indexWayInfo))
      res.result = randomArray(res.result, 3)
      resolve(res)
    }, 10)
  })
}
export default {
  getIndexSwiper,
  getIndexClassInfo,
  getIndexWayInfo
}
