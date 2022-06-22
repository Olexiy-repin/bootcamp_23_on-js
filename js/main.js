'use strict';
/*
 *  Масиви: літерал масива, елементи, індексація, довжина
 */

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "Рок-н-рол" в кінець.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте «Country» та «Reggy» на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];
// genres.push('Rock&Roll');
// const lastIndex = genres.length - 1;

// console.log(genres[0]);
// console.log(genres[lastIndex]);

// const firstElement = genres.shift();
// console.log(firstElement);
// genres.unshift('Country', 'Reggy');
// console.log(genres);

/*
 * Присвоєння за посиланням і за значенням
 */

/*
? Створіть змінну a = 10.
? Створіть та привласніть змінній b -> змінну a
? Виведіть до консолі обидві ці змінні
? Змініть значення змінної a і ще раз виведіть у консоль
*/

// let a = 10;
// const b = a;

// console.log('a: ', a);
// console.log('b: ', b);

// a = 20;

// console.log('a: ', a);
// console.log('b: ', b);

/*
? Створіть масив arr1 = [1, 2, 3].
? Створіть та привласніть масиву arr2 -> масив arr1
? Виведіть до консолі обидва цих масива
? Додайте елемент в масив arr1 і ще раз виведете обидва масиви в консоль
*/

// const arr1 = [1, 2, 3];
// const arr2 = [].concat(arr1);

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

// arr1.push(4);
// arr2.push(5);

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

/*
 * Перебор масива циклами for та for...of
 */

/*
? Напиши скрипт для перебору масиву fruits циклом for.
? Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
? Нумерація елементів має починатися з першого.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві.
? Код має працювати для будь-якого масиву чисел.
? Використовуйте цикл для вирішення задачі.
*/

// const numbers = [2, 17, 94, 1, -20, -1, 23, -40, 37, -50];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// for (const item of numbers) {
//   if (item < min) {
//     min = item;
//   }
// }

// console.log(min);

/*
? У нас є масив із зарплатами працівників, потрібно порахувати загальну суму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// for (let i = 0; i < salaries.length; i += 1) {
//   total += salaries[i];
// }

// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

/*
? У нас є кілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// 1 Варіант
// let total = 0;
// for (const salary of managerSalaries) {
//   total += salary;
// }

// for (const salary of developersSalaries) {
//   total += salary;
// }

// console.log(total);

// 2 Варіант
// const allSalaries = managerSalaries.concat(developersSalaries);
// let total = 0;

// for (const salary of allSalaries) {
//   total += salary;
// }

// console.log(total);

/*
 * Базові методи: split та join, indexOf та includes, push, slice та splice, concat
 */

/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються в змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const values = '8 11';
// const sidesArr = values.split(' ');

// const result = Number.parseInt(sidesArr[0]) * Number.parseInt(sidesArr[1]);

// console.log(result);

/*
? Напиши скрипт, який виводить в консоль ім'я та телефонний номер користувача.
? У змінних names і phones зберігаються рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який «розгортає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/
// const string = 'Welcome to the future';

// 1 Варіант
// const charsArr = string.split('');
// const reverseCharsArr = [];

// for (let i = charsArr.length - 1; i >= 0; i -= 1) {
//   reverseCharsArr.push(charsArr[i]);
// }

// const reverseStr = reverseCharsArr.join('');

// console.log(string);
// console.log(reverseStr);

// 2 Варіант
// let reverseStr = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseStr += string[i];
// }

// console.log(string);
// console.log(reverseStr);

// 3 Варіант
// const reverseStr = string.split('').reverse().join('');

// console.log(string);
// console.log(reverseStr);

/*
? У нас є масив співробітників, відсортуйте його, щоб співробітники не повторювалися
*/

// const employees = ['Dennis', 'Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];
// const filteredEmployees = [];

/*
1 Ітерація
0 === 0

2 Ітерація
1 === 0

3 Ітерація
2 === 2

4 Ітерація
3 === 3

5 Ітерація
4 === 4

6 Ітерація
5 === 2

7 Ітерація
6 === 3
*/

// for (let i = 0; i < employees.length; i += 1) {
//   if (i === employees.indexOf(employees[i])) {
//     filteredEmployees.push(employees[i]);
//   }
// }

// console.log(filteredEmployees);

//? Співробітник Shaw звільнився, видаліть його з масиву
// const idxOfShaw = filteredEmployees.indexOf('Shaw');
// filteredEmployees.splice(idxOfShaw, 1);

// console.log(filteredEmployees);
//? Додати нового співробітника Thornton, перед Watkins;
// const idxOfWatkins = filteredEmployees.indexOf('Watkins');

// filteredEmployees.splice(idxOfWatkins, 0, 'Thornton');
// console.log(filteredEmployees);
