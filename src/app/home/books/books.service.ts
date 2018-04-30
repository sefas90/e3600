import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class BooksService {

  constructor(public http: HttpClient) { }

  loadBooks(): Observable<any> {
    const url = 'http://e3600.test/api/v1/book';
    return this.http.get(url);
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
