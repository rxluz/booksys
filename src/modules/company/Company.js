import React, { useState } from 'react'
import * as PropTypes from 'prop-types'
import * as companyServices from './Company.services'
import * as companyConstants from './Company.constants'
import * as companyActions from './Company.actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { useParams } from 'react-router-dom'
import CompanyPage from './Company.page'
import { StatusCodes } from 'http-status-codes'

const Company = ({ children, company, setCompanyData }, { t: translate }) => {
  const [pageState, setPageState] = useState(companyConstants.PAGE_STATE.LOADING)
  const { companyHash } = useParams()

  const updateCompanyData = () => {
    if (company.status !== companyConstants.STATUS.OUTDATED) {
      setPageState(companyConstants.PAGE_STATE.LOADING)
    }

    const NEW_PAGE_STATUS = {
      [StatusCodes.NOT_FOUND]: companyConstants.PAGE_STATE.FAILED,
      [StatusCodes.LOCKED]: companyConstants.PAGE_STATE.EXPIRED,
      [StatusCodes.OK]: companyConstants.PAGE_STATE.LOADED,
    }

    const prevStatus = NEW_PAGE_STATUS[pageState]

    companyServices
      .getCompanyData(companyHash)
      .then((response) => {
        const newStatus = NEW_PAGE_STATUS[response.status] || companyConstants.PAGE_STATE.FAILED
        if (newStatus !== prevStatus) {
          setPageState(newStatus)
        }

        return response.json()
      })
      .then(setCompanyData)
  }

  React.useEffect(() => {
    updateCompanyData()
  }, [companyHash])

  if (company.status === companyConstants.STATUS.OUTDATED) {
    updateCompanyData()
  }

  return (
    <CompanyPage state={pageState} translate={translate} data={company}>
      {children}
    </CompanyPage>
  )
}

Company.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  company: PropTypes.object,
  setCompanyData: PropTypes.func,
}

Company.contextTypes = {
  t: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}

const mapStateToProps = ({ company }) => ({
  company,
})

const mapDispatchToPros = (dispatch) =>
  bindActionCreators(
    {
      setCompanyData: companyActions.setCompanyData,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToPros)(withRouter(Company))
