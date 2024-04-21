import '../css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './fetchCountries';
import { cardMarkup, nameMarkup } from './markUps';

const input = document.querySelector('#search-box');
const ulList = document.querySelector('.country-list');

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(onInputSearchContry, DEBOUNCE_DELAY));

async function onInputSearchContry(e) {
  const inputValue = e.target.value.trim();
  console.log(inputValue);
  if (inputValue) {
    try {
      const featchResult = await fetchCountries(inputValue);
      featchResult.then(response => {
        if (response.length > 10) {
          Notiflix.Notify.warning('wtf??? beach');
        } else if (response.length < 10 && response.length > 2) {
          ulList.innerHTML = nameMarkup(response);
        } else if (response.length === 1) {
          ulList.innerHTML = cardMarkup(response);
        }
      });
    } catch (error) {
      Notiflix.Notify.failure('Huge, this is bull shit matherFucker');
    }
  } else {
    ulList.innerHTML = '';
  }
}
