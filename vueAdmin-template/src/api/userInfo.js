import request from '@/utils/request'

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
