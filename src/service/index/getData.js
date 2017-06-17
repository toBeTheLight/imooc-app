// import axios from 'axios'
// const ajax = axios
// 有接口demo
// const getIndexSwiper = (success, fail) => ajax.get('./json/index-swiper.json').then(success()).catch(fail())

const getIndexSwiper = (suc, fal) => {
  const result = {
    'state': 1,
    'result': [
      {
        'url': 'xx',
        'img': 'http://img.mukewang.com/5941f480000133f207500250.jpg'
      },
      {
        'url': 'yy',
        'img': 'http://img.mukewang.com/5941e6500001cc6007500250.jpg'
      },
      {
        'url': 'zz',
        'img': 'http://img.mukewang.com/593e52e70001eba207500250.jpg'
      }
    ]
  }
  return result
}

export default {
  getIndexSwiper
}
