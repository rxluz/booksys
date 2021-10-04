import * as companyConstants from './Company.constants'

export const getCompanyData = (companyHash) => fetch(companyConstants.GET_COMPANY_DATA(companyHash))
