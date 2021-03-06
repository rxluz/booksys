import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'
import * as testUtils from 'common/utils/test.utils'

const defaultProps = testUtils.createDefaultProps({
  styleType: 'primary',
  onClick: testUtils.emptyFunc,
  isDisabled: false,
})

test('Renders button content properly', () => {
  const { getByText } = render(<Button {...defaultProps}>Hello mybutton</Button>)
  const linkElement = getByText(/mybutton/i)
  expect(linkElement).toBeInTheDocument()
})

test('Renders button style properly', () => {
  const { getByText } = render(<Button {...defaultProps}>Hello mybutton</Button>)
  const linkElement = getByText(/mybutton/i)
  expect(linkElement.classList.contains('button--primary')).toBe(true)
})

test('Renders button element is disabled properly', () => {
  const { getByText } = render(
    <Button {...defaultProps} isDisabled={true}>
      myButton
    </Button>,
  )
  const linkElement = getByText('myButton')
  expect(linkElement).toBeDisabled()
})
