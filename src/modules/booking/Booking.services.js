import * as bookingConstants from './Booking.constants'
import * as generalUtils from 'common/utils/general.utils'

import qs from 'qs'

export const confirmBooking = async ({ bookingId, seat, time }) =>
  fetch(bookingConstants.BOOKING_CONFIRM_URL(bookingId), {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify(generalUtils.removeEmptyObjValues({ bookingId, seat, time })),
  })

export const cancelBooking = async ({ bookingId }) =>
  fetch(bookingConstants.BOOKING_CANCEL_URL, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify({ bookingId }),
  })
