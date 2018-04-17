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
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      workerMessage
    }
  })
}

export function putProjectAgencyMessage(id, agencyMessage) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      agencyMessage
    }
  })
}

export function getProjectFile(projectId) {
  return request({
    url: '/api/projectFile/',
    method: 'get',
    params: { projectId }
  })
}

export function deleteFile(fileId) {
  return request({
    url: '/api/projectFile/' + fileId + '/',
    method: 'delete'
  })
}

export function putProjectIsMaterialEnough(id, isMaterialEnough) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      isMaterialEnough
    }
  })
}

export function putProjectType(id, projectType) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      projectType
    }
  })
}

export function putProjectStatus(id, projectStatus) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      projectStatus
    }
  })
}

export function getProjectInfo(id) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'get'
  })
}

export function putProjectBasicInfo(
  id,
  projectType,
  township,
  energyUsage,
  constructionCompanyName,
  nameAbbreviation,
  NEIType,
  dinningNum,
  address,
  postalCode,
  corporateName,
  corporateId,
  contacts,
  telephone,
  totalInvestment,
  environmentalProtectionInvestment,
  floorSpace,
  managementSpace,
  nonAccommodationNum,
  accommodationNum,
  dayWorkTime,
  yearWorkTime,
  investmentTime,
  annualPowerConsumption,
  annualLeftover,
  east,
  south,
  west,
  north,
  longtitude,
  latitude,
  constructionScale,
  societyCreditcode,
  businessRange,
  EAcompanyCertificatenumber,
  EAcompanyTelephone,
  EAcompanyAddress,
  EAcompanyName,
  noiseMonitoringPoints,
  gasCylinderHeight,
  airQuantity,
  environmentalEffectclassification,
) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      projectType,
      township,
      energyUsage,
      constructionCompanyName,
      nameAbbreviation,
      NEIType,
      dinningNum,
      address,
      postalCode,
      corporateName,
      corporateId,
      contacts,
      telephone,
      totalInvestment,
      environmentalProtectionInvestment,
      floorSpace,
      managementSpace,
      nonAccommodationNum,
      accommodationNum,
      dayWorkTime,
      yearWorkTime,
      investmentTime,
      annualPowerConsumption,
      annualLeftover,
      east,
      south,
      west,
      north,
      longtitude,
      latitude,
      constructionScale,
      societyCreditcode,
      businessRange,
      EAcompanyCertificatenumber,
      EAcompanyTelephone,
      EAcompanyAddress,
      EAcompanyName,
      noiseMonitoringPoints,
      gasCylinderHeight,
      airQuantity,
      environmentalEffectclassification

    }
  })
}

export function putProjectProductInfo(id, product) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      id,
      product
    }
  })
}

export function putProjectSecongLevelData(id, exhaustGas) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      id,
      exhaustGas
    }
  })
}

export function putVBA(id, projectName) {
  return request({
    url: '/api/VBA/create/',
    method: 'post',
    data: {
      id,
      projectName
    }
  })
}

export function putVBA2(id, projectName) {
  return request({
    url: '/api/VBA2/create/',
    method: 'post',
    data: {
      id,
      projectName
    }
  })
}

export function callRecompute(id, projectName, exhaustGasMaterials, exhaustGas) {
  return request({
    url: '/api/recompute/' + projectName + '/',
    method: 'post',
    data: {
      id,
      projectName,
      exhaustGasMaterials,
      exhaustGas
    }
  })
}

export function putExhaustGasMaterials(id, exhaustGasMaterials) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      id,
      exhaustGasMaterials
    }
  })
}

export function createWord(id, projectName) {
  return request({
    url: '/api/Wordcreate/',
    method: 'post',
    data: {
      id,
      projectName
    }
  })
}

export function projectUpdownload(projectName, filetype, operation) {
  return request({
    url: '/api/updownload/' + projectName + '/' + filetype + '/' + operation + '/',
    method: 'post',
    data: {
      projectName
    }
  })
}

export function putProjectEquipmentInfo(id, equipment) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      id,
      equipment
    }
  })
}

export function putProjectMaterialInfo(id, material) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      id,
      material
    }
  })
}

export function putProjectGeographicInfo(
  id,
  township,
  soundEnvironmentStandard,
  waterSourceDistance,
  sensitivePointDistance,
  besideWaterTreatmentPlant,
  groundwaterArea,
  domesticSewageGo,
  domesticSewageEnvironmentImpactAnalysis,
  domesticSewageEmissionStandards,
  groundwaterBodyNumber,
  groundwaterQualityStandard,
  groundwaterType,
  specialOptionForSewageTreatmentWorks,
  pollutantHoldingWaterBody,
  surfaceWaterQualityStandard,
  surfaceWaterFunction
) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      id,
      township,
      soundEnvironmentStandard,
      waterSourceDistance,
      sensitivePointDistance,
      besideWaterTreatmentPlant,
      groundwaterArea,
      domesticSewageGo,
      domesticSewageEnvironmentImpactAnalysis,
      domesticSewageEmissionStandards,
      groundwaterBodyNumber,
      groundwaterQualityStandard,
      groundwaterType,
      specialOptionForSewageTreatmentWorks,
      pollutantHoldingWaterBody,
      surfaceWaterQualityStandard,
      surfaceWaterFunction
    }
  })
}

export function putProjectEngineeringCompositionInfo(id, otherEngineering, environmentalEngineering) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      id,
      otherEngineering,
      environmentalEngineering
    }
  })
}

export function putProjectSensitiveInfo(
  id,
  sensitiveInfoWater,
  sensitiveInfoAtmosphere,
  sensitiveInfoVoice,
  sensitiveInfoReserve,
  sensitiveInfoHouse
) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      id,
      sensitiveInfoWater,
      sensitiveInfoAtmosphere,
      sensitiveInfoVoice,
      sensitiveInfoReserve,
      sensitiveInfoHouse
    }
  })
}

export function putProjectEmissionStandardInfo(id, emissionStandard) {
  return request({
    url: '/api/project/' + id + '/',
    method: 'patch',
    data: {
      id,
      emissionStandard
    }
  })
}
