'use strict';
/*
 * Події елементів форм. focus, blur, change, input, submit
 */

const usernameInputEl = document.querySelector('.js-username-input');
const checkboxEl = document.querySelector('.js-policy-checkbox');
const usernameOutputEl = document.querySelector('.js-username-output');
const submitBtnEl = document.querySelector('.js-contact-form-submit');
const contactFormEl = document.querySelector('.js-contact-form');

// usernameInputEl.addEventListener('focus', () => {
//   usernameInputEl.style.outline = '1px solid teal';
// });

// usernameInputEl.addEventListener('blur', () => {
//   usernameInputEl.style.outline = '1px solid tomato';
// });

// usernameInputEl.addEventListener('input', () => {
//   console.log('Hello');
// });

// usernameInputEl.addEventListener('change', () => {
//   console.log('Hello');
// });

// checkboxEl.addEventListener('change', () => {
//   console.log('Hello');
// });

usernameInputEl.addEventListener('input', () => {
  usernameOutputEl.textContent = usernameInputEl.value;
});

checkboxEl.addEventListener('change', () => {
  if (checkboxEl.checked && usernameInputEl.value !== '') {
    submitBtnEl.disabled = false;
  } else {
    submitBtnEl.disabled = true;
  }
});

contactFormEl.addEventListener('submit', event => {
  event.preventDefault();

  contactFormEl.reset();
  console.log('Hello');
});
