import React from 'react'
import PaginationLib from 'react-responsive-pagination'
import './Pagination.scss'

const Pagination = ({ current, total, onPageChange }) => (
  <PaginationLib current={current} total={total} onPageChange={onPageChange} />
)

export default Pagination
