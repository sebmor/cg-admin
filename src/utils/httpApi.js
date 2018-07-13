import axios from 'axios'
import qs from 'qs'
import CONFIG from './../config.json'

const api = axios.create({
  baseURL: CONFIG.api_uri,
  timeout: 10000,
  responseType: 'json',
  paramsSerializer (params) {
    return qs.stringify(params)
  }
})

// Request interceptor
api.interceptors.request.use((config) => {
  // Do something before request is sent
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// Response interceptor
api.interceptors.response.use((response) => {
  // Response interception
  return response.data
}, (error) => {
  // Response error handling
  if (!error.response) {
    return Promise.reject('Network Error')
  } else {
    return Promise.reject(error.response.data.message)
  }
})

export default api
