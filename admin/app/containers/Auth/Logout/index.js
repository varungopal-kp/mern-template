import React from 'react';

export default function index() {
    
  localStorage.removeItem('_token');
  window.location.href = '/';
  return <div />;
}
