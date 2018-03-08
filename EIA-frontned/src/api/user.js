import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/login/',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: '/api/user/0/',
    method: 'get'
  })
}

export function register(username, password) {
  return request({
    url: '/api/user/',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function putUserInfo(userName, userEmail, userPhone) {
  return request({
    url: '/api/user/',
    method: 'put',
    data: {
      userName,
      userEmail,
      userPhone
    }
  })
}
