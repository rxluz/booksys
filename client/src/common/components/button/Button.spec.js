import React from 'react'
import { render } from '@testing-library/react'
import Button from '../Button'

test('Renders button element properly', () => {
  const { getByText } = render(<Input />)
  const linkElement = getByText(/Hello/i)
  expect(linkElement).toBeInTheDocument()
})
