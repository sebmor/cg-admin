import api from './../utils/httpApi'

export function fetchBets (page) {
  return api.get('/admin/bets', { params: { page: page }})
}

export function fetchBet (id) {
  return api.get(`/admin/bets/${id}`)
}
