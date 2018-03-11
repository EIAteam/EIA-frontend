
/* 校验账号*/
export function isvalidUsername(str) {
  const usernamereges = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  return usernamereges.test(str)
}

/* 校验密码*/
export function isvalidPassword(str) {
  const passwordregex = /^[a-z0-9_-]{6,18}$/
  return passwordregex.test(str)
}

export function isvalidCompanyName(str) {
  const companyNamereges = /^[a-zA-Z\u4e00-\u9fa5]{2,15}$/
  return companyNamereges.test(str)
}

export function isvalidProjectName(str) {
  return str.length > 0
}

export function isvalidCompany(str) {
  return str.length > 0
}

export function isvalidUserName(str) {
  const userNameregex = /^[a-zA-Z\u4e00-\u9fa5]{2,15}$/
  return userNameregex.test(str)
}

export function isvalidUserEmail(str) {
  const userEmailregex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  return userEmailregex.test(str)
}

export function isvalidUserPhone(str) {
  const userPhoneregex = /^[1][3,4,5,7,8][0-9]{9}$/
  return userPhoneregex.test(str)
}

/* 合法url */
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

