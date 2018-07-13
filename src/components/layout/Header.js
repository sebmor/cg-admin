import React, { Component } from 'react'
import { connect } from 'react-redux'
// MUI
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
// Actions
import { logoutUser } from './../../redux/auth/actions'
// CSS
import styles from './Header.style'

class Header extends Component {
  handleLogout (e) {
    e.preventDefault()
    this.props.dispatch(logoutUser())
  }

  render() {
    const { classes } = this.props
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>CryptoGambler Admin</Typography>
          <div className={classes.account}>
            <Button onClick={(e) => this.handleLogout(e)} color="inherit">Logout</Button>
          </div>

        </Toolbar>
      </AppBar>
    )
  }
}

export default connect()(withStyles(styles)(Header))
