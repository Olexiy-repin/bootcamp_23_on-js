'use strict';

/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const obj = Object.create(salaries);

// obj.Daniel = 500;

// console.log(obj);

// for (const employeeName in obj) {
//   if (obj.hasOwnProperty(employeeName)) {
//     console.log(employeeName);
//   }
// }

// 1 Варіант
// let total = 0;

// for (const employeeName in salaries) {
//   total += salaries[employeeName];
// }

// console.log(total);

// 2 Варіант
// const keys = Object.keys(salaries);
// let total = 0;

// for (const key of keys) {
//   total += salaries[key];
// }

// console.log(total);

// 3 Варіант
// const values = Object.values(salaries);
// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);
