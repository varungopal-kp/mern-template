import React from 'react';

export default function textArea({
  input,
  className,
  label,
  name,
  type,
  placeholder,
  meta: { touched, error, warning },
}) {
  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <textarea
        className={touched && error ? `inputError` : ''}
        {...input}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
