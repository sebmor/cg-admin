export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.primary[500]
  },
  card: {
    minWidth: '300px',
    marginTop: '6em'
  },
  cardHeader: {
    margin: '20px 20px 0 20px',
    display: 'flex',
    justifyContent: 'center'
  },
  cardContent: {
    margin: '20px'
  },
  formGroup: {
    marginTop: '20px'
  },
  avatar: {
    color: '#fff',
    backgroundColor: theme.palette.secondary[500]
  }
})
