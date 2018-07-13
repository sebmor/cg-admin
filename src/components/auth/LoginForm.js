import React from 'react'
import { connect } from 'react-redux'
import { withFormik, Field, Form } from 'formik'
import * as yup from 'yup'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import TextInput from './../common/form/TextInput'
import LockIcon from '@material-ui/icons/LockOutline'
import Avatar from '@material-ui/core/Avatar'
import Snackbar from '@material-ui/core/Snackbar'
// Actions
import { loginUser } from './../../redux/auth/actions'
// CSS
import styles from './LoginForm.style'

const formikEnhancer = withFormik({
  // Validation
  validationSchema: yup.object().shape({
    loginUsername: yup.string()
      .required('Username is required'),
    loginPassword: yup.string()
      .required('Password is required')
  }),
  // Default Values
  mapPropsToValues: () => ({
    loginUsername: '',
    loginPassword: ''
  }),
  // Handle Submit
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    props.dispatch(loginUser(values))
    .catch((errors) => {
      setSubmitting(false)
      setErrors({form: errors})
    })
  }
})

const LoginForm = ({classes, errors, isSubmitting}) => {
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Snackbar
          direction="up"
          open={!!errors.form}
          message={errors.form}
        />
        <div className={classes.cardHeader}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
        </div>
        <Form className={classes.cardContent}>
          <div className={classes.formGroup}>
            <Field
              name="loginUsername"
              label="Username"
              autoFocus
              required
              fullWidth
              component={TextInput}
            />
          </div>
          <div className={classes.formGroup}>
            <Field
              name="loginPassword"
              label="Password"
              type="password"
              required
              fullWidth
              component={TextInput}
            />
          </div>
          <div className={classes.formGroup}>
            <Button
              variant="raised"
              color="secondary"
              type="submit"
              disabled={isSubmitting}
              fullWidth>
                Login
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default connect()(formikEnhancer(withStyles(styles)(LoginForm)))
