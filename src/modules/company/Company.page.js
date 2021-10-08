import React from 'react'
import CompanyCard from 'common/components/companyCard'
import * as PropTypes from 'prop-types'
import * as companyConstants from './Company.constants'

const CompanyPage = ({ state, children, translate, data }) => {
  const INTERNAL_PAGES = () => (
    <CompanyCard translate={translate} event={data.event}>
      {children}
    </CompanyCard>
  )

  const PAGES_BY_STATE = {
    loading: () => <>{translate('Please wait...')}</>,
    loaded: INTERNAL_PAGES,
    failed: () => <>{translate('Invalid page')}</>,
    expired: INTERNAL_PAGES,
  }

  return PAGES_BY_STATE[state]()
}

CompanyPage.defaultProps = {
  translate: (value) => value,
}

CompanyPage.propTypes = {
  state: PropTypes.oneOf(companyConstants.PAGE_STATE).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  translate: PropTypes.func,
  data: PropTypes.shape({
    event: PropTypes.object,
  }),
}

export default CompanyPage
