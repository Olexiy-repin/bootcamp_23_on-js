'use strict';

const messagesWrapper = document.querySelector('.js-messages-wrapper');

messagesWrapper.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentMessage = event.target.closest('.message');

  currentMessage.remove();
});
