'use strict';

/*
 * async/await
 * асинхронная(async) функция ВСЕГДА возвращает промис.
 * await заставляет функцию ждать выполнения промиса.
 * await нельзя использовать вне асинхронных функций.
 * try/catch для отлова ошибок
 */

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const fetchPosts = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/posts`);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json();

//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchPosts()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 01
// Перепиши на async/await
// const loadPosts = async url => {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return await response.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// loadPosts('https://jsonplaceholder.typicode.com/posts')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async-функції?
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   wait()
//     .then(number => {
//       console.log(number);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   // ...що тут написати?
//   // щоб викликати wait() і дочекатися результату "10" від async-функції
//   // не забувайте, тут не можна використовувати "await"
// }

// f();
