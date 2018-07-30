import React from 'react'
// MUI
import { Drawer, withStyles } from '@material-ui/core'
import MenuList from '@material-ui/core/MenuList'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import BetsIcon from '@material-ui/icons/Games'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import FlightTakeOffIcon from '@material-ui/icons/FlightTakeoff'
import BroadcastIcon from '@material-ui/icons/Textsms'
// Components
import NavItem from './NavItem'

const drawerWidth = 240

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar
})

const Navigation  = ({children, classes, location}) => (
  <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
    <div className={classes.toolbar} />
    <MenuList component="nav">
      <NavItem href="/dashboard" icon={DashboardIcon} title="Dashboard" />
      <NavItem href="/players" icon={PeopleIcon} title="Players" />
      <NavItem href="/bets" icon={BetsIcon} title="Bets" />
      <NavItem href="/deposits" icon={FlightLandIcon} title="Deposits" />
      <NavItem href="/payments" icon={FlightTakeOffIcon} title="Payments" />
      <NavItem href="/broadcast" icon={BroadcastIcon} title="Broadcast" />
    </MenuList>
  </Drawer>
)

export default withStyles(styles)(Navigation)
