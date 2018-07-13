import { handleActions, combineActions } from 'redux-actions'

const INITIAL_STATE = {
  isLoading: false,
  isAuthenticated: false,
  currentUser: null
}

const authReducer = handleActions({
  [combineActions('LOGIN_USER_INIT', 'GET_CURRENT_USER_INIT')]: (state, action) => ({
    ...state,
    isLoading: true
  }),
  LOGIN_USER_SUCCESS: (state, action) => ({
    ...state,
    isLoading: false,
    isAuthenticated: true,
    currentUser: {
      ...action.payload
    }
  }),
  GET_CURRENT_USER_SUCCESS: (state, action) => ({
    ...state,
    isLoading: false,
    isAuthenticated: true,
    currentUser: {
      ...state.currentUser,
      ...action.payload
    }
  }),
  [combineActions('LOGIN_USER_ERROR', 'LOGOUT_USER', 'GET_CURRENT_USER_ERROR')]: (state, action) => ({
    ...state,
    isLoading: false,
    isAuthenticated: false
  })
}, INITIAL_STATE)

export default authReducer
