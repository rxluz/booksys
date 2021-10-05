import React from 'react'

import './Button.scss'

const Button = ({ children, isDisabled, onClick, type }) => (
  <button
    className={`button button--${type}`}
    onClick={() => (!isDisabled ? onClick() : null)}
    disabled={isDisabled}
  >
    {children}
  </button>
)

Button.defaultProps = {
  type: 'primary',
}

export default Button
