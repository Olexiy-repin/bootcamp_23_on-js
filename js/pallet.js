'use strict';
const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet > li');

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

const paintElements = () => {
  palletItemEl.forEach(element => {
    const color = randomColor();

    element.style.backgroundColor = color;
    element.dataset.elementColor = color;
  });
};

paintElements();

palletEl.addEventListener('click', event => {
  if (event.target.nodeName !== 'LI') {
    return;
  }

  const elementBgColor = event.target.dataset.elementColor;
  const outputColorEl = event.target.querySelector('.js-pallet__item-color');

  outputColorEl.textContent = elementBgColor;
});
