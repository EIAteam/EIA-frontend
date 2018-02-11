import request from '@/utils/request'

export function createProject(projectDescribtion, projectName, projectKind) {
  return request({
    url: '/project',
    method: 'post',
    data: {
      projectName,
      projectDescribtion,
      projectKind
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
