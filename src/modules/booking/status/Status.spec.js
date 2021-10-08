import React from 'react'
import { render } from '@testing-library/react'
import Status from './Status.page'
import * as testUtils from 'common/utils/test.utils'

const defaultProps = testUtils.createDefaultProps({
  data: {
    id: 123,
    name: 'name',
    status: 'confirmed',
    time: 123213123,
    seats: 1,
    office: 1,
  },
  onNewBooking: testUtils.emptyFunc,
  onCancel: testUtils.emptyFunc,
  processing: false,
})

test('Renders status booking component title properly', () => {
  const { getByText } = render(<Status {...defaultProps} />)
  const linkElement = getByText(/Hey/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders status booking component reservation code properly', () => {
  const { getByText } = render(<Status {...defaultProps} />)
  const linkElement = getByText(/code:/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders status booking component status properly', () => {
  const { getByText } = render(<Status {...defaultProps} />)
  const linkElement = getByText('Confirmed')
  expect(linkElement).toBeInTheDocument()
})
