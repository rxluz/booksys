import React from 'react'

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

export default Button
