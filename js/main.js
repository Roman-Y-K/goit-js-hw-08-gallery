import gallery from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const lightBoxRef = document.querySelector('.js-lightbox');
const overlayRef = document.querySelector('.lightbox__overlay');
const backdropImageRef = document.querySelector('.lightbox__image');
const btnCloseRef = document.querySelector('.lightbox__button');




galleryRef.insertAdjacentHTML('afterbegin', createGallary(gallery));


galleryRef.addEventListener('click', onOpenModal);
btnCloseRef.addEventListener('click', onCloseModal);
overlayRef.addEventListener('click', onOverlayClick);



function createGallary(array) {

   const gallaryList =  array.reduce((string, { preview, original, description }) => string + `<li class="gallery__item"><a
    class="gallery__link"
    href="${original}"
  > <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    /> </a>
</li>`, "");
    return gallaryList;
};

 function onOpenModal (event) {
     event.preventDefault();
     if (event.target.nodeName !== 'IMG') {
         return
     };
     
     const bigImg = event.target.dataset.source;

     window.addEventListener('keydown', onEscapePress);

     lightBoxRef.classList.add('is-open');
          
     backdropImageRef.src = bigImg;
     
};

function onCloseModal() {
    window.removeEventListener('keydown', onEscapePress);
    lightBoxRef.classList.remove('is-open');
    backdropImageRef.src = '';
};

function onOverlayClick(event) {
    if (event.target === event.currentTarget) {
       onCloseModal();
    }
};

function onEscapePress (event) {
    if (event.code === 'Escape') {
        onCloseModal();
    }
};
    


