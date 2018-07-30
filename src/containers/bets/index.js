import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
// MUI
import Paper from '@material-ui/core/Paper'
// Components
import PaginatedTable from './../../components/common/table/PaginatedTable'
// Utils
import satoshiFormat from './../../utils/satoshiFormat'
// Actions
import { fetchBets } from './../../redux/bets/actions'
// Selectors
import { getBets, getTotalBets } from './../../redux/bets/selectors'
// CSS
import './games.css'

function renderRows (bets) {
  return bets.map(n => [
      { id: 'id', value: n.id },
      { id: 'player', value: n.player_id },
      { id: 'game', value: n.game_type },
      { id: 'wager', value: n.wager, numeric: true },
      { id: 'result', value: n.profit, numeric: true },
      { id: 'date', value: n.date }
    ]
  )
}

class Bets extends Component {
  componentDidMount() {
    this.props.fetchBets()
  }

  render() {
    const { bets, totalBets, fetchBets } = this.props

    const columns = [
      {
        id: 'id', value: 'ID',
        Cell: props => <Link to={`/bets/${props.value}`}>{props.value}</Link>
      },
      {
        id: 'player', value: 'Player',
        Cell: props => <Link to={`/players/${props.value}`}>{props.value}</Link>
      },
      {
        id: 'game', value: 'Game'
      },
      {
        id: 'wager', value: 'Wager',
        numeric: true,
        Cell: props => <span>{satoshiFormat(props.value)} BTC</span>
      },
      {
        id: 'result', value: 'Result',
        numeric: true,
        Cell: (props) => {
          const result = props.value >= 0 ? 'win' : 'loss'
          return <span className={result}>{satoshiFormat(props.value)} BTC</span>
        }
      },
      {
        id: 'date', value: 'Date',
        Cell: props => <span>{dateFormat(props.value)}</span>
      }
    ]
    const rows = renderRows(bets)
    return (
      <Paper>
        <PaginatedTable
          totalEntries={totalBets}
          onPageChange={(page) => fetchBets(page)}
          columns={columns}
          rows={rows}
        />
      </Paper>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchBets: (page) => dispatch(fetchBets(page))
  }
}


function mapStateToProps (state) {
  return {
    bets: getBets(state),
    totalBets: getTotalBets(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bets)
