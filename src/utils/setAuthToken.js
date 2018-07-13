import api from './httpApi'

// Set Header Token
export default function setAuthToken (token) {
  if (token) {
    api.defaults.headers.common['x-access-token'] = token
  } else {
    delete api.defaults.headers.common['x-access-token']
  }
}
