import React, { Component } from 'react'
import TablePagination from '@material-ui/core/TablePagination'

class TableFooterPagination extends Component {
  render () {
    const { totalEntries, page, handleChangePage } = this.props
    const ROWS_PER_PAGE = 20
    return (
      <TablePagination
        count={totalEntries || 0}
        rowsPerPage={ROWS_PER_PAGE}
        rowsPerPageOptions={[ROWS_PER_PAGE]}
        page={page}
        onChangePage={(ev, page) => handleChangePage(page)}
      />
    )
  }
}

export default TableFooterPagination
