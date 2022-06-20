'use strict';
/*
 * Конкатенація рядків, шаблонні рядки
 */

// const strA = 'Hello';
// const strB = 'world!';

// const result = strA + ' ' + strB;

// console.log(result);

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Hello ім'я_користувача, your age is вік_користувача.
*/

// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const resultStr = 'Hello' + ' ' + userFirstName + ', your age is' + ' ' + userAge;

// console.log(resultStr);

//? Виконайте завдання вище, використовуючи шаблонні рядки
// const userFirstName = prompt('Ваше ім`я');
// const userAge = prompt('Ваш вік');

// const resultStr = `Hello ${userFirstName}, your age is ${userAge}`;

// console.log(resultStr);

/*
 * Властивості і методи рядків
 */

//? Запитайте у користувача ім'я та дізнайтеся, зі скількох символів, воно складається.
// const userFirstName = prompt('Ваше ім`я');
// const lengthOfUserName = userFirstName.length;

// console.log(lengthOfUserName);

//? Попросіть користувача ввести email і переведіть у нижній регістр.
// const userEmail = prompt('Ваш email');
// const lowerUserEmail = userEmail.toLowerCase();

// console.log(lowerUserEmail);

//? Попросіть користувача ввести email і переведіть у верхній регістр
// const userEmail = prompt('Ваш email');
// const upperUserEmail = userEmail.toUpperCase();

// console.log(upperUserEmail);
/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?
  ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок
*/

// const languages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
// const isIncludesSubStr = languages.includes('JS');
// const indexOfSubStr = languages.indexOf('JS');

// console.log(isIncludesSubStr);
// console.log(indexOfSubStr);

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;
// const str = '24px';
// const result = str.endsWith('px');

// console.log(result);

//? У нас є рядок '23,4', замініть кому на крапку
// const str = '23,4';
// const result = str.replace(',', '.');

// console.log(result);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/
// const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// const resultStr = str.replaceAll('dog', 'monkey');

// console.log(resultStr);

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)
// const someDate = '12:05:21';
// const currentDate = someDate.replaceAll(':', '.');

// console.log(currentDate);

/*
  ? Дано рядок 'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.
*/
// const someStr = 'Vasyl Pupkin is 24 years old';
// const userFullName = someStr.slice(0, 12);
// const userAge = someStr.slice(16, 19);

// console.log(someStr);
// console.log(userFullName);
// console.log(userAge);
