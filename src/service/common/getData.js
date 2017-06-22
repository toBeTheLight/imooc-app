// import axios from 'axios'
import * as allData from '../api.js'

// export const getUserState = (params) => {
//   return axios.get(url,{
//     params: params
//   })
// }
export const getUserState = (params) => {
  return new Promise((resolve, reject) => {
    const random = Math.random()
    setTimeout(() => {
      if (random > 0.5) {
        resolve(allData.userState)
      } else {
        reject('fail')
      }
    }, 10)
  })
}
