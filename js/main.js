'use strict';
/*
 * Функції з побічними ефектами та чисті функції
 */

//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (...args) => {
//   numbers.push(...args);
// };

// pushNumbers(9, 6, 8);

// console.log(numbers);

//? Clear function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (numbersArr, ...args) => {
//   const copyNumbersArr = [...numbersArr];

//   copyNumbersArr.push(...args);

//   return copyNumbersArr;
// };

// const newNumbersArr = pushNumbers(numbers, 9, 6, 8);

// console.log('numbers: ', numbers);
// console.log('newNumbersArr: ', newNumbersArr);

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };

// doubleMulti(numbers);

// console.log(numbers);

//? Clear function
const numbers = [123, 56, 78, 9, 3];

const doubleMulti = arr => {
  const copyArr = [...arr];

  for (let i = 0; i < copyArr.length; i += 1) {
    copyArr[i] *= 2;
  }

  return copyArr;
};

const newNumbersArr = doubleMulti(numbers);

console.log('numbers: ', numbers);
console.log('newNumbersArr: ', newNumbersArr);
