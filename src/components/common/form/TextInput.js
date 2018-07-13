import React from 'react'
import TextField from '@material-ui/core/TextField'

const TextInput = ({type, field, form: { touched, isSubmitting, errors }, ...props}) => {
  const hasError = !!touched[field.name] && !!errors[field.name]
  return (
    <TextField
      type={type}
      error={hasError}
      helperText={errors[field.name]}
      {...field} {...props} />
  )
}

export default TextInput

TextInput.defaultProps = {
  type: 'text'
}
