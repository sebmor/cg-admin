import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

class TxHead extends Component {
  render() {
    return (
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>From</TableCell>
          <TableCell>To</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Time</TableCell>
        </TableRow>
      </TableHead>
    )
  }
}

export default TxHead
