import React from 'react'
import * as PropTypes from 'prop-types'
import PaginationLib from 'react-responsive-pagination'
import './Pagination.scss'

const Pagination = ({ current, total, onPageChange, label, translate }) => (
  <nav
    role="slider"
    aria-label={label}
    aria-valuenow={Math.floor(current)}
    aria-valuemin="1"
    aria-valuemax={Math.ceil(total)}
    aria-valuetext={translate('Page {num}', { num: current })}
  >
    <PaginationLib
      current={Math.floor(current)}
      total={Math.ceil(total)}
      onPageChange={onPageChange}
    />
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
