import React from 'react'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
// Components
import Loader from './../common/Loader'

const userIsAuthenticatedDefaults = {
  authenticatedSelector: state => state.auth.isAuthenticated,
  authenticatingSelector: state => state.auth.isLoading,
  AuthenticatingComponent: () => <Loader />
}

export const userIsAuthenticated = connectedRouterRedirect({
  ...userIsAuthenticatedDefaults,
  redirectPath: '/login'
})

const userIsNotAuthenticatedDefaults = {
  authenticatedSelector: state => !state.auth.isAuthenticated
}

export const userIsNotAuthenticated = connectedRouterRedirect({
  ...userIsNotAuthenticatedDefaults,
  redirectPath: '/',
  allowRedirectBack: false
})
