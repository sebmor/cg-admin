import api from './../utils/httpApi'

export function getCurrentUser () {
  return api.get('/admin/me')
}

export function loginUser (loginData) {
  return api.post('/admin/auth', {
    username: loginData.loginUsername,
    password: loginData.loginPassword
  })
}
