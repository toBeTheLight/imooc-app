import * as allData from '../api.js'
// coding nav
const getCodingNav = () => {
  let res = JSON.parse(JSON.stringify(allData.codingNav))
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res)
    }, 10)
  })
}

export default {
  getCodingNav
}
