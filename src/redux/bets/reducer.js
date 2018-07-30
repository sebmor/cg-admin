import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
  betsList: [],
  betsDetail: null
}

const betsReducer = handleActions({
  FETCH_BETS_SUCCESS: (state, action) => ({
    ...state,
    betsList: action.payload.results,
    totalBets: action.payload.total
  }),
  FETCH_BET_SUCCESS: (state, action) => ({
    ...state,
    betsDetail: action.payload
  })
}, INITIAL_STATE)

export default betsReducer
