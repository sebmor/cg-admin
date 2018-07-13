import api from './../utils/httpApi'

export function fetchPlayers (page) {
  return api.get('/admin/players', { params: { page: page }})
}

export function fetchPlayer (id) {
  return api.get(`/admin/players/${id}`)
}
