'use strict';
/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

// const user = {
//   firstName: 'Oleksii',
//   age: 40,
// };

// console.log('user: ', user);

// const user1 = Object.create(user);
// user1.lastName = 'Perez';

// console.log('user1: ', user1);

// const user2 = Object.create(user1);
// user2.firstName = 'Lucy';
// user2.age = 30;

// console.log('user2: ', user2);

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні та не власні властивості об'єкта

//* Перевірка власних властивостей obj.hasOwnProperty()
// console.log(user2.hasOwnProperty('age'));

//* Цикл for...in, перебирає і власні, і не власні властивості.
// for (const property in user2) {
//   if (user2.hasOwnProperty(property)) {
//     console.log(`${property}: ${user2[property]}`);
//   }
// }
