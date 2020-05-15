import { API_URL } from '../constants';

const get = (url = '', headers = {}) => fetch(`${API_URL}${url}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
}).then((response) => response.json());

export default get;
