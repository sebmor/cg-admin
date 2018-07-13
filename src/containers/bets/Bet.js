import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'
// MUI
import Typography from '@material-ui/core/Typography'
import { Paper } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import CircularProgress from '@material-ui/core/CircularProgress'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
// Components
import DetailRow from './../../components/common/detail/DetailRow'
// Utils
import satoshiFormat from './../../utils/satoshiFormat'
// Actions
import { fetchBet } from './../../redux/bets/actions'
// Selectors
import { getBet } from './../../redux/bets/selectors'

class Bet extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchBet(id)
  }

  render() {
    if (!this.props.bet) {
      return <CircularProgress />
    }
    const { classes, bet } = this.props
    const { id, player_id, date, wager, profit, game_type, game_details, seed_details } = bet
    const result = profit >= 0 ? 'win' : 'loss'

    return (
      <div>
        <Paper>
          <Toolbar>
            <Typography variant="title">Game Details</Typography>
          </Toolbar>
          <Divider />
          <DetailRow label="ID" value={id} />
          <Divider />
          <DetailRow label="Player ID" value={<Link to={`/players/${player_id}`}>{player_id}</Link>} />
          <Divider />
          <DetailRow label="Date" value={dateFormat(date)} />
          <Divider />
          <DetailRow label="Game Type" value={game_type} />
          <Divider />
          <DetailRow label="Wager" value={`${satoshiFormat(wager)} BTC`} />
          <Divider />
          <DetailRow label="Profit" customClass={result} value={`${satoshiFormat(profit)} BTC`} />
          <Divider />
          <DetailRow label="Details" value={game_details} />
          <Divider />
          <DetailRow label="Seed" value={seed_details} />
        </Paper>
      </div>
    )

  }
}


function mapDispatchToProps (dispatch) {
  return {
    fetchBet: (id) => dispatch(fetchBet(id))
  }
}


function mapStateToProps (state) {
  return {
    bet: getBet(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bet)
