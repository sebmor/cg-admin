import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { truncate } from 'lodash'
import dateFormat from 'dateformat'
// MUI
import Paper from '@material-ui/core/Paper'
// Components
import PaginatedTable from './../../components/common/table/PaginatedTable'
// Utils
import satoshiFormat from './../../utils/satoshiFormat'
// Actions
import { fetchDeposits } from './../../redux/wallet/actions'
// Selectors
import { getDeposits, getTotalDeposits } from './../../redux/wallet/selectors'
// CSS
import './deposits.css'

function renderDeposits (deposits) {
  return deposits.map(n => [
      { id: 'id', value: n.id },
      { id: 'player', value: n.player_id },
      { id: 'amount', value: n.amount, numeric: true },
      { id: 'address', value: n.address },
      { id: 'txid', value: n.txid },
      { id: 'status', value: n.status },
      { id: 'created', value: n.created_at }
    ]
  )
}

class Deposits extends Component {
  componentDidMount() {
    this.props.fetchDeposits()
  }

  render() {
    const { deposits, totalDeposits, fetchDeposits } = this.props

    const columns = [
      {
        id: 'id', value: 'ID'
      },
      {
        id: 'player', value: 'Player',
        Cell: props => <Link to={`/players/${props.value}`}>{truncate(props.value, { 'length': 10 })}</Link>
      },
      {
        id: 'amount', value: 'Amount',
        numeric: true,
        Cell: props => <span>{satoshiFormat(props.value)} BTC</span>
      },
      {
        id: 'address', value: 'Address',
        Cell: ({value}) => <a href={`https://www.blockchain.com/en/btc/address/${value}`} target='_blank'>{truncate(value, { 'length': 15 })}</a>
      },
      {
        id: 'txid', value: 'Txid',
        Cell: ({value}) => <a href={`https://www.blockchain.com/en/btc/tx/${value}`} target='_blank'>{truncate(value, { 'length': 20 })}</a>
      },
      {
        id: 'status', value: 'Status',
        Cell: ({value}) => <span className={value}>{value}</span>
      },
      {
        id: 'created', value: 'Created',
        Cell: ({value}) => <span>{dateFormat(value)}</span>
      }
    ]
    const rows = renderDeposits(deposits)
    return (
      <Paper>
        <PaginatedTable
          totalEntries={totalDeposits}
          onPageChange={(page) => fetchDeposits(page)}
          columns={columns}
          rows={rows}
        />
      </Paper>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchDeposits: (page) => dispatch(fetchDeposits(page))
  }
}


function mapStateToProps (state) {
  return {
    deposits: getDeposits(state),
    totalDeposits: getTotalDeposits(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deposits)
