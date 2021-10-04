import React from 'react'

import './Button.scss'

const Button = ({ children, isDisabled, onClick }) => (
  <button className="button" onClick={onClick} disabled={isDisabled}>
    {children}
  </button>
)

export default Button
