import React, { useState } from 'react'
import * as PropTypes from 'prop-types'
import Input from 'common/components/input'
import OfficeCard from 'common/components/officeCard'
import Pagination from 'common/components/pagination'

import './Change.scss'
import * as generalUtils from 'common/utils/general.utils'

const filterAvailableSeatsAndTimes = ({ seats, preferredTime, availableTimesAndSeats }) =>
  availableTimesAndSeats.reduce((availableTimesAndSeatsFinal, timeAndSeats) => {
    if (
      String(preferredTime.value) !== '' &&
      String(preferredTime.value) !== String(timeAndSeats.time)
    ) {
      return availableTimesAndSeatsFinal
    }

    const seatsFinal = timeAndSeats.seats.filter((seat) => {
      if (String(preferredTime.value) === '') {
        return true
      }

      return String(seats.value) === '' || String(seats.value) === String(seat) ? true : false
    })

    availableTimesAndSeatsFinal.push({
      time: timeAndSeats.time,
      seats: seatsFinal,
    })

    return availableTimesAndSeatsFinal
  }, [])

const Change = ({ translate, event, onBook }) => {
  const { availableTimesAndSeats } = event

  const [seats, setSeats] = useState(generalUtils.setFieldInitialState())
  const [preferredTime, setPreferredTime] = useState(generalUtils.setFieldInitialState())
  const [page, setPage] = useState(1)

  const resetPage = () => setPage(1)

  const clearPreferredTime = () => {
    setSeats(generalUtils.setFieldInitialState())
    resetPage()
  }

  const setPreferredTimeInner = (value) => {
    setPreferredTime(value)
    setSeats(generalUtils.setFieldInitialState())
    resetPage()
  }

  const setSeatsInner = (value) => {
    setSeats(value)
    resetPage()
  }

  const filteredAvailableTimesAndTimes = filterAvailableSeatsAndTimes({
    seats,
    preferredTime,
    availableTimesAndSeats,
  })

  const seatsAndTimes = generalUtils.getSeatsAndTime(filteredAvailableTimesAndTimes)

  const itemsPerPage = 6
  const totalRecords = seatsAndTimes.length
  const totalPages = totalRecords / itemsPerPage

  const displayPaginator = totalRecords > itemsPerPage

  console.log({ preferredTime })
  return (
    <section className="booking-change animate__animated animate__fadeIn">
      <div className="booking-change__title" role="alert">
        {translate(
          "Unfortunately the time that you selected isn't available anymore. Please select a new option below",
        )}
      </div>
      <div
        className="booking-change__options"
        role="search"
        aria-label={translate('Time/Seats filters')}
      >
        <div className="booking-change__column booking-change__column--left">
          <Input
            type="select"
            translate={translate}
            id="booking-change-time"
            value={preferredTime.value}
            onChange={setPreferredTimeInner}
            showClearButton={true}
            onClear={clearPreferredTime}
            list={generalUtils.getPreferredTimeData(availableTimesAndSeats)}
            placeholder={translate('Select a time')}
          />
        </div>
        <div className="booking-change__column booking-change__column--right">
          <Input
            type="select"
            translate={translate}
            disabled={preferredTime.value === ''}
            value={seats.value}
            onChange={setSeatsInner}
            showClearButton={true}
            id="booking-change-seats"
            list={generalUtils.getSeatsList({ preferredTime, availableTimesAndSeats, translate })}
            placeholder={translate('Number of seats')}
          />
        </div>
      </div>
      <div className="booking-change__subtitle" role="heading" aria-level="2">
        {translate('Available offices')}
      </div>
      <div className="booking-change__content" role="list">
        {generalUtils
          .filterByPage({ items: seatsAndTimes, page, itemsPerPage })
          .map(({ id, seat, time }) => (
            <OfficeCard key={id} seat={seat} time={time} translate={translate} onBook={onBook} />
          ))}
      </div>

      {displayPaginator && (
        <div className="booking-change__paginator">
          <Pagination
            current={page}
            translate={translate}
            label={translate('Navigate into available offices list')}
            total={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </section>
  )
}

Change.defaultProps = {
  translate: (value) => value,
}

Change.propTypes = {
  translate: PropTypes.func,
  event: PropTypes.shape({ availableTimesAndSeats: PropTypes.array }),
  onBook: PropTypes.func,
}

export default Change
