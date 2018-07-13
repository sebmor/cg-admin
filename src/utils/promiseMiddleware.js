import promiseMiddleware from 'redux-promise-middleware'

export default promiseMiddleware({
  promiseTypeSuffixes: ['INIT', 'SUCCESS', 'ERROR']
})
