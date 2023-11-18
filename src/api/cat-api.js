import axios from 'axios';
import { KEYS } from './keys.js';

axios.defaults.headers.common['x-api-key'] = KEYS.API_KEY;

export function fetchBreeds () {
  return axios(KEYS.BASE_URL)
  .then(response => {
    console.log(response);
    return response.data;
  })
  .catch(err => console.log(err.message));
}