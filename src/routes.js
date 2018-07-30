import React from 'react'
import Switch from 'react-router/Switch'
import Route from 'react-router/Route'
import Redirect from 'react-router/Redirect'
import { userIsAuthenticated, userIsNotAuthenticated } from './components/hocs/AuthWrap'
// Routes
import App from './containers/app'
import Login from './containers/login'
import Dashboard from './containers/dashboard'
import Deposits from './containers/deposits'
import Payments from './containers/payments'
import Players from './containers/players'
import Player from './containers/players/Player'
import Bets from './containers/bets'
import Bet from './containers/bets/Bet'
import Broadcast from './containers/broadcast'

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} component={userIsAuthenticated(component)}/>
)

export default () => (
  <Switch>
    <Route path="/login" component={userIsNotAuthenticated(Login)} />
    <App>
      <Route exact path="/" render={() => <Redirect to="/dashboard" />}/>
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/players" exact component={Players} />
      <PrivateRoute path="/players/:id" component={Player} />
      <PrivateRoute path="/bets" exact component={Bets} />
      <PrivateRoute path="/bets/:id" component={Bet} />
      <PrivateRoute path="/deposits" exact component={Deposits} />
      <PrivateRoute path="/payments" exact component={Payments} />
      <PrivateRoute path="/broadcast" exact component={Broadcast} />
    </App>
  </Switch>
)
