import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const createGaleryItems = createGalery(galleryItems)

galleryContainer.insertAdjacentHTML("beforeend", createGaleryItems);

function createGalery(evt) {
    return evt
        .map(({preview, original, description}) => {
            return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
            </a>`
        })
        .join('')
}

let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

console.log(lightbox);