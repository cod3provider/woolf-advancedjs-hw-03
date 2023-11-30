import axios from 'axios';
import { API_KEY, BASE_URL, IMAGE_URL } from './keys.js';

axios.defaults.headers.common['x-api-key'] = API_KEY;

function fetchBreeds() {
  return axios(BASE_URL)
  .then(response => {
    return response.data;
  })
  .catch(err => console.log(err));
}

function fetchCatByBreed(breedId) {
  return axios(`${IMAGE_URL}=${breedId}`)
  .then(res => {
    return res.data[0];
  })
  .catch(err => console.log(err));
}

export { fetchBreeds, fetchCatByBreed };