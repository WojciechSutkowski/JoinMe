import axios from 'axios';
import { authHeader } from './authHeader';

export default axios.create({
  baseURL: 'https://hacknarok-api.verybadcode.pl/',
  headers: {
    'Content-type': 'application/json',
    ...authHeader(),
  },
});
