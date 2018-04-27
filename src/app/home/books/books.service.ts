import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class BooksService {

  constructor() { }

  loadBooks() {
    const url = 'api/v1/books';
    return [{
      id: 1,
      title: 'tit1',
      isbn: '123456',
      stock: '2',
      price: '50',
      id_manuscript: '1',
      id_gender: '1',
      id_author: '1'
    },
      {
        id: 2,
        title: 'tit222',
        isbn: '123456222',
        stock: '222',
        price: '5022',
        id_manuscript: '2',
        id_gender: '2',
        id_author: '2'
      }];
  }

  getBook() {
    return {
      id: 1,
      title: 'tit1',
      isbn: '123456',
      stock: '2',
      price: '50',
      id_manuscript: '1',
      id_gender: '1',
      id_author: '1'
    };
  }

  createBook() {

  }

  saveBook(data: '') {
  }

  deleteBook() {

  }
}
