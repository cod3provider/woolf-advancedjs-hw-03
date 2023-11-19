import { fetchBreeds, fetchCatByBreed } from './api/cat-api.js';

const select = document.querySelector('.breed-select');
const divInfo = document.querySelector('.cat-info');
const loader = document.querySelector(('.loader'));
const errorText = document.querySelector('.error');

let selectedId;
let isLoading = true;
errorText.style.display = 'none';
console.log(isLoading);

function FetchCatByIdDecorator() {
  fetchCatByBreed(selectedId)
  .then(data => {
    if (!data) {
      errorText.style.display = 'block';
    }

    loader.style.display = 'none';
    divInfo.innerHTML = createMarkup(data);
  })
  .catch(err => console.log(err));
}

fetchBreeds()
.then(data => {
  if (isLoading) {
    loader.style.display = 'block';
  }

  isLoading = false;
  loader.style.display = 'none';
  console.log(isLoading);

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
    <img
      class='img'
      src='${data.url}'
      alt='${description}'
      width='500'
    />
    <h1 class='title'>${name}</h1>
    <p class='description'>${description}</p>
    <p class='temperament'>${temperament}</p>
  `;
}

function createOptions(arr) {
  return arr.map(({ id, name }) => `
    <option value='${id}'>${name}</option>
  `);
}


select.addEventListener('change', function() {
  selectedId = this.value;
  loader.style.display = 'block';
  FetchCatByIdDecorator();
  console.log(selectedId);
});