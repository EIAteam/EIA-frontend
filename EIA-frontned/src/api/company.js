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
    url: '/api/membership/',
    method: 'post',
    data: {
      username
    }
  })
}

export function getCompanyList() {
  return request({
    url: '/api/company/',
    method: 'get'
  })
}

export function getCompanyMemberList(limit, offset, companyId) {
  return request({
    url: '/api/membership/',
    method: 'get',
    params: { limit, offset, companyId }
  })
}

export function putMembershipPosition(user, company, position) {
  return request({
    url: '/api/membership/0/',
    method: 'put',
    data: {
      user,
      company,
      position
    }
  })
}
