import React from 'react'

import './Button.scss'

const Button = ({ children, isDisabled }) => <button disabled={isDisabled}>{children}</button>

export default Button
