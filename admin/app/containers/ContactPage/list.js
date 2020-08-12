import React from 'react';
import MatTable from 'components/Table/paginated';

export default function List({ contactPage }) {
  const { list } = contactPage;
  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
    { id: 'message', label: 'Message' },
  ];

  return <MatTable columns={columns} rows={list} />;
}
