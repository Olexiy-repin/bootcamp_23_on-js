'use strict';
/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

const sectionEl = document.querySelector('.section');
const divEl = document.querySelector('.div');
const textEl = document.querySelector('.text');

sectionEl.addEventListener('click', event => {
  console.group('Section addEventListener');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});

sectionEl.addEventListener(
  'click',
  event => {
    console.group('Section addEventListener capture phase');
    console.log('event.target: ', event.target);
    console.log('event.currentTarget: ', event.currentTarget);
    console.groupEnd();
  },
  {
    capture: true,
  }
);

divEl.addEventListener('click', event => {
  console.group('div addEventListener');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});

divEl.addEventListener(
  'click',
  event => {
    console.group('div addEventListener capture phase');
    console.log('event.target: ', event.target);
    console.log('event.currentTarget: ', event.currentTarget);
    console.groupEnd();
  },
  {
    capture: true,
  }
);

textEl.addEventListener('click', event => {
  console.group('p addEventListener');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});

textEl.addEventListener(
  'click',
  event => {
    console.group('p addEventListener capture phase');
    console.log('event.target: ', event.target);
    console.log('event.currentTarget: ', event.currentTarget);
    console.groupEnd();
  },
  {
    capture: true,
  }
);
