import React from 'react'
import { connect } from 'react-redux'
import { withFormik, Field, Form } from 'formik'
import * as yup from 'yup'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import TextInput from './../common/form/TextInput'
import Snackbar from '@material-ui/core/Snackbar'
// Actions
import { broadcastMessage } from './../../api/telegram'
// CSS
import styles from './sendForm.style'

const formikEnhancer = withFormik({
  // Validation
  validationSchema: yup.object().shape({
    sendMessage: yup.string()
      .required('Message is required')
  }),
  // Default Values
  mapPropsToValues: () => ({
    sendMessage: ''
  }),
  // Handle Submit
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    broadcastMessage(values)
    .then(() => {
      setSubmitting(false)
    })
    .catch((errors) => {
      setSubmitting(false)
      setErrors({form: errors})
    })
  }
})

const SendForm = ({classes, errors, isSubmitting}) => {
  return (
    <div>
      <Toolbar>
        <Typography variant="title">Broadcast a message</Typography>
      </Toolbar>
      <Divider />
      <Snackbar
        variant="success"
        direction="up"
        open={!!errors.form}
        message={errors.form}
      />
      <Form className={classes.formContent}>
        <div className={classes.formGroup}>
          <Field
            name="sendMessage"
            label="Message"
            autoFocus
            multiline={true}
            rows={4}
            rowsMax={8}
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
            >
              Broadcast Message
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default connect()(formikEnhancer(withStyles(styles)(SendForm)))
