import React from 'react'
import moment from 'moment'
import * as generalConstants from 'common/utils/general.constants'
import { BiChair } from 'react-icons/bi'
import Button from 'common/components/button'

import './OfficeCard.scss'

const OfficeCard = ({ time, seat, onBook, translate }) => (
  <div className="office-card animate__animated animate__fadeIn">
    <div className="office-card__content">
      <div className="office-card__time">
        {moment.unix(time).format(generalConstants.MOMENT_TIME)}
      </div>
      <div className="office-card__seats">
        <div className="office-card__seats--icon">
          <BiChair />
        </div>
        <div className="office-card__seats--text">{seat}</div>
      </div>
    </div>
    <div className="office-card__footer">
      <Button onClick={() => onBook({ seat, time })}>{translate('Book')}</Button>
    </div>
  </div>
)

export default OfficeCard
