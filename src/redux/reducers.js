import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Import reducers
import authReducer from './auth/reducer'
import playersReducer from './players/reducer'
import betsReducer from './bets/reducer'
import walletReducer from './wallet/reducer'

export default combineReducers({
  router: routerReducer,
  auth: authReducer,
  players: playersReducer,
  bets: betsReducer,
  wallet: walletReducer
})
