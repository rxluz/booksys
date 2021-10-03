import React from 'react'
import * as PropTypes from 'prop-types'
import CreatePage from './Create.page'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const Create = (_props, { t: translate }) => (
  <CreatePage translate={translate} seatsAvailable={[1, 2, 3, 4, 5]} />
)

Create.contextTypes = {
  t: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}

const mapStateToProps = ({}) => ({})

const mapDispatchToPros = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToPros)(withRouter(Create))
