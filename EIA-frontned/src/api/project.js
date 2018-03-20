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

export function getProjectsList(limit, offset, companyId) {
  return request({
    url: '/api/project/',
    method: 'get',
    params: { limit, offset, companyId }
  })
}

export function putProjectWorkerMessage(id, workerMessage) {
  return request({
    url: '/api/project',
    method: 'patch',
    data: {
      workerMessage
    }
  })
}

export function putProjectAgencyMessage(id, agencyMessage) {
  return request({
    url: '/api/project',
    method: 'patch',
    data: {
      agencyMessage
    }
  })
}

export function putProjectIsMaterialEnough(id, isMaterialEnough) {
  return request({
    url: '/api/project',
    method: 'patch',
    data: {
      isMaterialEnough
    }
  })
}

export function putProjectType(id, projectType) {
  return request({
    url: '/api/project',
    method: 'patch',
    data: {
      projectType
    }
  })
}

export function putProjectStatus(id, projectStatus) {
  return request({
    url: '/api/project',
    method: 'patch',
    data: {
      projectStatus
    }
  })
}
