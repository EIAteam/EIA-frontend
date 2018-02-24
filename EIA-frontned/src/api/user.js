import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/session',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/session',
    method: 'delete'
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
