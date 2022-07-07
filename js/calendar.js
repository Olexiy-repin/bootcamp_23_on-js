'use strict';
const calendarEl = document.querySelector('.calendar');
let prevTdEl = null;

calendarEl.addEventListener('click', event => {
  const target = event.target;

  if (target.nodeName !== 'TD' || target.textContent === '') {
    return;
  }

  if (prevTdEl !== null) {
    prevTdEl.classList.remove('active');
  }

  target.classList.add('active');
  prevTdEl = target;
});
