import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const img = galleryItems
  .map(
    (galleryItem) => `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
  )
  .join("");
gallery.innerHTML = img;

gallery.addEventListener("click", clickImg);
let instance = null;

function clickImg(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") {
    return;
  }
  const largeImageUrl = target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600">
  `);

  instance.show();
  document.addEventListener("keydown", closeModalOnEscape);
}

function closeModalOnEscape(event) {
  if (event.key === "Escape" && instance) {
    instance.close();
    document.removeEventListener("keydown", closeModalOnEscape);
  }
}
