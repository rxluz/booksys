import React from 'react'
import * as PropTypes from 'prop-types'

import moment from 'moment'
import * as generalConstants from 'common/utils/general.constants'
import { BiChair } from 'react-icons/bi'
import Button from 'common/components/button'

import './OfficeCard.scss'

const OfficeCard = ({ time, seat, onBook, translate }) => {
  const timeFormatted = moment.unix(time).format(generalConstants.MOMENT_TIME)

  return (
    <div className="office-card animate__animated animate__fadeIn" role="listitem">
      <div className="office-card__content">
        <div
          className="office-card__time"
          aria-label={translate('Time: {time}', { time: timeFormatted })}
        >
          {timeFormatted}
        </div>
        <div className="office-card__seats">
          <div className="office-card__seats--icon" role="presentation" aria-hidden="true">
            <BiChair />
          </div>
          <div
            className="office-card__seats--text"
            aria-label={translate('Seats available: {seat}', { seat })}
          >
            {seat}
          </div>
        </div>
      </div>
      <div className="office-card__footer">
        <Button onClick={() => onBook({ seat, time })}>{translate('Book')}</Button>
      </div>
    </div>
  )
}

OfficeCard.defaultProps = {
  translate: (value) => value,
}

OfficeCard.propTypes = {
  translate: PropTypes.func,
  time: PropTypes.number,
  seat: PropTypes.number,
  onBook: PropTypes.func,
}

export default OfficeCard
