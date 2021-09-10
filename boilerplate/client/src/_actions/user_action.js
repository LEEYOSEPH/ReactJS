import axios from 'axios';
import { LGOIN_USER } from './types';
export function loginUser(dataToSubmit) {
  const request = axios
    .post('/api/users/login', dataToSubmit)
    .then((response) => response.data);
  return {
    type: LGOIN_USER,
    payload: request,
  };
}
