import React from 'react'
import { render } from '@testing-library/react'
import Create from './Create.page'
import * as testUtils from 'common/utils/test.utils'

const defaultProps = testUtils.createDefaultProps({
  availableTimesAndSeats: [],
  acceptedDomains: [],
  onSubmit: testUtils.emptyFunc,
  isSubmitting: false,
  eventEndTime: 3324234234,
  showSuccessState: false,
  showInvalidBookingMessage: false,
  resetFormAction: testUtils.emptyFunc,
})

test('Renders create booking page title properly', () => {
  const { getByText } = render(<Create {...defaultProps} />)
  const linkElement = getByText(/Fill/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders create booking page form properly', () => {
  const { getByLabelText } = render(<Create {...defaultProps} />)
  const linkElement = getByLabelText(/reservation/i)
  expect(linkElement).toBeInTheDocument()
  expect(linkElement.firstChild.classList.contains('create-page__content')).toBe(true)
  expect(linkElement.firstChild.firstChild.classList.contains('input')).toBe(true)
})
