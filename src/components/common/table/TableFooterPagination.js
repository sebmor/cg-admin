import React, { Component } from 'react'
import TablePagination from '@material-ui/core/TablePagination'

class TableFooterPagination extends Component {
  static defaultProps = {
    totalEntries: 0
  }

  render () {
    const { totalEntries, page, handleChangePage } = this.props
    const ROWS_PER_PAGE = 3
    return (
      <TablePagination
        count={totalEntries}
        rowsPerPage={ROWS_PER_PAGE}
        rowsPerPageOptions={[ROWS_PER_PAGE]}
        page={page}
        onChangePage={(ev, page) => handleChangePage(page)}
      />
    )
  }
}

export default TableFooterPagination
