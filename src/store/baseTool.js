import {getStorage, setStorage} from '../service/storage.js'
// 用来存放store相关公用函数
const storageBeforeRequest = (type, request) => {
  return ({commit}) => {
    let time = 500
    let number = 0
    commit(type, JSON.parse(getStorage(type)))
    // try cathc 处理 resolve reject
    const tryRequest = async () => {
      try {
        const res = await request()
        if (JSON.stringify(res.result) === JSON.stringify(getStorage(type))) {
          return
        }
        if (res.state === 1) {
          commit(type, res.result)
          setStorage(type, res.result)
        }
      } catch (err) {
        if (!getStorage(type) && number < 6) {
          setTimeout(() => {
            tryRequest()
            time = time * 3
            number++
          }, time)
        }
      }
    }
    tryRequest()
  }
}
export {
  storageBeforeRequest
}
