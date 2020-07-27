const validate = values => {
  const errors = {};

  if (!values.get('name')) {
    errors.name = 'Required';
  }
  if (!values.get('subject')) {
    errors.subject = 'Required';
  }
  if (!values.get('message')) {
    errors.message = 'Required';
  }
  if (!values.get('email')) {
    errors.email = 'Required';
  }
  return errors;
};

export default validate;
