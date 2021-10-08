import React from 'react'
import { render } from '@testing-library/react'
import CompanyCard from './CompanyCard'

const defaultProps = {
  translate: (value) => value,
  event: {
    name: 'event name',
    eventStartTime: 324324324324,
    address: 'Grand canal dock',
  },
}

test('Renders company card element event name properly', () => {
  const { getByText } = render(<CompanyCard {...defaultProps}> hello </CompanyCard>)
  const linkElement = getByText(/name/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders company card element event address properly', () => {
  const { getByText } = render(<CompanyCard {...defaultProps}>hello </CompanyCard>)
  const linkElement = getByText(/dock/i)
  expect(linkElement).toBeInTheDocument()
})
