const token = localStorage.getItem('_token');

export const defaultHeader = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};
