import React from 'react'
import * as PropTypes from 'prop-types'
import { onChangeValue } from 'common/utils/general.utils'

import './Input.scss'

const Input = ({
  title,
  type,
  id,
  placeholder,
  value,
  displayErrors,
  onChange,
  isValid: isValidOuter,
  validation,
  list,
}) => {
  const isValid = !!validation ? validation.test(value) : !!isValidOuter
  const onBlur = () => onChange({ value, isValid, isTouched: value !== '' })

  const INPUT_ELEMENT = {
    text: () => (
      <input
        id={id}
        onChange={onChangeValue(onChange, isValid)}
        onBlur={onBlur}
        value={value}
        className="input__element--text"
        placeholder={placeholder}
      />
    ),
    select: () => (
      <select
        id={id}
        onChange={onChangeValue(onChange, isValid)}
        className="input__element--select"
      >
        {!!placeholder && (
          <option selected={value === ''} disabled>
            {placeholder}
          </option>
        )}
        {list &&
          list.map(({ value: innerValue, text }) => (
            <option selected={value === innerValue} key={innerValue} value={value}>
              {text}
            </option>
          ))}
      </select>
    ),
  }

  return (
    <p className="input__wrapper">
      {!!title && (
        <label className="input__title" htmlFor={id}>
          {title}
        </label>
      )}

      {INPUT_ELEMENT[type] && INPUT_ELEMENT[type]()}
      {displayErrors && !isValid && <div className="input__error">{validation.message}</div>}
    </p>
  )
}

Input.defaultProps = {
  type: 'input',
  isValid: true,
  displayErrors: true,
  list: [],
}

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
  displayErrors: PropTypes.bool,
  validation: PropTypes.func,
  list: PropTypes.array,
}

export default Input
