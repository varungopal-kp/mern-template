const validate = values => {
  const errors = {};

  if (!values.get('username')) {
    errors.username = 'Required';
  }
  if (!values.get('password')) {
    errors.password = 'Required';
  }

  return errors;
};

export default validate;
