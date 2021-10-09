import React from 'react'
import CompanyCard from 'common/components/companyCard'
import * as PropTypes from 'prop-types'
import * as companyConstants from './Company.constants'
import Loading from 'common/components/loading'
import NotFound from 'modules/main/NotFound'

const CompanyPage = ({ state, children, translate, data }) => {
  const INTERNAL_PAGES = () => (
    <CompanyCard translate={translate} event={data.event}>
      {children}
    </CompanyCard>
  )

  const PAGES_BY_STATE = {
    loading: () => <Loading translate={translate} />,
    loaded: INTERNAL_PAGES,
    failed: () => <NotFound translate={translate} />,
    expired: INTERNAL_PAGES,
  }

  return PAGES_BY_STATE[state]()
}

CompanyPage.defaultProps = {
  translate: (value) => value,
}

CompanyPage.propTypes = {
  state: PropTypes.oneOf(companyConstants.PAGE_STATE),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  translate: PropTypes.func,
  data: PropTypes.shape({
    event: PropTypes.object,
  }),
}

export default CompanyPage
