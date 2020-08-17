import React from 'react';
import MatTable from 'components/Table/paginated';

export default function List({ chatRoomPage, viewClick }) {
  const { list } = chatRoomPage;
  const columns = [
    { id: 'user', label: 'User' },
    { id: 'action', label: 'Action', view: true },
  ];

  return <MatTable columns={columns} rows={list} viewClick={viewClick} />;
}
