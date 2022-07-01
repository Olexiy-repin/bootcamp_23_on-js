'use strict';
/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Статичні властивості та методи
 * Геттери та сеттери
 */

class Person {
  #userEmail;

  static test = 5;

  constructor({ firstName, lastName, age, hairColor, eyesColor, userEmail } = {}) {
    // this = {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.legs = 2;
    this.hands = 2;
    this.eyes = 2;
    this.hairColor = hairColor;
    this.eyesColor = eyesColor;
    // this.#userEmail = userEmail;
    // return this
  }

  get email() {
    return this.#userEmail;
  }

  set email(newEmail) {
    this.#userEmail = this.#trimStr(newEmail);
  }

  changeHairColor(newHairColor) {
    this.hairColor = newHairColor;
  }

  changeFirstName(newName) {
    this.firstName = newName;
  }

  #trimStr(str) {
    return str.trim();
  }
}

console.dir(Person);

const person = new Person({
  firstName: 'Oleksii',
  lastName: 'Repin',
  age: 30,
  hairColor: 'black',
  eyesColor: 'brown',
  userEmail: 'test@gmail.com',
});

console.log(person);
console.log(person.email);
person.email = '  nuc@be.tm  ';
console.log(person.email);
