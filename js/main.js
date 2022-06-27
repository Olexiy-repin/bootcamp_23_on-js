'use strict';

/*
 * Операція spread замість concat і slice
 */

//* Копія масива
// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = [...numbers];

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

// numbersCopy[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

//* Об'єднання масивів
// const numbers = [1, 2, 3, 4];
// const anotherNumbers = [10, 9, 8, 7];
// const totalArrNumbers = [...numbers, 200, 300, ...anotherNumbers];

// // console.log(totalArrNumbers);

// totalArrNumbers[0] = 100;

// console.log(numbers);
// console.log(anotherNumbers);
// console.log(totalArrNumbers);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 33, 4, 5];

// console.log(Math.max(...numbers));

/*
 * Операція spread замість Object.assign({}, obj)
 */

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

// const anotherUser = {
//   ...user,
// };

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

// anotherUser.firstName = 'Dale';

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

//* Розпилення складних типів

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

// const anotherUser = _.cloneDeep(user);

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

// anotherUser.firstName = 'Helena';
// anotherUser.someArr[0] = 100;

// console.log('user: ', user);
// console.log('anotherUser: ', anotherUser);

/*
 * Операція rest
 */

//? Напишіть функцію summ, яка складає довільну кількість аргументів

// const summ = function (...numbers) {
//   let total = 0;

//   for (const number of numbers) {
//     total += number;
//   }

//   return total;
// };

// console.log(summ(1, 2, 3, 4, 5));
// console.log(summ(10, 20));
