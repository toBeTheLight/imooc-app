const setLocal = (name, value) => {
  if (!name) { return null }
  if (!value) { return null }
  value = JSON.stringify(value)
  window.localStorage.setItem(`imooc${name}`, value)
}
const getLocal = (name) => {
  if (!name) { return null }
  return window.localStorage.getItem(`imooc${name}`)
}
const removeLocal = (name) => {
  if (!name) { return null }
  window.localStorage.removeLocal(`imooc${name}`)
}
const setSession = (name, value) => {
  if (!name) { return null }
  if (!value) { return value }
  value = JSON.stringify(value)
  window.sessionStorage.setItem(`imooc${name}`, value)
}
const getSession = (name) => {
  if (!name) { return null }
  return window.sessionStorage.getItem(`imooc${name}`)
}
const removeSession = (name) => {
  if (!name) { return null }
  window.sessionStorage.removeItem(`imooc${name}`)
}
export {
  setLocal,
  getLocal,
  removeLocal,
  setSession,
  getSession,
  removeSession
}
