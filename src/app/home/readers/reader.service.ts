import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Reader } from './reader';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class ReaderService {
  private url = 'http://e3600.test/api/v1/reader/';
  constructor(public http: HttpClient) { }

  loadReaders(): Observable<any> {
    return this.http.get(this.url);
  }

  getReader(id): Observable<any> {
    return this.http.get(this.url + id);
  }

  viewReader(id): Observable<any> {
    return this.http.get('http://e3600.test/api/v1/viewReader/' + id);
  }

  createReader(data: Reader): Observable<any> {
    return this.http.post(this.url, data);
  }

  editReader(data: Reader, id): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  deleteReader(id): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
