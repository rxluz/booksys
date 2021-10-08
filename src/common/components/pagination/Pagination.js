import React from 'react'
import * as PropTypes from 'prop-types'
import PaginationLib from 'react-responsive-pagination'
import './Pagination.scss'

const Pagination = ({ current, total, onPageChange, label, translate }) => (
  <nav
    role="slider"
    aria-label={label}
    aria-valuenow={current}
    aria-valuemin="1"
    aria-valuemax={total}
    aria-valuetext={translate('Page {num}', { num: current })}
  >
    <PaginationLib current={current} total={total} onPageChange={onPageChange} />
  </nav>
)

Pagination.defaultProps = {
  translate: (value) => value,
}

Pagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  onPageChange: PropTypes.func,
  label: PropTypes.string,
  translate: PropTypes.func,
}

export default Pagination
