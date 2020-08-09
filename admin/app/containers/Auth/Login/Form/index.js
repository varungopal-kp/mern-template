import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import { renderTextField } from 'components/Fields/material';
import validate from './validate';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function index({ handleSubmit }) {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Field
        name="username"
        type="email"
        label="Email"
        component={renderTextField}
        required
      />
      <Field
        name="password"
        type="password"
        label="Password"
        component={renderTextField}
        required
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>
    </form>
  );
}

export default reduxForm({
  form: 'LoginForm',
  validate,
  initialValues: {},
  enableReinitialize: true,
  destroyOnUnmount: true,
})(index);
