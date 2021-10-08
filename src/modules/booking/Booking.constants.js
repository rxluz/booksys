import * as generalConstants from 'common/utils/general.constants'
import { StatusCodes } from 'http-status-codes'

export const PAGE_STATE = {
  LOADING: 'loading',
  NOT_FOUND: 'notFound',
  UNAVAILABLE: 'unavailable',
  CANCELLED: 'cancelled',
  CONFIRMED: 'confirmed',
}

export const BOOKING_STATUS = {
  [StatusCodes.NOT_FOUND]: PAGE_STATE.NOT_FOUND,
  [StatusCodes.LOCKED]: PAGE_STATE.CANCELLED,
  [StatusCodes.OK]: PAGE_STATE.CONFIRMED,
  [StatusCodes.PRECONDITION_FAILED]: PAGE_STATE.UNAVAILABLE,
}

export const STATUS_MESSAGES = (translate) => ({
  [PAGE_STATE.CONFIRMED]: translate(
    'Congratulations! Your reservation has been successfully confirmed. Here is a brief summary of your booking details:',
  ),
  [PAGE_STATE.CANCELLED]: translate(
    'You cancelled your booking. Here is a brief summary of your cancelled booking details:',
  ),
})

export const STATUS_NAMES = (translate) => ({
  [PAGE_STATE.CONFIRMED]: translate('Confirmed'),
  [PAGE_STATE.CANCELLED]: translate('Cancelled'),
})

export const BOOKING_CONFIRM_URL = `${generalConstants.BASE_URL}/booking/confirm`
export const BOOKING_CANCEL_URL = `${generalConstants.BASE_URL}/booking/cancel`
