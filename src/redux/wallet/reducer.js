import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
  confirmedBalance: 0,
  unconfirmedBalance: 0,
  deposits: {
    depositsList: [],
    totalDeposits: null
  },
  payments: {
    paymentsList: [],
    totalPayments: null
  }
}

const walletReducer = handleActions({
  FETCH_BALANCE_SUCCESS: (state, action) => ({
    ...state,
    ...action.payload
  }),
  FETCH_DEPOSITS_SUCCESS: (state, action) => ({
    ...state,
    deposits: {
      depositsList: action.payload.results,
      totalDeposits: action.payload.total
    }
  }),
  FETCH_PAYMENTS_SUCCESS: (state, action) => ({
    ...state,
    payments: {
      paymentsList: action.payload.results,
      totalPayments: action.payload.total
    }
  }),
  PROCESS_PAYMENT_SUCCESS: (state, action) => {
    console.log('state', state)
    console.log('action', action)
    return {
      ...state
    }
  },
  PROCESS_PAYMENT_ERROR: (state, action) => {
    console.log('state', state)
    console.log('action', action)
    return {
      ...state
    }
  }
}, INITIAL_STATE)

export default walletReducer
