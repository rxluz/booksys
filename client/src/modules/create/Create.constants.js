import * as generalConstants from 'common/utils/general.constants'

export const PAGE_STATE = {
  LOADING: 'loading',
  EXPIRED: 'expired',
  FORM: 'form',
  SUCCESS: 'success',
}

export const BOOKING_URL = (companyHash) =>
  `${generalConstants.BASE_URL}/${companyHash}/requestBooking`
