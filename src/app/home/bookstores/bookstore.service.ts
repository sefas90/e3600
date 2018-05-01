import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookstoreService {

  constructor(public http: HttpClient) { }

  loadBookstores(): Observable<any> {
    const url = 'http://e3600.test/api/v1/bookstore';
    return this.http.get(url);
  }

  getBookstore(id): Observable<any> {
    const url = 'http://e3600.test/api/v1/bookstore/' + id;
    return this.http.get(url);
  }

  createBookstore() {

  }

  saveBookstore(data: any) {
  }

  deleteBookstore() {

  }
}
