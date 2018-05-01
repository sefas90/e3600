import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Author } from './author';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthorService {

  constructor(public http: HttpClient) {

  }

  loadAuthors(): Observable<any> {
    const url = 'http://e3600.test/api/v1/author';
    return this.http.get(url);
  }

  getAuthor(id): Observable<any> {
    const url = 'http://e3600.test/api/v1/author/' + id;
    return this.http.get(url);
  }

  createAuthor(data: any): Observable<any> {
    const url = 'http://e3600.test/api/v1/author/';
    console.log(data);
    return this.http.post(url, data);
  }

  saveAuthor(data: any): Observable<any> {
    const url = 'http://e3600.test/api/v1/author/';
    console.log(data);
    return this.http.post(url, data);
  }

  deleteAuthor() {

  }
}
