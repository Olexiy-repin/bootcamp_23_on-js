'use strict';
/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const galleryListEl = document.querySelector('.js-gallery');

// Створення li
const listItemEl = document.createElement('li');

listItemEl.classList.add('gallery-item');

// Створення a
const listLinkEl = document.createElement('a');

listLinkEl.href = '#';

listItemEl.append(listLinkEl);

// Створення img
const listImgEl = document.createElement('img');

listImgEl.src = 'https://picsum.photos/id/237/200/300';
listImgEl.alt = 'Labrador';

listLinkEl.append(listImgEl);

// Вставка елементів
galleryListEl.append(listItemEl);
