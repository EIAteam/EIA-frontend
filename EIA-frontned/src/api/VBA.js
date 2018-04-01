import request from '@/utils/request'

export function putVBA(id) {
  return request({
    url: '/api/VBA/' + id + '/',
    method: 'patch',
    data: {
      id
    }
  })
}
