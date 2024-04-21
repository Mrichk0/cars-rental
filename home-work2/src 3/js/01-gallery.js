import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function markUp(gallery) {
  return gallery
    .map(
      ({ original, preview }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src=${preview}
      data-source="${original}"
      alt="Image description"
    />
  </a>
</div>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", markUp(galleryItems));
gallery.addEventListener("click", onGalleryImgClick);

function onGalleryImgClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"/>`
  );

  onPutDownEscClose(instance);

  instance.show();
}

function onPutDownEscClose(instance) {
  const listener = (e) => {
    if (instance.visible()) {
      if (e.code !== "Escape") {
        return;
      }
      instance.close();
    }
    // document.removeEventListener("keydown", listener);
  };
  document.addEventListener("keydown", listener);
}
