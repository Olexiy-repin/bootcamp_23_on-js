'use strict';

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const sectionElements = document.querySelectorAll('.section');

sectionElements.forEach(section => {
  section.style.backgroundColor = randomColor();
});

const animatedSection = document.querySelector('.js-animated-section');

const onDocumentScroll = event => {
  if (window.pageYOffset >= 800) {
    animatedSection.classList.add('active');
    document.removeEventListener('scroll', throttledFunction);
  }

  console.log(window.pageYOffset);
};

const throttledFunction = _.throttle(onDocumentScroll, 300);

document.addEventListener('scroll', throttledFunction);
