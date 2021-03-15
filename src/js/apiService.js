import baseApi from './api';
const { key, url } = baseApi;

const apiService = {
    requestPath(searchPhoto, page) {
        const queryPath = `${url}?image_type=photo&orientation=horizontal&q=${searchPhoto}&page=${page}&per_page=12&key=${key}`;
        return fetch(queryPath).then(result => result.json());
    },
};

export default apiService;
//https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ