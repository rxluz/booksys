import React, { useState } from 'react'
import * as PropTypes from 'prop-types'
import CreatePage from './Create.page'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as createServices from './Create.services'
import * as companyActions from 'modules/company/Company.actions'
import * as companyConstants from 'modules/company/Company.constants'
import { StatusCodes } from 'http-status-codes'

import { useParams } from 'react-router-dom'

const Create = ({ company, setCompanyStatus }, { t: translate }) => {
  const { companyHash } = useParams()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessState, setShowSuccessState] = useState(false)
  const [showInvalidBookingMessage, setShowInvalidBookingMessage] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    const result = await createServices.requestBooking({ data, companyHash })
    const { status } = result

    if (status === StatusCodes.NOT_FOUND) {
      setCompanyStatus(companyConstants.STATUS.OUTDATED)
      setShowInvalidBookingMessage(true)
      setIsSubmitting(false)

      setTimeout(() => setShowInvalidBookingMessage(true), 3000)

      return
    }

    setShowSuccessState(true)
  }

  const resetFormAction = () => {
    setCompanyStatus(companyConstants.STATUS.OUTDATED)
    setShowSuccessState(false)
    setIsSubmitting(false)
  }

  return (
    <CreatePage
      translate={translate}
      acceptedDomains={company.acceptedDomains}
      eventStartTime={company.event.eventStartTime}
      eventEndTime={company.event.eventEndTime}
      availableTimesAndSeats={company.event.availableTimesAndSeats}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
      showInvalidBookingMessage={showInvalidBookingMessage}
      showSuccessState={showSuccessState}
      resetFormAction={resetFormAction}
    />
  )
}

Create.propTypes = { company: PropTypes.object, setCompanyStatus: PropTypes.func }

Create.contextTypes = {
  t: PropTypes.func,
}

const mapStateToProps = ({ company }) => ({
  company,
})

const mapDispatchToPros = (dispatch) =>
  bindActionCreators(
    {
      setCompanyStatus: companyActions.setCompanyStatus,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToPros)(withRouter(Create))
