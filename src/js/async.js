'use strict';
/*
 * Синхронний vs Асинхронний JS
 */

// console.log('First');

// setTimeout(() => {
//   console.log('Hello from setTimeout');
// }, 2000);

// const greet = () => {
//   console.log('Hello user');
// };

// greet();

// let counter = 0;

// for (let i = 0; i < 1000000000; i += 1) {
//   counter += i;
// }

// console.log(counter);

// console.log('Second');

// Стек виклику функцій

// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!
// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// const intervalId = setInterval(() => {
//   console.log('Hello');
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
