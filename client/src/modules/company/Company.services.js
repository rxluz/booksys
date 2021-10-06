import * as companyConstants from './Company.constants'

export const getCompanyData = (companyHash) => fetch(companyConstants.COMPANY_DATA_URL(companyHash))
