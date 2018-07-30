import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// Actions
import { fetchBalance } from './../../redux/wallet/actions'
// Selectors
import { getConfirmedBalance, getUnconfirmedBalance } from './../../redux/wallet/selectors'
// Utils
import satoshiFormat from './../../utils/satoshiFormat'
// CSS
import styles from './TotalBalance.style'

class TotalBalance extends Component {
  componentDidMount() {
    this.props.fetchBalance()
  }

  render() {
    const { confirmedBalance } = this.props

    return (
      <Card>
        <CardContent>
          <Typography variant="headline">Hot Wallet</Typography>
          <Typography variant="subheading" color="textSecondary">
            {satoshiFormat(confirmedBalance)} BTC
          </Typography>
        </CardContent>
      </Card>
    )

  }
}


function mapDispatchToProps (dispatch) {
  return {
    fetchBalance: () => dispatch(fetchBalance())
  }
}


function mapStateToProps (state) {
  return {
    confirmedBalance: getConfirmedBalance(state),
    unconfirmedBalance: getUnconfirmedBalance(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TotalBalance))
