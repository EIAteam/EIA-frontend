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

export function getFormInfo(projectId) {
  return request({
    url: '/project',
    method: 'get',
    params: { projectId }
  })
}

export function putFormInfo(basicInfoForm, materialData, productsData, equipmentData, geographicInfoForm,
  tableData, sensitiveInfoData1, sensitiveInfoData3, emissionStandardFormData) {
  return request({
    url: '/project',
    method: 'put',
    data: {
      basicInfoForm,
      materialData,
      productsData,
      equipmentData,
      geographicInfoForm,
      tableData,
      sensitiveInfoData1,
      sensitiveInfoData3,
      emissionStandardFormData
    }
  })
}
