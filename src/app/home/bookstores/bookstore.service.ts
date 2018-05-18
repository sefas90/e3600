import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Bookstore } from './bookstore';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookstoreService {
  private url = 'http://e3600.test/api/v1/bookstore/';
  constructor(public http: HttpClient) { }

  loadBookstores(): Observable<any> {
    return this.http.get(this.url);
  }

  getBookstore(id): Observable<any> {
    return this.http.get(this.url + id);
  }

  viewBookstore(id): Observable<any> {
    return this.http.get('http://e3600.test/api/v1/viewBookstore/' + id);
  }

  createBookstore(data: Bookstore): Observable<any> {
    return this.http.post(this.url, data);
  }

  editBookstore(data: Bookstore, id): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  deleteBookstore(id): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
