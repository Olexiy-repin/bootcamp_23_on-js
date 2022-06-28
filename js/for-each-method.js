'use strict';
/*
 * forEach() замість циклів for і for...of для масивів
 */

// const numbers = [1, 2, 3, 4, 5];

// const summ = numbersArr => {
//   //1 варіант
//   // let total = 0;
//   // for (let i = 0; i < numbersArr.length; i += 1) {
//   //   total += numbersArr[i];
//   // }
//   // return total;
//   //2 варіант
//   // let total = 0;
//   // for (const number of numbersArr) {
//   //   total += number;
//   // }
//   // return total;
//   // 3 варіант
//   // let total = 0;

//   // numbersArr.forEach((el, idx, arr) => {
//   //   total += el;
//   // });

//   // return total;
// };

// console.log(summ(numbers));

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function logItems(items) {
//   console.log(items);

//   // for (let i = 0; i < items.length; i += 1) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }

//   items.forEach((el, idx, arr) => {
//     console.log(`${idx + 1} - ${el}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function printContactsInfo({ names, phones } = {}) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   // for (let i = 0; i < nameList.length; i += 1) {
//   //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//   // }

//   nameList.forEach((el, idx, arr) => {
//     console.log(`${el}: ${phoneList[idx]}`);
//   });
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function calсulateAverage(...args) {
//   let total = 0;

//   // for (let i = 0; i < args.length; i+=1) {
//   //   total += args[i];
//   // }

//   const summ = (el, idx, arr) => {
//     total += el;
//   };

//   args.forEach(summ);

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2/
