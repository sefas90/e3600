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
  private url = 'http://e3600.test/api/v1/author/';
  constructor(public http: HttpClient) {
  }

  loadAuthors(): Observable<any> {
    return this.http.get(this.url);
  }

  getAuthor(id): Observable<any> {
    return this.http.get(this.url + id);
  }

  createAuthor(data: Author): Observable<any> {
    return this.http.post(this.url, data);
  }

  editAuthor(data: Author, id): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  deleteAuthor(id): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
