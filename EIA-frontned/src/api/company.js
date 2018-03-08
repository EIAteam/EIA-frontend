import request from '@/utils/request'

export function createCompany(companyName) {
  return request({
    url: '/api/company/',
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

export function getCompanyList() {
  return request({
    url: '/api/companyList/',
    method: 'get'
  })
}
