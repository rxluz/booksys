import React, { useRef } from 'react'
import * as PropTypes from 'prop-types'
import { onChangeValue } from 'common/utils/general.utils'
import './Input.scss'
import { AiOutlineWarning } from 'react-icons/ai'
import { BiX } from 'react-icons/bi'
import { isMobileOrTablet } from 'common/utils/browser.utils'

const ValidationMessage = ({ displayErrors, isValid, validation, value }) => {
  if (!validation) {
    return null
  }

  return (
    displayErrors &&
    !isValid && (
      <aside role="alert" className="animate__animated animate__fadeIn input__warning">
        <i className="input__warning--icon">
          <AiOutlineWarning size="16px" />
        </i>
        <p className="input__warning--text">{validation.message(value)}</p>
      </aside>
    )
  )
}

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
  disabled,
  showClearButton,
  onClear,
}) => {
  const inputRef = useRef()
  const isValid = !!validation ? validation.test(value) : !!isValidOuter
  const onBlur = () => onChange({ value, isValid, isTouched: value !== '' })

  const emptyValue = () => {
    onChangeValue({ onChange, isValid, valueForced: '' })()
    onClear && onClear()
  }

  const onFocus = () => {
    if (isMobileOrTablet()) {
      inputRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
    }
  }

  const onKeyUp = () => {
    if (isMobileOrTablet()) {
      onBlur()
    }
  }

  const INPUT_ELEMENT = {
    text: () => (
      <input
        id={id}
        onFocus={onFocus}
        ref={inputRef}
        disabled={disabled}
        onChange={onChangeValue({ onChange, isValid, isTouched: isMobileOrTablet() })}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        value={value}
        className="input__element--text"
        placeholder={placeholder}
      />
    ),
    select: () => (
      <>
        {!disabled && value !== '' && showClearButton && (
          <div className="input__element--clear" onClick={emptyValue}>
            <BiX />
          </div>
        )}
        <select
          id={id}
          onFocus={onFocus}
          ref={inputRef}
          disabled={disabled}
          onChange={onChangeValue({ onChange, isValid })}
          className="input__element--select"
        >
          {!!placeholder && (
            <option selected={value === ''} disabled>
              {placeholder}
            </option>
          )}
          {list &&
            list.map(({ value: innerValue, text }) => (
              <option selected={value === innerValue} key={innerValue} value={innerValue}>
                {text}
              </option>
            ))}
        </select>
      </>
    ),
  }

  return (
    <div className="input">
      {!!title && (
        <label className="input__title" htmlFor={id}>
          {title}
        </label>
      )}

      {INPUT_ELEMENT[type] && INPUT_ELEMENT[type]()}
      <ValidationMessage
        displayErrors={displayErrors}
        isValid={isValid}
        validation={validation}
        value={value}
      />
    </div>
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
  disabled: PropTypes.bool,
  validation: PropTypes.object,
  list: PropTypes.array,
}

export default Input
