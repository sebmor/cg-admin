import React, { Component } from 'react'
import { connect } from 'react-redux'
import dateFormat from 'dateformat'
import { get } from 'lodash'
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
import { fetchPlayer } from './../../redux/players/actions'
// Selectors
import { getPlayer } from './../../redux/players/selectors'
// CSS
import styles from './Player.style'

class Player extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchPlayer(id)
  }

  render() {
    if (!this.props.player) {
      return <CircularProgress />
    }
    const { classes, player } = this.props
    const { id, created_at, tg_uid, tg_first_name, tg_last_name, tg_username, tg_language_code, language, is_vip } = player
    const balance = satoshiFormat(player.balances.balance)
    const address = get(player, 'addresses.address')

    return (
      <div>
        <Paper className={classes.playerDetails}>
          <Toolbar>
            <Typography variant="title">Player Details</Typography>
          </Toolbar>
          <Divider />
          <DetailRow label="ID" value={id} />
          <Divider />
          <DetailRow label="Created" value={dateFormat(created_at)} />
          <Divider />
          <DetailRow label="Telegram ID" value={tg_uid} />
          <Divider />
          <DetailRow label="Telegram First Name" value={tg_first_name} />
          <Divider />
          <DetailRow label="Telegram Last Name" value={tg_last_name} />
          <Divider />
          <DetailRow label="Telegram Username" value={tg_username} />
          <Divider />
          <DetailRow label="Telegram Language code" value={tg_language_code} />
          <Divider />
          <DetailRow label="Language" value={language} />
          <Divider />
          <DetailRow label="VIP" value={<Checkbox disabled checked={!!is_vip} />} />
          <Divider />
          <DetailRow label="Address" value={<a href={`https://www.blockchain.com/en/btc/address/${address}`} target='_blank'>{address}</a>} />
        </Paper>
        <Paper>
          <Toolbar>
            <Typography variant="title">Player Balance</Typography>
          </Toolbar>
          <Divider />
          <DetailRow label="Bitcoin" value={<span>{balance} BTC</span>} />
        </Paper>
      </div>
    )
  }
}


function mapDispatchToProps (dispatch) {
  return {
    fetchPlayer: (id) => dispatch(fetchPlayer(id))
  }
}


function mapStateToProps (state) {
  return {
    player: getPlayer(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Player))
