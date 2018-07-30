import api from './../utils/httpApi'

export function fetchBalance () {
  return api.get('/admin/balance')
}

export function fetchDeposits () {
  return api.get('/admin/deposits')
}

export function fetchPayments () {
  return api.get('/admin/payments')
}

export function deletePayment (payment_id) {
  const body = {
    payment_id: payment_id
  }
  return api.delete('/admin/payments', { data: body })
}

export function processPayment (payment_id) {
  const body = {
    payment_id: payment_id
  }
  return api.post('/admin/process-payment', body)
}
