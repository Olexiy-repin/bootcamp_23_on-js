// https://unsplash.com/

import { UnsplashAPI } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashAPI = new UnsplashAPI();

const onSearchFormSubmit = async event => {
  event.preventDefault();

  unsplashAPI.query = event.currentTarget.elements['user-search-query'].value;
  unsplashAPI.page = 1;

  try {
    const response = await unsplashAPI.fetchPhotosByQuery();

    if (response.data.results.length === 0) {
      galleryEl.innerHTML = '';
      loadMoreBtnEl.classList.add('is-hidden');
      event.target.reset();
      return;
    }

    if (response.data.total_pages === 1) {
      galleryEl.innerHTML = createGalleryCards(response.data.results);
      loadMoreBtnEl.classList.add('is-hidden');
      return;
    }

    galleryEl.innerHTML = createGalleryCards(response.data.results);

    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnClick = async event => {
  unsplashAPI.page += 1;

  try {
    const response = await unsplashAPI.fetchPhotosByQuery();

    if (unsplashAPI.page === response.data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');
    }

    galleryEl.insertAdjacentHTML(
      'beforeend',
      createGalleryCards(response.data.results)
    );
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
