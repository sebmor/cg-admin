import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
// Components
import PaginatedTable from './../../components/common/table/PaginatedTable'
// Utils
import satoshiFormat from './../../utils/satoshiFormat'
// Actions
import { fetchPlayers } from './../../redux/players/actions'
// Selectors
import { getPlayers, getTotalPlayers } from './../../redux/players/selectors'

function renderPlayers (players) {
  return players.map(n => [
      { id: 'id', value: n.id },
      { id: 'balance', value: n.balance }
    ]
  )
}

class Players extends Component {
  componentDidMount() {
    this.props.fetchPlayers()
  }

  render() {
    const { players, totalPlayers, fetchPlayers } = this.props

    const columns = [
      {
        id: 'id',
        value: 'ID',
        Cell: props => <Link to={`/players/${props.value}`}>{props.value}</Link>
      },
      {
        id: 'balance',
        value: 'Balance',
        numeric: true,
        Cell: props => <span>{satoshiFormat(props.value)} BTC</span>
      }
    ]
    const rows = renderPlayers(players)
    return (
      <Paper>
        <PaginatedTable
          totalEntries={totalPlayers}
          onPageChange={(page) => fetchPlayers(page)}
          columns={columns}
          rows={rows}
        />
      </Paper>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchPlayers: (page) => dispatch(fetchPlayers(page))
  }
}


function mapStateToProps (state) {
  return {
    players: getPlayers(state),
    totalPlayers: getTotalPlayers(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players)
