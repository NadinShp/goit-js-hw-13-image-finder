import apiService from '../js/apiService';

export default class PhotoPagination {
    constructor() {
        this.searchPhoto = ' ';
        this.page = 1;
        this.total_page = '';
    }
    fetchPhotos() {
        // console.log(this);
        return apiService.requestPath(this.searchPhoto, this.page)
            .then(data => {
                this.total_page = data.totalHits;
                this.incrementPage();

                return data.hits;
            }).catch(error => console.log('ERROR', error));
    }
    get query() {
        return this.searchPhoto;
    }
    set query(newQuery) {
        this.searchPhoto = newQuery;
    }
    incrementPage() {
        if (this.page === this.total_page) return;
        this.page += 1;
    }
    get totalPage() {
        return this.total_page;
    }
    set totalPage(newTotalPage) {
        this.total_page = newTotalPage;
    }
    resetPage() {
        this.page = 1;
    }
}

