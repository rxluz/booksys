import React from 'react'
import { render } from '@testing-library/react'
import Input from './Input'

const defaultProps = {
  title: 'input title',
  id: 'input-1',
  placeholder: 'input placeholder',
  value: 'value',
  type: 'text',
  disabled: false,
  showClearButton: false,
  isValid: true,
  onChange: () => {},
}

test('Renders input element title  properly', () => {
  const { getByLabelText } = render(<Input {...defaultProps} />)
  const linkElement = getByLabelText(/title/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders input element placeholder properly', () => {
  const { getByPlaceholderText } = render(<Input {...defaultProps} />)
  const linkElement = getByPlaceholderText(/placeholder/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders input element value properly', () => {
  const { getByDisplayValue } = render(<Input {...defaultProps} />)
  const linkElement = getByDisplayValue(/value/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders input element is not disabled properly', () => {
  const { getByDisplayValue } = render(<Input {...defaultProps} />)
  const linkElement = getByDisplayValue(/value/i)
  expect(linkElement).not.toBeDisabled()
})

test('Renders input element is disabled properly', () => {
  const { getByDisplayValue } = render(<Input {...defaultProps} disabled={true} />)
  const linkElement = getByDisplayValue(/value/i)
  expect(linkElement).toBeDisabled()
})

test('Renders input element warning is rendered properly', () => {
  const { getByRole } = render(
    <Input
      {...defaultProps}
      isValid={false}
      validation={{ test: () => false, message: () => 'validation message' }}
    />,
  )
  const linkElement = getByRole('alert')
  expect(linkElement.classList.contains('input__warning')).toBe(true)
})
