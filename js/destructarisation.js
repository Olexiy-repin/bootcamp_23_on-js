'use strict';
/*
 * Деструктуризація об'єктів
 */

const user = {
  firstName: 'John',
  lastName: 'Reese',
  age: 30,
  isAdmin: true,
};

/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/

const { lastName, firstName, ...anotherProps } = user;

console.log('lastName: ', lastName);
console.log('firstName: ', firstName);
console.log('anotherProps: ', anotherProps);

/*
 * Глибока деструктуризація об'єктів
 */

// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const {
//   number,
//   flag,
//   employees,
//   langs: { original: teamLangOriginal, secondary: teamLangSecondary },
// } = team;

// // const { original, secondary } = team.langs;

// console.log('number: ', number);
// console.log('flag: ', flag);
// console.log('employees: ', employees);

// console.log('teamLangOriginal: ', teamLangOriginal);
// console.log('teamLangSecondary: ', teamLangSecondary);

/*
 * Деструктуризація масивів
 */

// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const [user1, user2] = names;

// console.log(user1);

// const rgb = [210, 100, 50];

// const [red, , blue] = rgb;

// console.log(red);

/*
? У нас є об'єкт salaries із зарплатами:
? Створіть функцію topSalary (salaries), яка повертає ім'я найвищого працівника.
?
? Якщо об'єкт salaries порожній, потрібно повернути null.
? Якщо кілька високооплачуваних співробітників можна повернути будь-якого з них.
? P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

/*
[['John', 100], ['Pete', 300], ['Mary', 250]]
*/

// const topSalary = function (salaries) {
//   const arrays = Object.entries(salaries);
//   let max = arrays[0][1];
//   let employeeName = arrays[0][0];

//   for (const [name, salary] of arrays) {
//     if (salary > max) {
//       max = salary;
//       employeeName = name;
//     }
//   }

//   return employeeName;
// };

// console.log(topSalary(salaries));
