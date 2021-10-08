import React from 'react'
import { render } from '@testing-library/react'
import * as testUtils from 'common/utils/test.utils'
import OfficeCard from './OfficeCard'

const defaultProps = testUtils.createDefaultProps({
  time: 221342423432,
  seat: 1,
  onBook: testUtils.emptyFunc,
})

test('Renders office card element properly', () => {
  const { getByRole } = render(<OfficeCard {...defaultProps} />)
  const linkElement = getByRole('listitem')
  expect(linkElement).toBeInTheDocument()
  expect(linkElement.classList.contains('office-card')).toBe(true)
})

test('Renders office card element content properly', () => {
  const { getByRole } = render(<OfficeCard {...defaultProps} />)
  const linkElement = getByRole('listitem')

  expect(linkElement.firstChild.classList.contains('office-card__content')).toBe(true)
})

test('Renders office card element time properly', () => {
  const { getByLabelText } = render(<OfficeCard {...defaultProps} />)
  const linkElement = getByLabelText(/Time/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders office card element seats properly', () => {
  const { getByLabelText } = render(<OfficeCard {...defaultProps} />)
  const linkElement = getByLabelText(/Seats/i)
  expect(linkElement).toBeInTheDocument()
})
