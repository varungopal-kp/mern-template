import TextField from '@material-ui/core/TextField';
import React from 'react';

export const renderTextField = ({
  input,
  label,
  type,
  name,
  id,
  required,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    error={(touched && error) || false}
    variant="outlined"
    margin="normal"
    required={required}
    fullWidth
    name={name}
    label={label}
    type={type}
    id={id}
    autoComplete="off"
    {...input}
    {...custom}
  />
);
