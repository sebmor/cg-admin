import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import truncate from 'lodash/truncate'
import find from 'lodash/find'
import get from 'lodash/get'
import dateFormat from 'dateformat'
// MUI
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
// Components
import PaginatedTable from './../../components/common/table/PaginatedTable'
// Utils
import satoshiFormat from './../../utils/satoshiFormat'
// Actions
import { fetchPayments, deletePayment, processPayment } from './../../redux/wallet/actions'
// Selectors
import { getPayments, getTotalPayments } from './../../redux/wallet/selectors'
// CSS
import './payments.css'

function renderPayments (payments) {
  return payments.map(n => [
      { id: 'id', value: n.id },
      { id: 'player', value: n.player_id },
      { id: 'amount', value: n.amount, numeric: true },
      { id: 'address', value: n.address },
      { id: 'status', value: n.status },
      { id: 'created', value: n.created_at },
      { id: 'actions', value: null }
    ]
  )
}

class Payments extends Component {
  componentDidMount() {
    this.props.fetchPayments()
  }

  deletePayment(props) {
    const { value } = find(props.row, 'id')
    this.props.deletePayment(value).then(() => {
      this.props.fetchPayments()
    })
  }

  processPayment(props) {
    const { value } = find(props.row, 'id')
    this.props.processPayment(value).then(() => {
      this.props.fetchPayments()
    })
  }

  render() {
    const { payments, totalPayments, fetchPayments } = this.props
    const columns = [
      {
        id: 'id', value: 'ID'
      },
      {
        id: 'player', value: 'Player',
        Cell: ({value}) => <Link to={`/players/${value}`}>{truncate(value, { 'length': 10 })}</Link>
      },
      {
        id: 'amount', value: 'Amount',
        numeric: true,
        Cell: ({value}) => <span>{satoshiFormat(value)} BTC</span>
      },
      {
        id: 'address', value: 'Address',
        Cell: ({value}) => <a href={`https://www.blockchain.com/en/btc/address/${value}`} target='_blank'>{truncate(value, { 'length': 15 })}</a>
      },
      {
        id: 'status', value: 'Status',
        Cell: ({value}) => <span className={value}>{value}</span>
      },
      {
        id: 'created', value: 'Created',
        Cell: ({value}) => <span>{dateFormat(value)}</span>
      },
      {
        id: 'actions', value: 'Actions',
        Cell: (props) => {
          const status = get(find(props.row, ['id', 'status']), 'value')
          if (status === 'pending') {
            return (
              <div>
                <Button onClick={() => this.deletePayment(props)}>Delete</Button>
                <Button onClick={() => this.processPayment(props)}>Process</Button>
              </div>
            )
          } else {
            return null
          }
        }
      }
    ]
    const rows = renderPayments(payments)
    return (
      <Paper>
        <PaginatedTable
          totalEntries={totalPayments}
          onPageChange={(page) => fetchPayments(page)}
          columns={columns}
          rows={rows}
        />
      </Paper>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPayments: (page) => dispatch(fetchPayments(page)),
    deletePayment: (payment_id) => dispatch(deletePayment(payment_id)),
    processPayment: (payment_id) => dispatch(processPayment(payment_id)),
  }
}

function mapStateToProps (state) {
  return {
    payments: getPayments(state),
    totalPayments: getTotalPayments(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payments)
