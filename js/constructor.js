'use strict';
/*
 * Клас - шаблон, за яким будуть створені однотипні об'єкти
 * Екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

//? Функція конструктор
const Person = function ({ firstName, lastName, age, hairColor, eyesColor } = {}) {
  // this = {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.legs = 2;
  this.hands = 2;
  this.eyes = 2;
  this.hairColor = hairColor;
  this.eyesColor = eyesColor;
  // return this;
};

console.dir(Person);

Person.prototype.changeHairColor = function (newHairColor) {
  this.hairColor = newHairColor;
};

Person.prototype.changeFirstName = function (newName) {
  this.firstName = newName;
};

const person = new Person({
  firstName: 'Oleksii',
  lastName: 'Repin',
  age: 30,
  hairColor: 'black',
  eyesColor: 'brown',
});

person.changeHairColor('brown');
person.changeFirstName('Susie');

const person2 = new Person({
  firstName: 'Emily',
  lastName: 'Henderson',
  age: 20,
  hairColor: 'pink',
  eyesColor: 'blue',
});

person2.changeFirstName('Teresa');

console.log(person);
console.log(person2);

//TODO:  Створюємо людину за образом

// const person1 = {
//   firstName: 'Edward',
//   lastName: 'Smith',
//   age: 30,
//   legs: 2,
//   hands: 2,
//   eyes: 2,
//   hairColor: 'brown',
//   eyesColor: 'brown',
// };

// const person2 = {
//   firstName: 'Michael',
//   lastName: 'Gill',
//   age: 20,
//   legs: 2,
//   hands: 2,
//   eyes: 2,
//   hairColor: 'white',
//   eyesColor: 'blue',
// };

//? Створюємо методи для наших екземплярів
