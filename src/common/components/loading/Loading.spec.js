import React from 'react'
import { render } from '@testing-library/react'
import Loading from './Loading'
import * as testUtils from 'common/utils/test.utils'

const defaultProps = testUtils.createDefaultProps({})

test('Renders the loading element properly', () => {
  const { getByAltText } = render(<Loading {...defaultProps} />)
  const linkElement = getByAltText(/wait/i)
  expect(linkElement).toBeInTheDocument()
})
