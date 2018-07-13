import { createAction } from 'redux-actions'
import * as api from './../../api/user'
import setAuthToken from './../../utils/setAuthToken'

// Gets current user
export const getCurrentUser = () => (dispatch, getState) => {
  // Abort if already logged in
  if (getState().auth.isAuthenticated) { return Promise.resolve() }
  // Abort if no token is set
  const token = sessionStorage.getItem('token')
  if (!token) { return Promise.resolve() }
  setAuthToken(token)

  return dispatch(_getCurrentUser(token))
  .catch(() => {
    console.warn('Invalid access token')
    // Invalid token
    sessionStorage.removeItem('token')
  })
}

export const _getCurrentUser = createAction('GET_CURRENT_USER', async () => {
  const response = await api.getCurrentUser()
  return response
})


// Logs in a user
const _loginUser = createAction('LOGIN_USER', async (loginData) => {
  const response = await api.loginUser(loginData)
  return response
})

export const loginUser = (loginData) => (dispatch, getState) => {
  // Abort if already logged in
  if (getState().auth.isAuthenticated) { return Promise.resolve() }

  return dispatch(_loginUser(loginData))
  .then((res) => {
    const token = res.value
    sessionStorage.setItem('token', token)
    setAuthToken(token)
  })
}

// Logs out a user
export const logoutUser = createAction('LOGOUT_USER', () => {
  sessionStorage.removeItem('token')
  setAuthToken(false)
})
