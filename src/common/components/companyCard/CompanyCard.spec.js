import React from 'react'
import { render } from '@testing-library/react'
import Input from '../Input'

test('Renders input element properly', () => {
  const { getByText } = render(<Input />)
  const linkElement = getByText(/Hello/i)
  expect(linkElement).toBeInTheDocument()
})
