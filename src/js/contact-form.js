'use strict';
import localStorageApi from './localstorage';

const CONTACT_FORM_LOCAL_STORAGE_KEY = 'formData';
const contactFormEl = document.querySelector('.js-contact-form');
const userData = {};

const fillFormFields = () => {
  const userDataFromLS = localStorageApi.load(CONTACT_FORM_LOCAL_STORAGE_KEY);

  if (userDataFromLS === undefined) {
    return;
  }

  const formElements = contactFormEl.elements;

  for (const key in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(key)) {
      formElements[key].value = userDataFromLS[key];
    }
  }
};

const onFormElChange = event => {
  const target = event.target;

  const formElValue = target.value;
  const formElName = target.name;

  userData[formElName] = formElValue;

  localStorageApi.save(CONTACT_FORM_LOCAL_STORAGE_KEY, userData);
};

const onContactFormSubmit = event => {
  event.preventDefault();

  localStorageApi.remove(CONTACT_FORM_LOCAL_STORAGE_KEY);
  event.currentTarget.reset();
};

contactFormEl.addEventListener('change', onFormElChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);

fillFormFields();
