import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './../../components/layout/Header'
import Navigation from './../../components/layout/Navigation'
// CSS
import styles from './app.style'

class App extends Component {
  render() {
    const { classes, children } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Header />
          <Navigation />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </React.Fragment>
    )
  }
}

export default connect()(withStyles(styles)(App))
