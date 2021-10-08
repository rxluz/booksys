import React from 'react'
import { render } from '@testing-library/react'
import * as testUtils from 'common/utils/test.utils'
import Pagination from './Pagination'

const defaultProps = testUtils.createDefaultProps({
  current: 1,
  total: 100,
  onPageChange: testUtils.emptyFunc,
  label: 'pagination',
})

test('Renders pagination component properly', () => {
  const { getByRole } = render(<Pagination {...defaultProps} />)
  const linkElement = getByRole('slider')
  expect(linkElement).toBeInTheDocument()
  expect(linkElement.firstChild.classList.contains('pagination')).toBe(true)
})
