// Balance
export const getConfirmedBalance = state => state.wallet.confirmedBalance
export const getUnconfirmedBalance = state => state.wallet.getUnconfirmedBalance

// Deposits
export const getDeposits = state => state.wallet.deposits.depositsList
export const getTotalDeposits = state => state.wallet.deposits.totalDeposits

// Payments
export const getPayments = state => state.wallet.payments.paymentsList
export const getTotalPayments = state => state.wallet.payments.totalPayments
