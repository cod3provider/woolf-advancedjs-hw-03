import SlimSelect from 'slim-select';
import 'slim-select/styles';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchBreeds, fetchCatByBreed } from './api/cat-api.js';

const select = document.querySelector('.breed-select');
const divInfo = document.querySelector('.cat-info');
const loader = document.querySelector(('.loader'));
let selectedId;

const errorToast = () => {
  iziToast.error({
    title: 'Oops!',
    message: 'Something went wrong! Try reloading the page!',
    position: 'topRight',
  });
};

function FetchDecorator() {
  fetchCatByBreed(selectedId)
  .then(data => {
    handleSuccessRes();
    divInfo.innerHTML = createMarkup(data);
  })
  .catch(() => {
    divInfo.innerHTML = '';
    handleErrorRes();
  });
}

fetchBreeds()
.then(data => {
  handleLoadingRes();
  handleSuccessRes();

  select.insertAdjacentHTML('afterbegin', createOptions(data));
  new SlimSelect({
    select,
  });
  selectedId = select.value;
})
.catch(() => {
  divInfo.innerHTML = '';
  handleErrorRes();
});

function createMarkup(data) {
  const { description, name, temperament } = data.breeds[0];

  return `
    <div>
      <h1 class='title'>${name}</h1>
      <div class='content_wrapper'>
        <div class='img_wrapper'>
        <img
          class='img'
          src='${data.url}'
          alt='${description}'
          width='500'
        />
        </div>
        <div class='text_wrapper'>
          <p class='description'>${description}</p>
          <p class='temperament'>${temperament}</p>
        </div>
      </div>
    </div>
  `;
}

function createOptions(arr) {
  return arr.map(({ id, name }) => `
    <option value='${id}'>${name}</option>
  `);
}

function handleErrorRes() {
  loader.classList.add('hidden');
  errorToast();
}

function handleLoadingRes() {
  loader.classList.remove('hidden');
  divInfo.classList.add('hidden');
}

function handleSuccessRes() {
  select.classList.remove('hidden');
  loader.classList.add('hidden');
  divInfo.classList.remove('hidden');
}

function handleChange() {
  selectedId = this.value;
  handleLoadingRes();
  FetchDecorator();
}

select.addEventListener('change', handleChange);