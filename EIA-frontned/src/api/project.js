import request from '@/utils/request'

export function createProject(projectName, company) {
  return request({
    url: '/api/project/',
    method: 'post',
    data: {
      projectName,
      company
    }
  })
}

export function getProjectsList(query) {
  return request({
    url: '/project/list',
    method: 'get',
    params: query
  })
}

export function getFormInfo(projectId) {
  return request({
    url: '/project',
    method: 'get',
    params: { projectId }
  })
}

export function putFormInfo(basicInfoForm) {
  return request({
    url: '/project',
    method: 'put',
    data: {
      basicInfoForm
    }
  })
}
