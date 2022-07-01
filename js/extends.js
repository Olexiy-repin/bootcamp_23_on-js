'use strict';
/*
 * Наслідування з extends та super
 */
// class User {
//   #login;
//   #email;

//   constructor({ firstName, lastName, age, login, email } = {}) {
//     // this = {};
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.userAge = age;
//     this.#login = login;
//     this.#email = email;
//     // return this;
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

// class Manager extends User {
//   constructor(obj) {
//     const { numberOfSales, ...otherProps } = obj;

//     super(otherProps);
//     this.numberOfSales = numberOfSales;
//   }

//   getFullName() {
//     return super.getFullName();
//   }

//   doManagerWork() {
//     console.log('Занимаюсь продажами');
//   }
// }

// console.dir(Manager);

// const manager = new Manager({
//   firstName: 'Addie',
//   lastName: 'Burgess',
//   age: 20,
//   login: 'someLogin',
//   email: 'uhmop@balninih.sd',
//   numberOfSales: 20,
// });

// console.log(manager);

// console.log(manager.getFullName());

// class Developer extends User {
//   constructor(obj) {
//     const { completedProjects, ...otherProps } = obj;

//     super(otherProps);
//     this.completedProjects = completedProjects;
//   }

//   doDeveloperWork() {
//     console.log('Пишу проэкт');
//   }
// }

// const developer = new Developer({
//   firstName: 'Bertha',
//   lastName: 'Byrd',
//   age: 22,
//   login: 'myLogin',
//   email: 'tudeoh@ede.fm',
//   completedProjects: 45,
// });

// console.log(developer);
