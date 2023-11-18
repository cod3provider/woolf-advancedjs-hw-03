import { fetchBreeds } from './api/cat-api.js';

const select = document.querySelector('.breed-select');

fetchBreeds()
.then(data => select.insertAdjacentHTML('afterbegin', createOption(data)))
.catch(err => console.log(err))

function createOption(arr) {
  return arr.map(
    ({id, name}) => `
    <option value=${id}>${name}</option>
  `
  )
}

fetchBreeds();