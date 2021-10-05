import * as createConstants from './Create.constants'
import qs from 'qs'

export const requestBooking = async ({ data, companyHash }) =>
  fetch(createConstants.BOOKING_REQUEST_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify({ ...data, companyHash }),
  })
