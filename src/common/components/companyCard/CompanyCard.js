import React from 'react'
import * as PropTypes from 'prop-types'

import * as generalConstants from 'common/utils/general.constants'
import * as generalUtils from 'common/utils/general.utils'

import './CompanyCard.scss'
import CompanyCardBackground from './companyCardBackground.png'

const CompanyCard = ({ translate, event, children }) => {
  const accessibleDate = generalUtils.accessibleFormattedDate(event.eventStartTime)

  const date = generalUtils.formattedDate(event.eventStartTime)

  return (
    <div className="companyCard">
      <div
        className="companyCard__header"
        style={{ backgroundImage: `url(${CompanyCardBackground})` }}
      >
        <div className="companyCard__header--row">
          <div className="companyCard__header--title" title={translate('Event name')}>
            {event.name}
          </div>
          <div className="companyCard__header--date" aria-label={accessibleDate}>
            {date}
          </div>
        </div>
        <div className="companyCard__header--row">
          <address className="companyCard__header--address">{event.address}</address>
          <div className="companyCard__header--directions">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={generalConstants.MAPS_URL(event.address)}
            >
              {translate('Get directions')}
            </a>
          </div>
        </div>
      </div>
      <div className="companyCard__content">{children}</div>
    </div>
  )
}

CompanyCard.defaultProps = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  translate: (value) => value,
  event: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    eventStartTime: PropTypes.number,
  }),
}

export default CompanyCard
