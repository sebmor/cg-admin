import React, { Component } from 'react'
import { connect } from 'react-redux'
// Components
import SendForm from './../../components/telegram/sendForm'
// MUI
import { Paper } from '@material-ui/core'

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
