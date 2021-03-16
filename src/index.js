import './styles.css';
import PhotoPagination from './photoPagination/index';
import photoCard from './templates/photoCard.hbs';
import createMurkupHtml from './js/murkup-html';
import { alert, error, success, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import originImgCard from './templates/originImgCard.hbs';
const { defaults } = require('@pnotify/core');
defaults.styling = 'material';
defaults.icons = 'material';

createMurkupHtml();

const formRef = document.querySelector(".search-form");
const buttonRef = document.querySelector(".btn");
const galleryRef = document.querySelector(".gallery");
// const backdropRef = document.querySelector(".backdrop");

const photoPagination = new PhotoPagination();

formRef.addEventListener('submit', onSearch);
buttonRef.addEventListener('click', loadMore);
// galleryRef.addEventListener('click', clickImageHandler);

let id = 0;
let height;
// const arrayPhoto = [];

function onSearch(event) {
    event.preventDefault();
    photoPagination.query = event.currentTarget.elements.query.value;
    photoPagination.resetPage();
    clearTimeout(id);
    photoPagination.fetchPhotos().then(data => {
        cleanContainer();
        appendPhotosMurkup(data);
        // createaArrayAllPhoto(data);
    });
}
async function loadMore() {
    height = galleryRef.clientHeight;
    await photoPagination.fetchPhotos().then(data => appendPhotosMurkup(data));
    toScroll();
    // console.log(height);
}
function toScroll() {
    let totalHeight = height + 80;
    id = setTimeout(() => {
        window.scrollTo(0, totalHeight);
    }, 500)
}

function appendPhotosMurkup(array) {
    const murkup = array.map(element => photoCard(element));
    galleryRef.insertAdjacentHTML('beforeend', murkup);
}
function cleanContainer() {
    galleryRef.innerHTML = ' ';
}


// function clickImageHandler(event) {
//     event.preventDefault();
//     const index = event.target.attributes.index.nodeValue;
//     // console.dir(a);
//     if (event.target.nodeName !== "IMG") return;
//     backdropRef.classList.add("is-open");
//     console.log(arrayPhoto);
// }
// function createaArrayAllPhoto(data) {
//      const murkupPhoto = data.map(element =>photoAdapterArray(element));
//     console.log(murkupPhoto);
//     return murkupPhoto;
// }
// const photoAdapterArray = ({ id, largeImageURL }) => ({
//     src: `${largeImageURL}`,
//     id: `${id}`,
// });