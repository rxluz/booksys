import React from 'react'
import { FiAperture } from 'react-icons/fi'
import { render } from '@testing-library/react'
import Icon from './Icon'

test('renders hello world inside the icon', () => {
  const { container } = render(
    <Icon>
      <FiAperture />
    </Icon>,
  )

  expect(container.firstChild.classList.contains('icon')).toBe(true)
})
