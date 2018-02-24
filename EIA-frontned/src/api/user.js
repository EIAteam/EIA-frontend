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
    url: '/user',
    method: 'get',
    params: { }
  })
}

export function register(username, password) {
  return request({
    url: '/user',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function putUserInfo(userName, userEmail, userPhone) {
  return request({
    url: '/user',
    method: 'put',
    data: {
      userName,
      userEmail,
      userPhone
    }
  })
}
