import * as createConstants from './Create.constants'
import qs from 'qs'

export const requestBooking = async ({ data, companyHash }) =>
  fetch(createConstants.BOOKING_URL(companyHash), {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify(data),
  })
