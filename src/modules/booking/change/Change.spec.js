import React from 'react'
import { render } from '@testing-library/react'
import Change from './Change.page'
import * as testUtils from 'common/utils/test.utils'

const defaultProps = testUtils.createDefaultProps({
  event: {
    availableTimesAndSeats: [],
  },
  onBook: testUtils.emptyFunc,
})

test('Renders change page message properly', () => {
  const { getByRole } = render(<Change {...defaultProps} />)
  const linkElement = getByRole('alert')
  expect(linkElement).toBeInTheDocument()
})
