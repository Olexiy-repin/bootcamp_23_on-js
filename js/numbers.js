'use strict';

/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 10 та 20.
 ? Проведіть над цими числами математичні операції (+ - / *).
*/

// const numA = 2;
// const numB = 3;

// const result = numA ** numB;

// console.log(result);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const num = 30;

// const result = num % 2;

// console.log(result === 0);

/*
  ? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
// const totalMinutes = 90;

// let hours = totalMinutes / 60;
// hours = Math.floor(hours);

// const minutes = totalMinutes % 60;

// console.log(hours, ':', minutes);

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/
// let userNumber = prompt('Введіть число');
// userNumber = Number(userNumber);

// console.log(userNumber);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.
// const str = '24px';
// const number = Number.parseInt(str);

// console.log(number);

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
// const str = '25.5%';
// const number = Number.parseFloat(str);

// console.log(number);

//? Спробуйте призвести до числа, строку 'abc'.
// const str = 'abc';
// const number = Number(str);

// console.log(number);

//? Запросіть у користувача ввести два числа, складіть їх та виведіть результат у консоль.
// const numA = Number.parseFloat(prompt('Введіть перше число'));
// const numB = Number.parseFloat(prompt('Введіть друге число'));

// const result = numA + numB;

// console.log(result);

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Дано число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/

// const number = 23.5;
// const result = Math.round(number);

// console.log(result);

// const minNumber = Math.min(12, 4, 56, 233, 1, -10);

// console.log(minNumber);

/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/
// const num = 2;
// const pow = 5;

// const result = Math.pow(num, pow);

// console.log(result);

/*
  ? Згенеруйте рандомне число:
  ? від 0 до 1;
*/

// const randomNumber = Math.random();

// console.log(randomNumber);

//? Згенеруйте рандомне число. Мінімальне та максимально значення, отримати від користувача
// const min = Number.parseFloat(prompt('Введіть мінімальне число'));
// const max = Number.parseFloat(prompt('Введіть максимальне число'));

// const randomNum = Math.round(min - 0.5 + Math.random() * (max - min + 1));

// console.log(randomNum);
