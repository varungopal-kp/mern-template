import React from 'react';
import MatTable from 'components/Table/paginated';

export default function List({ toursPage }) {
  const { list } = toursPage;
  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'description', label: 'Description' },
  ];

  return <MatTable columns={columns} rows={list} />;
}
