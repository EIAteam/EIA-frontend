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

export function register(username, email, password, name, telephone) {
  return request({
    url: '/api/user/',
    method: 'post',
    data: {
      username,
      email,
      password,
      name,
      telephone
    }
  })
}

export function putUserInfo(name, email, telephone) {
  return request({
    url: '/api/user/0/',
    method: 'patch',
    data: {
      name,
      email,
      telephone
    }
  })
}
