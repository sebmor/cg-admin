import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './redux/store'
import Routes from './routes'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'
// CSS
import './index.css'
// Actions
import { getCurrentUser } from './redux/auth/actions'

store.dispatch(getCurrentUser())

const target = document.querySelector('#root')

injectTapEventPlugin()
render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  target
)
