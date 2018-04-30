import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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

  getAuthor() {
    return {
      id: 1,
      name: 'pietro',
      lastName: 'Sanjines Angelaccio'
    };
  }

  createAuthor() {

  }

  saveAuthor(data: any) {
  }

  deleteAuthor() {

  }
}
