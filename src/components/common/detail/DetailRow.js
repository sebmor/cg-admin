import React from 'react'
import classNames from 'classnames'
// MUI
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  detailRow: {
    padding: '20px'
  },
  label: {
    width: '20%',
    display: 'inline-block',
    fontWeight: 'bold',
    fontSize: '15px'
  },
  text: {
    display: 'inline-block'
  }
})

const DetailRow = ({  classes, label, value, customClass }) => (
  <div className={classNames(classes.detailRow, customClass)}>
    <Typography color="textSecondary" className={classes.label}>{label}</Typography><div className={classes.text}>{value}</div>
  </div>
)

export default withStyles(styles)(DetailRow)
