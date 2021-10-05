import * as bookingConstants from './Booking.constants'
import qs from 'qs'

export const confirmBooking = async ({ bookingId }) =>
  fetch(bookingConstants.BOOKING_CONFIRM_URL, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify({ bookingId }),
  })

export const cancelBooking = async ({ bookingId }) =>
  fetch(bookingConstants.BOOKING_CANCEL_URL, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: qs.stringify({ bookingId }),
  })
