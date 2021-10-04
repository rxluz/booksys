import React from 'react'
import moment from 'moment'
import * as generalConstants from 'common/utils/general.constants'
import './CompanyCard.scss'
import CompanyCardBackground from './companyCardBackground.png'

const CompanyCard = ({ translate, event, children }) => (
  <div className="companyCard">
    <div
      className="companyCard__header"
      style={{ backgroundImage: `url(${CompanyCardBackground})` }}
    >
      <div className="companyCard__header--row">
        <div className="companyCard__header--title">{event.name}</div>
        <div className="companyCard__header--date">
          {moment.unix(event.eventStartTime).format(generalConstants.MOMENT_DAY_MONTH)}
        </div>
      </div>
      <div className="companyCard__header--row">
        <div className="companyCard__header--address">{event.address}</div>
        <div className="companyCard__header--directions">
          <a target="_blank" href={generalConstants.MAPS_URL(event.eventEndTime)}>
            {translate('Get directions')}
          </a>
        </div>
      </div>
    </div>
    <div className="companyCard__content">{children}</div>
  </div>
)

export default CompanyCard
