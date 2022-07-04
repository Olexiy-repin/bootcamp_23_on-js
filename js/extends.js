'use strict';
/*
 * Наслідування з extends та super
 */
// class User {
//   #login;
//   #email;

//   constructor({ firstName, lastName, age, login, email } = {}) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.userAge = age;
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   getFullName() {
//     return `${this.#trimStr(this.firstName)} ${this.#trimStr(this.lastName)}`;
//   }

//   #trimStr(str) {
//     return str.trim();
//   }
// }

// class Developer extends User {
//   constructor({ countOfProjects, ...props } = {}) {
//     // this = super(props);
//     super(props);
//     this.countOfProjects = countOfProjects;
//   }

//   doDeveloperWork() {
//     console.log(`Роблю якусь роботу`);
//   }
// }

// class Manager extends User {
//   constructor({ managerProp, ...props } = {}) {
//     super(props);
//     this.managerProp = managerProp;
//   }

//   doManagerWork() {
//     console.log(`Роблю якусь роботу`);
//   }
// }

// const userOleksii = new User({
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 40,
//   login: 'oleksii',
//   email: 'ta@ilvion.com',
// });

// console.log(userOleksii);

// const developerOleksii = new Developer({
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 40,
//   login: 'oleksii',
//   email: 'ta@ilvion.com',
//   countOfProjects: 10,
// });

// console.log(developerOleksii);

// const managerOleksii = new Manager({
//   firstName: null,
//   lastName: 'Repin',
//   age: 40,
//   login: 'oleksii',
//   email: 'ta@ilvion.com',
//   managerProp: 50,
// });

// console.log(managerOleksii);
