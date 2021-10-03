import * as generalConstants from './general.constants'

export const emptyFunc = (param) => param

export const onChangeValue = (cb, isValid) => (event) =>
  cb({
    value: event.target.value,
    isValid,
    isTouched: false,
  })

export const setFieldInitialState = (isValid = true, value = '') => ({
  value,
  isValid,
  isTouched: false,
})

export const validate = (translate) => ({
  EMAIL: {
    test: (email) => generalConstants.EMAIL_VALIDATION.test(String(email).toLowerCase()),
    message: translate('Your email is incorrect'),
  },
})
