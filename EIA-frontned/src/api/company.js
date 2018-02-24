import request from '@/utils/request'

export function createCompany(companyName) {
  return request({
    url: '/company',
    method: 'post',
    data: {
      companyName
    }
  })
}

export function joinCompany(username) {
  return request({
    url: '/company/user',
    method: 'post',
    data: {
      username
    }
  })
}
