import React, { Component } from 'react'
import find from 'lodash/find'
// MUI
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
// Components
import TableFooterPagination from './TableFooterPagination'

const PaginatedRow = (props) => {
  const { row, columns } = props
  return (
    <TableRow>
      {columns.map((column, i) => {
        const value = find(row, { 'id': column.id })
        const { Cell } = column
        if (!value) return null
        if (Cell) {
          return <TableCell key={i} numeric={column.numeric}><Cell value={value.value} /></TableCell>
        }
        return <TableCell key={i} numeric={column.numeric}>{value.value}</TableCell>
        }
      )}
    </TableRow>
  )
}

class PaginatedTable extends Component {
  constructor (props) {
    super (props)
    this.state = {
      page: 0
    }
  }

  handleChangePage(page) {
    this.setState({ page })
    this.props.onPageChange(page)
  }

  render() {
    const { columns, rows, totalEntries } = this.props
    return (
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, i) =>
              <TableCell key={`header-${i}`} numeric={column.numeric}>{column.value}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) =>
            <PaginatedRow key={i} row={row} columns={columns} />
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableFooterPagination
              totalEntries={totalEntries}
              page={this.state.page}
              handleChangePage={(page) => this.handleChangePage(page)}
            />
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
}

export default PaginatedTable
