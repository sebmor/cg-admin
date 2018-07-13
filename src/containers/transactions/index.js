import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TxHead from './TxHead'

const data = [
  { id: "12223", from: "123", to: "123", amount: 0.000000001, time: "12/12/18" },
  { id: "12223", from: "123", to: "123", amount: 0.000000001, time: "12/12/18" },
  { id: "12223", from: "123", to: "123", amount: 0.000000001, time: "12/12/18" },
  { id: "12223", from: "123", to: "123", amount: 0.000000001, time: "12/12/18" },
  { id: "12223", from: "123", to: "123", amount: 0.000000001, time: "12/12/18" }
]

function renderTransactions (players) {
  return players.map((n, index) => {
    return (
      <TableRow key={index} hover={true}>
        <TableCell>{n.id}</TableCell>
        <TableCell>{n.from}</TableCell>
        <TableCell>{n.to}</TableCell>
        <TableCell>{n.amount}</TableCell>
        <TableCell>{n.time}</TableCell>
      </TableRow>
    )
  })
}

const Transactions = (props) => (
  <Paper>
    <Table>
      <TxHead />
      <TableBody>
        {renderTransactions(data)}
      </TableBody>
    </Table>
  </Paper>
)

export default Transactions
