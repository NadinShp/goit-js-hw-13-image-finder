import apiService from '../js/apiService';
import { alert, error, success, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import {Stack} from '@pnotify/core';
const { defaults } = require('@pnotify/core');
defaults.styling = 'material';
defaults.icons = 'material';

export default class PhotoPagination {
    #arrayPhotos = [];
    constructor() {
        this.searchPhoto = ' ';
        this.page = 1;
        this.total_page = '';
        // this.array = [];
    }
    fetchPhotos() {
        console.log(this);
        return apiService.requestPath(this.searchPhoto, this.page)
            .then(data => {
                this.total_page = data.totalHits;
                this.incrementPage();

                  defaultModules.set(PNotifyMobile, {});
                  success({
                      text: 'Images loaded success!',
                stack: new Stack({
                dir1: 'up', dir2: 'left',
                    firstpos1: 25, firstpos2: 25
                  })
                });

                return data.hits;
            }).catch(error => {
                console.log('ERROR', error);
                defaultModules.set(PNotifyMobile, {});
                error({
                text: 'Error loading images!',
                stack: new Stack({
                dir1: 'up', dir2: 'left', // Position from the top left corner.
                firstpos1: 25, firstpos2: 25 // 90px from the top, 90px from the left.
  })
});
            });
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
    // get arrayPhoto() {
    //     return this.array;
    // }
    // set arrayPhoto(data) {
    //     this.arrayPhoto.push(data);
    // }
}
