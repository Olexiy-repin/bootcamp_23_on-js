'use strict';

const openModalBtnEl = document.querySelector('.js-modal-open');
const backdropEl = document.querySelector('.js-backdrop');
const closeModalBtnEl = document.querySelector('.js-modal-close');

const onOpenModalBtnElClick = event => {
  backdropEl.classList.add('is-open');

  window.addEventListener('keydown', onEscBtnPush);
};

const closeModalWindow = event => {
  backdropEl.classList.remove('is-open');
  window.removeEventListener('keydown', onEscBtnPush);
};

const onEscBtnPush = event => {
  if (event.code !== 'Escape') {
    return;
  }

  closeModalWindow();
};

openModalBtnEl.addEventListener('click', onOpenModalBtnElClick);
closeModalBtnEl.addEventListener('click', closeModalWindow);
