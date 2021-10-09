/* This page will try to confirm the book,
    and will return the booking details,
    case it return that wasn't possible to confirm will redirect to the change page,
    case the book return that was cancelled or confirm, it will redirect to the status page.

    Also this page will add the book details in the store
*/

import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { useParams } from 'react-router-dom'
import * as PropTypes from 'prop-types'
import * as bookingServices from './Booking.services'
import * as bookingActions from './Booking.actions'
import * as bookingConstants from './Booking.constants'
import StatusPage from './status/Status.page'
import ChangePage from './change/Change.page'
import Warning from 'common/components/warning'
import SomethingWrongImg from 'common/components/warning/something-wrong.svg'
import Loading from 'common/components/loading'

const Booking = (
  { booking, setBookingStatus, setBookingData, history, company },
  { t: translate },
) => {
  const { bookingId, companyHash } = useParams()
  const [processing, setProcessing] = useState(false)

  const getBookingData = ({ seat = null, time = null } = {}) => {
    bookingServices
      .confirmBooking({ seat, time, bookingId })
      .then((response) => {
        setBookingStatus(bookingConstants.BOOKING_STATUS[response.status])
        setProcessing(false)

        return response.json()
      })
      .then((response) => {
        if (response && response.booking) {
          setBookingData(response.booking)
        }
      })
  }

  useEffect(() => {
    getBookingData()
  }, [bookingId])

  const onNewBooking = () => history.push(`/${companyHash}`)

  const onCancel = () => {
    if (window.confirm(translate('Are you sure that you want to cancel your booking'))) {
      setProcessing(true)
      bookingServices.cancelBooking({ bookingId }).then(() => {
        getBookingData()
      })
    }
  }

  const statusPage = (
    <StatusPage
      translate={translate}
      data={booking}
      processing={processing}
      onCancel={onCancel}
      onNewBooking={onNewBooking}
    />
  )

  const PAGES_BY_STATE = {
    [bookingConstants.PAGE_STATE.CANCELLED]: () => statusPage,
    [bookingConstants.PAGE_STATE.CONFIRMED]: () => statusPage,
    [bookingConstants.PAGE_STATE.UNAVAILABLE]: () => (
      <ChangePage translate={translate} event={company.event} onBook={getBookingData} />
    ),
    [bookingConstants.PAGE_STATE.LOADING]: () => <Loading translate={translate} />,
    [bookingConstants.PAGE_STATE.NOT_FOUND]: () => (
      <Warning
        image={SomethingWrongImg}
        imageAlt={translate('Something wrong happened')}
        title={translate('Unable to find your booking')}
      />
    ),
  }

  return PAGES_BY_STATE[booking.status]()
}

Booking.propTypes = {
  booking: PropTypes.object,
  setBookingStatus: PropTypes.func,
  setBookingData: PropTypes.func,
  history: PropTypes.object,
  company: PropTypes.object,
}

Booking.contextTypes = {
  t: PropTypes.func,
}

const mapStateToProps = ({ booking, company }) => ({ booking, company })

const mapDispatchToPros = (dispatch) =>
  bindActionCreators(
    {
      setBookingStatus: bookingActions.setBookingStatus,
      setBookingData: bookingActions.setBookingData,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToPros)(withRouter(Booking))
