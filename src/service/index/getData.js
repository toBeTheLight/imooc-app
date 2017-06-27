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
// 首页课程推荐
const getIndexClassInfo = () => {
  let res = JSON.parse(JSON.stringify(allData.indexClassInfo))
  res.result = randomArray(res.result, 4)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res)
    }, 10)
  })
}
// 首页职业路径
const getIndexWayInfo = () => {
  let res = JSON.parse(JSON.stringify(allData.indexWayInfo))
  res.result = randomArray(res.result, 3)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res)
    }, 10)
  })
}
// 首页实战
const getIndexCodingInfo = () => {
  let res = JSON.parse(JSON.stringify(allData.indexCodingInfo))
  res.result = randomArray(res.result, 6)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res)
    }, 10)
  })
}
// 首页新课上架
const getIndexNewInfo = () => {
  let res = JSON.parse(JSON.stringify(allData.indexNewInfo))
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res)
    })
  })
}
const getIndexLikeInfo = () => {
  let classInfo = JSON.parse(JSON.stringify(allData.indexClassInfo))
  let wayInfo = JSON.parse(JSON.stringify(allData.indexWayInfo))
  let codingInfo = JSON.parse(JSON.stringify(allData.indexCodingInfo))
  let newInfo = JSON.parse(JSON.stringify(allData.indexNewInfo))
  let result = classInfo.result.concat(wayInfo.result).concat(codingInfo.result).concat(newInfo.result)
  let res = {
    state: 1,
    result: result
  }
  res.result = randomArray(res.result, 6)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res)
    })
  })
}
export default {
  getIndexSwiper,
  getIndexClassInfo,
  getIndexWayInfo,
  getIndexCodingInfo,
  getIndexNewInfo,
  getIndexLikeInfo
}
