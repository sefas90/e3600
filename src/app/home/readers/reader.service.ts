import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class ReaderService {

  constructor(public http: HttpClient) { }

  loadReaders(): Observable<any> {
    const url = 'http://e3600.test/api/v1/reader';
    return this.http.get(url);
  }

  getReader(id): Observable<any> {
    const url = 'http://e3600.test/api/v1/reader/' + id;
    return this.http.get(url);
  }

  createReader() {

  }

  saveReader(data: any) {
  }

  deleteReader() {

  }
}
