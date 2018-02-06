import request from '@/utils/request'

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
