import React from 'react'
import { render } from '@testing-library/react'
import Warning from './Warning'
import EmailImg from 'common/components/warning/email.svg'
import * as testUtils from 'common/utils/test.utils'

const defaultProps = testUtils.createDefaultProps({
  image: EmailImg,
  imageAlt: 'image desc',
  title: 'title',
  description: 'description',
  footerMessage: 'footer message',
  callToActionText: 'call to action text',
  callToActionType: 'primary',
  onClickCallToAction: testUtils.emptyFunc,
})

test('Renders warning component properly', () => {
  const { getByRole } = render(<Warning {...defaultProps} />)
  const linkElement = getByRole('alert')
  expect(linkElement).toBeInTheDocument()
})

test('Renders warning component content properly', () => {
  const { getByRole } = render(<Warning {...defaultProps} />)
  const linkElement = getByRole('alert')
  expect(linkElement.firstChild.classList.contains('warning__content')).toBe(true)
})

test('Renders warning component footer properly', () => {
  const { getByRole } = render(<Warning {...defaultProps} />)
  const linkElement = getByRole('alert')
  expect(linkElement.lastChild.classList.contains('warning__footer')).toBe(true)
})

test('Renders warning component image properly', () => {
  const { getByRole } = render(<Warning {...defaultProps} />)
  const linkElement = getByRole('presentation')
  expect(linkElement).toBeInTheDocument()
})
