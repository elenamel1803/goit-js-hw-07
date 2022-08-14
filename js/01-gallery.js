import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems)

const galleryContainer = document.querySelector('.gallery')
const createGaleryItems = createGalery(galleryItems)

galleryContainer.insertAdjacentHTML("beforeend", createGaleryItems);

galleryContainer.addEventListener('click', onGalleryContainerCklick)

function createGalery(evt) {
    return evt
        .map(({preview, original, description}) => {
            return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img 
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>`
        })
        .join('')
}

function onGalleryContainerCklick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    console.log(evt.target)

    const originalImage = evt.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
        <img src="${originalImage}" width="800" height="600">
    `)
    instance.show()

    galleryContainer.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
			instance.close()
		}
	})
}