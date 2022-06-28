'use strict';
/*
 * Колбек-функції, функції вищого порядку
 */

// const greet = function (username, callback) {
//   callback(username);
// };

// const simpleGreet = function (username) {
//   console.log(`Hello ${username}`);
// };

// const fullGreet = function (fullName) {
//   console.log(`Hello ${fullName}`);
// };

// const prettyGreet = function (username) {
//   console.log(`Hello ${username} 👋`);
// };

// greet('Oleksii', simpleGreet);
// greet('Oleksii Repin', fullGreet);
// greet('Oleksii', prettyGreet);

//? Запит на сервер

// const fetchUser = async function (userUrl, callback) {
//   const response = await fetch(`https://api.github.com/users/${userUrl}`);
//   const result = await response.json();

//   callback(result);
// };

// const showInfoAboutUser = function (user) {
//   console.log(user);
// };

// const showAvatar = function (user) {
//   console.log(user.avatar_url);
// };

// fetchUser('olexiy-repin', showInfoAboutUser);
// fetchUser('olexiy-repin', showAvatar);

//? Реєстрація подій на сторінці
// const userEmail = document.querySelector('.js-contact-form-email');

// const logValues = function () {
//   console.log('Hi!');
// };

// userEmail.addEventListener('change', logValues);

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колббека.
*/

// const numbers = [1, 2, 3, 4, 5];

// const each = function (array, callback) {
//   const newArray = [];

//   for (const item of array) {
//     newArray.push(callback(item));
//   }

//   return newArray;
// };

// const multi = function (el) {
//   return el * 2;
// };

// const add = function (el) {
//   return el + 2;
// };

// const logElements = function (el) {
//   console.log(el);
// };

// console.log(each(numbers, multi));
// console.log(each(numbers, add));
// each(numbers, logElements);

/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без id, а також колбек-функцію.
? Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор до властивості id і викликає колбек передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту і логує його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
*/

// const createProduct = function (product, callback) {
//   const newProduct = {
//     id: Date.now(),
//     ...product,
//   };

//   callback(newProduct);
// };

// const logProduct = function (product) {
//   console.log(product);
// };

// const logTotalPrice = function ({ price, quantity } = {}) {
//   console.log(`Total price: ${price * quantity}`);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);

// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Додайте об'єкту account методи  withdraw(amount, onSuccess, onError) і deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий і третій - колбеки.
?
? Метод withdraw викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) якщо amount більше TRANSACTION_LIMIT
? onError(`Amount can't exceed account balance of ${this.balance} credits`) якщо amount більше this.balance
? інакше знімаємо гроші з балансу і викликаємо onSuccess(`Account balance: ${this.balance}`)
?
? Метод deposit викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) якщо amount більше TRANSACTION_LIMIT
? onError(`Amount must be more than 0 credits`) якщо amount менше або дорівнює нулю
? інакше додаємо до балансу amount і викликаємо onSuccess(`Account balance: ${this.balance}`)
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
