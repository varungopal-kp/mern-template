import React from 'react';

export default function input({
  input,
  className,
  label,
  name,
  type,
  placeholder,
}) {
  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <input {...input} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}
