import { fetchBreeds, fetchCatByBreed } from './api/cat-api.js';

const select = document.querySelector('.breed-select');
const divInfo = document.querySelector('.cat-info');

let selectedId;

function FetchCatByIdDecorator() {
  fetchCatByBreed(selectedId)
  .then(data => divInfo.innerHTML = createMarkup(data))
  .catch(err => console.log(err));
}

fetchBreeds()
.then(data => {
  select.insertAdjacentHTML('afterbegin', createOptions(data));
  selectedId = select.value;
  console.log(selectedId);

  if (!divInfo.length) {
    FetchCatByIdDecorator();
  }
})
.catch(err => console.log(err));

function createMarkup(data) {
  const { description, name, temperament } = data.breeds[0];

  return `
    <img src='${data.url}' alt='${description}'/>
    <h1>${name}</h1>
    <p>${description}</p>
    <p>${temperament}</p>
  `;
}

function createOptions(arr) {
  return arr.map(({ id, name }) => `
    <option value='${id}'>${name}</option>
  `);
}


select.addEventListener('change', function() {
  selectedId = this.value;
  FetchCatByIdDecorator();
  console.log(selectedId);
});