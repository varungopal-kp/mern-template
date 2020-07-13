import React from 'react';

export default function select({ input, name, options }) {
  return (
    <select
      {...input}
      name={name}
      onChange={e => input.onChange(e.target.value)}
    >
      <option disabled>Select</option>
      {options &&
        options.map((_a,i) => <option id={i} value={_a.value}>{_a.label}</option>)}
    </select>
  );
}
