import * as generalConstants from 'common/utils/general.constants'

export const COMPANY_DATA_URL = (companyHash) =>
  `${generalConstants.BASE_URL}/company/${companyHash}`

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
