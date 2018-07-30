import { createAction } from 'redux-actions'
import * as api from './../../api/wallet'

// Fetch balance
export const fetchBalance = createAction('FETCH_BALANCE', async () => {
  const response = await api.fetchBalance()
  return response
})

// Fetch Deposits
export const fetchDeposits = createAction('FETCH_DEPOSITS', async () => {
  const response = await api.fetchDeposits()
  return response
})

// Fetch Payments
export const fetchPayments = createAction('FETCH_PAYMENTS', async () => {
  const response = await api.fetchPayments()
  return response
})

// Delete Payment
export const deletePayment = createAction('DELETE_PAYMENT', async (payment_id) => {
  const response = await api.deletePayment(payment_id)
  return response
})

// Process Payment
export const processPayment = createAction('PROCESS_PAYMENT', async (payment_id) => {
  const response = await api.processPayment(payment_id)
  return response
})
