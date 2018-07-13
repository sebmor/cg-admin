import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// CSS
import styles from './TotalBalance.style'

class TotalBalance extends Component {
  render() {

    return (
      <Card>
        <CardContent>
          <Typography variant="headline">Hot Wallet</Typography>
          <Typography variant="subheading" color="textSecondary">
              12 BTC
          </Typography>
        </CardContent>
      </Card>
    )

  }
}


function mapDispatchToProps (dispatch) {
  return {

  }
}


function mapStateToProps (state) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TotalBalance))
