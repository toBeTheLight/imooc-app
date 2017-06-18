const setStorage = (name, value) => {
  if (!name) { return }
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}

const getStorage = (name) => {
  if (!name) { return }
  return window.localStorage.getItem(name)
}

const removeStorage = (name) => {
  if (!name) { return }
  window.localStorage.removeStorage(name)
}
export {
  setStorage,
  getStorage,
  removeStorage
}
