import React from 'react'
import * as PropTypes from 'prop-types'
import moment from 'moment'
import Button from 'common/components/button'
import './Status.scss'
import * as bookingConstants from '../Booking.constants'

const Message = ({ status, translate }) => {
  const message = bookingConstants.STATUS_MESSAGES(translate)[status] || false

  return message ? <div className="booking-status__message">{message}</div> : null
}

const Title = ({ status, translate }) => (
  <div role="status" className={`booking-status__status--${status}`}>
    {bookingConstants.STATUS_NAMES(translate)[status]}
  </div>
)

const Time = ({ time, translate }) => (
  <div className="booking-status__row">
    <div className="booking-status__row--title">{translate('Time')}</div>
    <div className="booking-status__row--value">{moment.unix(time).format('h A')}</div>
  </div>
)

const Office = ({ office, translate }) => (
  <div className="booking-status__row">
    <div className="booking-status__row--title">{translate('Office')}</div>
    <div className="booking-status__row--value">{office}</div>
  </div>
)

const Seats = ({ seats, translate }) => (
  <div className="booking-status__row">
    <div className="booking-status__row--title">{translate('Seats')}</div>
    <div className="booking-status__row--value">{seats}</div>
  </div>
)

const CancelButton = ({ onCancel, translate, processing }) => (
  <div className="booking-status__row">
    <Button onClick={onCancel} styleType="secondary" isDisabled={processing}>
      {processing ? translate('Please wait ...') : translate('Cancel')}
    </Button>
  </div>
)

const Status = ({ translate, data, onNewBooking, onCancel, processing }) => {
  const isCancelled = data.status === bookingConstants.PAGE_STATE.CANCELLED

  return (
    <section className="booking-status animate__animated animate__fadeIn">
      <div className="booking-status__title" role="heading" aria-level="2">
        {translate('Hey {name},', { name: data.name })}
      </div>
      <Message status={data.status} translate={translate} />

      <div className="booking-status__status">
        <Title status={data.status} translate={translate} />

        <div className="booking-status__status--code">
          {translate('Reservation code: {code}', { code: data.id })}
        </div>
      </div>

      {!isCancelled && (
        <>
          <Time time={data.time} translate={translate} />
          <Seats seats={data.seats} translate={translate} />
          <Office office={data.office} translate={translate} />
        </>
      )}

      <div className="booking-status__row">
        <Button isDisabled={processing} onClick={onNewBooking} styleType="secondary">
          {translate('New booking')}
        </Button>
      </div>

      {!isCancelled && (
        <CancelButton processing={processing} translate={translate} onCancel={onCancel} />
      )}
    </section>
  )
}

Status.defaultProps = {
  translate: (value) => value,
}

Status.propTypes = {
  translate: PropTypes.func,
  data: PropTypes.object,
  onNewBooking: PropTypes.func,
  onCancel: PropTypes.func,
  processing: PropTypes.bool,
}

export default Status
