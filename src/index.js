import { fetchBreeds, fetchCatByBreed } from './api/cat-api.js';

import SlimSelect from 'slim-select';
import "slim-select/styles";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const select = document.querySelector('.breed-select');
const divInfo = document.querySelector('.cat-info');
const loader = document.querySelector(('.loader'));
// const errorText = document.querySelector('.error');

let selectedId;
let isLoading = true;
// errorText.classList.add('hidden');
console.log(isLoading);

const errorToast = () => {
  iziToast.error({
    title: 'Oops!',
    message: 'Something went wrong! Try reloading the page!',
    position: 'topRight',
  });
}

function FetchDecorator() {
  fetchCatByBreed(selectedId)
  .then(data => {
    // handleLoadingRes();

    // if (isLoading) {
    //   // loader.classList.remove('hidden');
    // }
    // isLoading = false;

    handleSuccessRes();
    divInfo.innerHTML = createMarkup(data);
  })
  .catch(err => {
    console.log(err);
    handleErrorRes();
  });
}

fetchBreeds()
.then(data => {
  // isLoading = true;
  //
  // if (isLoading) {
  //   loader.classList.remove('hidden');
  // }
  //
  // isLoading = false;

  handleLoadingRes();
  // console.log(isLoading);

  handleSuccessRes();


  select.insertAdjacentHTML('afterbegin', createOptions(data));

  new SlimSelect({
    select,
  });

  selectedId = select.value;
  console.log(selectedId);

  if (!divInfo.length) {
    FetchDecorator();
  }
})
.catch(err => {
  console.log(err);
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
  // errorText.classList.remove('hidden');
  errorToast();
}


function handleLoadingRes() {
  // errorText.classList.add('hidden');
  loader.classList.remove('hidden');
  divInfo.classList.add('hidden');
}

function handleSuccessRes() {
  // errorText.classList.add('hidden');
  loader.classList.add('hidden');
  divInfo.classList.remove('hidden');
}

select.addEventListener('change', function() {
  selectedId = this.value;
  handleLoadingRes();
  FetchDecorator();
  console.log(selectedId);
});