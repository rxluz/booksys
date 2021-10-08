import React from 'react'
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

export default Pagination
