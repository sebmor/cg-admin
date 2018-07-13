export default theme => ({
  root: {
     flexGrow: 1,
     zIndex: 1,
     overflow: 'hidden',
     position: 'relative',
     display: 'flex',
   },
   content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
})
