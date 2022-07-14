'use strict';

// Через об'єкт
// const TIMER_DEADLINE = new Date(2022, 6, 15);
// const timerEl = document.querySelector('.js-timer-items');

// const timer = {
//   intervalId: null,

//   start(rootSelector, deadline) {
//     this.intervalId = setInterval(() => {
//       const now = Date.now();
//       const diff = deadline - now;

//       if (diff <= 0) {
//         this.stop();

//         return;
//       }

//       const { days, hours, minutes, seconds } = this.getTimeComponents(diff);

//       rootSelector.querySelector('.js-timer__days').textContent = this.pad(days);
//       rootSelector.querySelector('.js-timer__hours').textContent = this.pad(hours);
//       rootSelector.querySelector('.js-timer__minutes').textContent = this.pad(minutes);
//       rootSelector.querySelector('.js-timer__seconds').textContent = this.pad(seconds);

//       rootSelector.querySelector('.js-timer__days').dataset.title = this.declensionNum(days, [
//         'день',
//         'дні',
//         'днів',
//       ]);
//       rootSelector.querySelector('.js-timer__hours').dataset.title = this.declensionNum(hours, [
//         'година',
//         'години',
//         'годин',
//       ]);
//       rootSelector.querySelector('.js-timer__minutes').dataset.title = this.declensionNum(minutes, [
//         'хвилина',
//         'хвилини',
//         'хвилин',
//       ]);
//       rootSelector.querySelector('.js-timer__seconds').dataset.title = this.declensionNum(seconds, [
//         'секунда',
//         'секунди',
//         'секунд',
//       ]);
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//   },

//   getTimeComponents(diff) {
//     const days = Math.floor(diff / 1000 / 60 / 60 / 24);
//     const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
//     const minutes = Math.floor(diff / 1000 / 60) % 60;
//     const seconds = Math.floor(diff / 1000) % 60;

//     return {
//       days,
//       hours,
//       minutes,
//       seconds,
//     };
//   },

//   pad(value) {
//     return String(value).padStart(2, 0);
//   },

//   declensionNum(num, words) {
//     // num = 2
//     // words = ['день','дні','днів']

//     return words[
//       num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
//     ];
//   },
// };

// timer.start(timerEl, TIMER_DEADLINE);

// Через клас
// const TIMER_DEADLINE = new Date(2022, 6, 15);
// const SECOND_TIMER_DEADLINE = new Date(2022, 6, 16);

// const timerEl = document.querySelector('.js-timer-items');
// const secondTimerEl = document.querySelector('.js-second-timer-items');

// class Timer {
//   #intervalId = null;

//   constructor(rootSelector, deadline) {
//     this.rootSelector = rootSelector;
//     this.deadline = deadline;

//     this.start();
//   }

//   start() {
//     this.#intervalId = setInterval(() => {
//       const now = Date.now();
//       const diff = this.deadline - now;

//       if (diff <= 0) {
//         this.stop();

//         return;
//       }

//       const { days, hours, minutes, seconds } = this.getTimeComponents(diff);

//       this.rootSelector.querySelector('.js-timer__days').textContent = this.pad(days);
//       this.rootSelector.querySelector('.js-timer__hours').textContent = this.pad(hours);
//       this.rootSelector.querySelector('.js-timer__minutes').textContent = this.pad(minutes);
//       this.rootSelector.querySelector('.js-timer__seconds').textContent = this.pad(seconds);

//       this.rootSelector.querySelector('.js-timer__days').dataset.title = this.declensionNum(days, [
//         'день',
//         'дні',
//         'днів',
//       ]);
//       this.rootSelector.querySelector('.js-timer__hours').dataset.title = this.declensionNum(
//         hours,
//         ['година', 'години', 'годин']
//       );
//       this.rootSelector.querySelector('.js-timer__minutes').dataset.title = this.declensionNum(
//         minutes,
//         ['хвилина', 'хвилини', 'хвилин']
//       );
//       this.rootSelector.querySelector('.js-timer__seconds').dataset.title = this.declensionNum(
//         seconds,
//         ['секунда', 'секунди', 'секунд']
//       );
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.#intervalId);
//   }

//   getTimeComponents(diff) {
//     const days = Math.floor(diff / 1000 / 60 / 60 / 24);
//     const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
//     const minutes = Math.floor(diff / 1000 / 60) % 60;
//     const seconds = Math.floor(diff / 1000) % 60;

//     return {
//       days,
//       hours,
//       minutes,
//       seconds,
//     };
//   }

//   pad(value) {
//     return String(value).padStart(2, 0);
//   }

//   declensionNum(num, words) {
//     // num = 2
//     // words = ['день','дні','днів']

//     return words[
//       num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
//     ];
//   }
// }

// const firstTimer = new Timer(timerEl, TIMER_DEADLINE);

// const secondTimer = new Timer(secondTimerEl, SECOND_TIMER_DEADLINE);
