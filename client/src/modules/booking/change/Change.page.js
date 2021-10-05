import React, { useState } from 'react'
import Input from 'common/components/input'
import OfficeCard from 'common/components/officeCard'
import Pagination from 'common/components/pagination'

import './Change.scss'
import * as generalUtils from 'common/utils/general.utils'

const filterAvailableSeatsAndTimes = ({ seats, preferredTime, availableTimesAndSeats }) =>
  availableTimesAndSeats.reduce((availableTimesAndSeatsFinal, timeAndSeats) => {
    if (preferredTime.value != '' && preferredTime.value != timeAndSeats.time) {
      return availableTimesAndSeatsFinal
    }

    const seatsFinal = timeAndSeats.seats.filter((seat) => {
      if (preferredTime.value == '') {
        return true
      }

      return seats.value == '' || seats.value == seat ? true : false
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

  const clearPreferredTime = () => {
    setSeats(generalUtils.setFieldInitialState())
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

  return (
    <section className="booking-change">
      <div className="booking-change__title">
        {translate(
          "Unfortunately the time that you selected isn't available anymore. Please select a new option below",
        )}
      </div>
      <div className="booking-change__options">
        <div className="booking-change__column booking-change__column--left">
          <Input
            type="select"
            id="booking-change-time"
            value={preferredTime.value}
            onChange={setPreferredTime}
            showClearButton={true}
            onClear={clearPreferredTime}
            list={generalUtils.getPreferredTimeData(availableTimesAndSeats)}
            placeholder={translate('Select a time')}
          />
        </div>
        <div className="booking-change__column booking-change__column--right">
          <Input
            type="select"
            disabled={preferredTime.value === ''}
            value={seats.value}
            onChange={setSeats}
            showClearButton={true}
            id="booking-change-seats"
            list={generalUtils.getSeatsList({ preferredTime, availableTimesAndSeats, translate })}
            placeholder={translate('Number of seats')}
          />
        </div>
      </div>
      <div className="booking-change__subtitle">{translate('Available offices')}</div>
      <div className="booking-change__content">
        {generalUtils
          .filterByPage({ items: seatsAndTimes, page, itemsPerPage })
          .map(({ id, seat, time }) => (
            <OfficeCard key={id} seat={seat} time={time} translate={translate} onBook={onBook} />
          ))}
      </div>

      {displayPaginator && (
        <div className="booking-change__paginator">
          <Pagination current={page} total={totalPages} onPageChange={setPage} />
        </div>
      )}
    </section>
  )
}

export default Change
