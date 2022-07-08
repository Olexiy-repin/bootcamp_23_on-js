'use strict';

const galleryEl = document.querySelector('.js-gallery');
const bannerImgEl = document.querySelector('.banner__img');
const galleryImgEls = document.querySelectorAll('.gallery__img');

const onGalleryImgClick = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const bannerUrl = event.target.dataset.bannerUrl;

  bannerImgEl.src = bannerUrl;
};

galleryEl.addEventListener('click', onGalleryImgClick);

galleryImgEls.forEach(el => {
  el.addEventListener(
    'load',
    event => {
      event.target.classList.add('appear');
    },
    {
      once: true,
    }
  );
});

const addSrcAttrToImg = () => {
  galleryImgEls.forEach(el => {
    el.src = el.dataset.src;
  });
};

const createLazySizesScript = () => {
  const script = document.createElement('script');

  script.src = 'https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js';

  return script;
};

if ('loading' in HTMLImageElement.prototype) {
  console.log('Атрибут loading підтримується');
  addSrcAttrToImg();
} else {
  console.log('Атрибут loading не підтримується');
  document.body.append(createLazySizesScript());
}
