'use strict';

/*
 * try/catch
 * Ошибки фазы парсинга обработать нельзя. Только ошибки фазы выполнения.
 * Объект ошибки
 * try/catch работает только с синхронным кодом
 * Обработка ошибок в асинхронном коде
 */

console.log('First');

setTimeout(() => {
  try {
    const number = 5;

    number = 10;

    console.log(number);
  } catch (err) {
    console.log(err);
  }
}, 1000);

console.log('Second');
