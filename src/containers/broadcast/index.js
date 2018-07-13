import React, { Component } from 'react'
import { connect } from 'react-redux'
// Components
import SendForm from './../../components/telegram/sendForm'
// MUI
import Typography from '@material-ui/core/Typography'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
// Actions
import { fetchBet } from './../../redux/bets/actions'

class Broadcast extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Paper>
          <SendForm />
        </Paper>
      </div>
    )

  }
}

export default connect()(Broadcast)
