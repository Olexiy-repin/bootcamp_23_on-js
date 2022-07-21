// https://unsplash.com/

import { UnsplashAPI } from './unsplash-api';
import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const unsplashAPI = new UnsplashAPI();

const loadMoreData = async event => {
  unsplashAPI.page += 1;

  try {
    const response = await unsplashAPI.fetchPhotosByQuery();

    if (unsplashAPI.page === response.data.total_pages) {
      observer.unobserve(document.querySelector('.target-element'));
    }

    galleryEl.insertAdjacentHTML(
      'beforeend',
      createGalleryCards(response.data.results)
    );
  } catch (err) {
    console.log(err);
  }
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting) {
      loadMoreData();
    }
  },
  {
    root: null,
    rootMargin: '600px',
    threshold: 1,
  }
);

const onSearchFormSubmit = async event => {
  event.preventDefault();

  unsplashAPI.query = event.currentTarget.elements['user-search-query'].value;
  unsplashAPI.page = 1;

  try {
    const response = await unsplashAPI.fetchPhotosByQuery();

    if (response.data.results.length === 0) {
      galleryEl.innerHTML = '';
      event.target.reset();
      return;
    }

    galleryEl.innerHTML = createGalleryCards(response.data.results);

    observer.observe(document.querySelector('.target-element'));
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
