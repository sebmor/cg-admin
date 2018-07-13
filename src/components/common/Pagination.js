import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'

const PAGE_RANGE = 5
const MARGINS_PAGE_DISPLAYED = 0

class Pagination extends Component {
  render () {
    const totalPages = Math.ceil(this.props.totalEntries / 2)
    if (totalPages <= 1) {
      return null
    }
    return (
      <div className='pagination is-centered' role='navigation' aria-label='pagination'>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          pageCount={totalPages}
          marginPagesDisplayed={MARGINS_PAGE_DISPLAYED}
          pageRangeDisplayed={PAGE_RANGE}
          initialPage={0}
          onPageChange={this.props.onPageChange}
          {...this.props}
         />
      </div>
    )
  }
}

export default Pagination
