'use strict';
/*
 * Створення об'єкта (конструктор, литерал).
 * Властивості, ключі (ім'я) та значення
 */

// Фільм (назва, опис, рейтинг, акторскій склад, вікове обмеження)
const film = {
  title: 'Venom',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, mollitia!',
  rating: 8,
  actors: ['Jason', 'Ollie', 'Mattie'],
  adult: true,
};

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

/*

 * Короткий запис властивостей
 */

/* <input type="text" name="username"> */
/* <input type="email" name="useremail"> */

// const username = 'Oleksii';
// const email = 'test@gmail.com';

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

// const firstName = prompt('Ваше ім`я');
// const lastName = prompt('Ваше прізвище');

// const user = {
//   firstName,
//   lastName,
// };

// console.log(user);

/*
 * Присвоєння за посиланням
 */

// const user = {
//   firstName: 'Brett',
//   lastName: 'Romero',
//   age: 20,
// };

// const user2 = Object.assign({ gender: 'male' }, user);

// console.log('user: ', user);
// console.log('user2: ', user2);

// user2.firstName = 'Oleksii';

// console.log('user: ', user);
// console.log('user2: ', user2);

/*
 * Все у цьому світі об'єкти
 */
// const fn = function () {
//   console.log('Hello');
// };

// fn.test = 5;

// fn();

// console.dir(fn);

// console.log(fn.test);
