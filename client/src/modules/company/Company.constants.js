import * as generalConstants from 'common/utils/general.constants'

export const GET_COMPANY_DATA = (companyHash) =>
  `${generalConstants.BASE_URL}/companyData/${companyHash}`

export const PAGE_STATE = {
  FAILED: 'failed',
  LOADED: 'loaded',
  LOADING: 'loading',
  EXPIRED: 'expired',
}

export const STATUS = {
  OUTDATED: 'outdated',
  SUCCESS: 'success',
}
