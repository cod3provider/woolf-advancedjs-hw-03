import { fetchBreeds, fetchCatByBreed } from './api/cat-api.js';

const select = document.querySelector('.breed-select');
const divInfo = document.querySelector('.cat-info');
const loader = document.querySelector(('.loader'));


let selectedId;
let isLoading = true;
console.log(isLoading);

function FetchCatByIdDecorator() {
  fetchCatByBreed(selectedId)
  .then(data => divInfo.innerHTML = createMarkup(data))
  .catch(err => console.log(err));
}

fetchBreeds()
.then(data => {
  if (isLoading) {
    loader.style.display = 'block';
  }
  // if (!data) {
  //   isLoading = true;
  //   console.log(isLoading);
  // }
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
  FetchCatByIdDecorator();
  console.log(selectedId);
});