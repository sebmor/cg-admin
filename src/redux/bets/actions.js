import { createAction } from 'redux-actions'
import * as api from './../../api/bets'

// Fetch all bets
export const fetchBets = createAction('FETCH_BETS', async (page) => {
  const response = await api.fetchBets(page)
  return response
})

// Fetch one bet
export const fetchBet = createAction('FETCH_BET', async (id) => {
  const response = await api.fetchBet(id)
  return response
})
