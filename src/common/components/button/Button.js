import React from 'react'
import * as PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ children, isDisabled, onClick, styleType }) => (
  <button
    className={`button button--${styleType}`}
    onClick={() => (!isDisabled ? onClick() : null)}
    disabled={isDisabled}
  >
    {children}
  </button>
)

Button.defaultProps = {
  styleType: 'primary',
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  styleType: PropTypes.oneOf(['primary', 'secondary']),
}

export default Button
