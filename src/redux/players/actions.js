import { createAction } from 'redux-actions'
import * as api from './../../api/players'

// Fetch all players
export const fetchPlayers = createAction('FETCH_PLAYERS', async (page) => {
  const response = await api.fetchPlayers(page)
  return response
})

// Fetch one player
export const fetchPlayer = createAction('FETCH_PLAYER', async (id) => {
  const response = await api.fetchPlayer(id)
  return response
})
