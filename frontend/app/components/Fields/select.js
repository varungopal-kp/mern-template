import React from 'react';

export default function select({ input, name, options, placeholder }) {
  return (
    <select
      {...input}
      name={name}
      onChange={e => input.onChange(e.target.value)}
    >
      <option value=""  disabled>
        {placeholder || 'Select'}
      </option>
      {options &&
        options.map((_a, i) => (
          <option key={i} value={_a.value}>
            {_a.label}
          </option>
        ))}
    </select>
  );
}
