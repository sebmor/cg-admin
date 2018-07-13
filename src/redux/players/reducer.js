import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
  playersList: [],
  playersDetail: null
}

const playersReducer = handleActions({
  FETCH_PLAYERS_SUCCESS: (state, action) => ({
    ...state,
    playersList: action.payload.results,
    totalPlayers: action.payload.total
  }),
  FETCH_PLAYER_SUCCESS: (state, action) => ({
    ...state,
    playersDetail: action.payload
  })
}, INITIAL_STATE)

export default playersReducer
