import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter, matchPath } from 'react-router'
// MUI
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const NavItem = ({href, title, icon: Icon, location}) => (
  <MenuItem button component={NavLink} to={href} selected={isSelected(location.pathname, href)}>
    <ListItemIcon><Icon /></ListItemIcon>
    <ListItemText primary={title} />
  </MenuItem>
)

function isSelected(path, href) {
  return matchPath(path, { path: href }) != null
}

export default withRouter(NavItem)
