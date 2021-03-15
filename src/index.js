import './styles.css';
import PhotoPagination from './photoPagination/index';
import photoCard from './templates/photoCard.hbs';
import createMurkupHtml from './js/murkup-html';

createMurkupHtml();

const formRef = document.querySelector(".search-form");
const buttonRef = document.querySelector(".btn");
const galleryRef = document.querySelector(".gallery");

const photoPagination = new PhotoPagination();

formRef.addEventListener('submit', onSearch);
buttonRef.addEventListener('click', loadMore);
let id = 0;
let height;

function onSearch(event) {
    event.preventDefault();
    photoPagination.query = event.currentTarget.elements.query.value;
    photoPagination.resetPage();
    height = '';
    clearTimeout(id);
    // console.log(height);
    photoPagination.fetchPhotos().then(data => {
        cleanContainer();
        appendPhotosMurkup(data);
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
