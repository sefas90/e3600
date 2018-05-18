import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './book';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class BooksService {
  private url = 'http://e3600.test/api/v1/book/';
  constructor(public http: HttpClient) { }

  loadBooks(): Observable<any> {
    return this.http.get(this.url);
  }

  lowStockBooks(): Observable<any> {
    return this.http.get('http://e3600.test/api/v1/lowBooks');
  }

  getBook(id): Observable<any> {
    return this.http.get(this.url + id);
  }

  createBook(data: Book): Observable<any> {
    return this.http.post(this.url, data);
  }

  editBook(data: Book, id): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  deleteBook(id): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
