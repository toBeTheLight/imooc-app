import {getLocal, setLocal} from '../service/storage.js'
// 用来存放store相关公用函数

// 请求前读取本地缓存
const storageBeforeRequest = (type, request) => {
  return ({commit}) => {
    let time = 500
    let number = 0
    commit(type, JSON.parse(getLocal(type)))
    // try cathc 处理 resolve reject
    const tryRequest = async () => {
      try {
        const res = await request()
        if (JSON.stringify(res.result) === JSON.stringify(getLocal(type))) {
          return
        }
        if (res.state === 1) {
          commit(type, res.result)
          setLocal(type, res.result)
        }
      } catch (err) {
        if (!getLocal(type) && number < 6) {
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
