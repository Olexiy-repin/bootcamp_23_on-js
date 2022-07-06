'use strict';

const accordionBtnElements = document.querySelectorAll('.js-accordion-btn');

const onAccordionBtnElClick = event => {
  console.log(event);
  const accordionBtnEl = event.currentTarget;
  const panelEl = accordionBtnEl.nextElementSibling;

  panelEl.classList.toggle('active');
};

accordionBtnElements.forEach(el => {
  el.addEventListener('click', onAccordionBtnElClick);
});
