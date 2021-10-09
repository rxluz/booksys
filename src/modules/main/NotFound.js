import React from 'react'
import * as PropTypes from 'prop-types'
import NotFoundImg from './NotFound.svg'

const NotFound = (_, { t: translate }) => (
  <div className="not-found">
    <img src={NotFoundImg} alt={translate('Image with a alien spaceship abducting somebody')} />
    <br />
    <br />
    {translate('Page not found', {}, '404 main text')} <br />
  </div>
)

NotFound.defaultProps = {
  translate: (value) => value,
}

NotFound.contextTypes = {
  t: PropTypes.func,
}

export default NotFound
