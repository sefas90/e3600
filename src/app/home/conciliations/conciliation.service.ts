import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Conciliation } from './conciliation';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class ConciliationService {
  private url = 'http://e3600.test/api/v1/conciliation/';
  constructor(public http: HttpClient) {
  }

  loadConciliations(): Observable<any> {
    return this.http.get(this.url);
  }

  getConciliation(code): Observable<any> {
    return this.http.get(this.url + code);
  }

  createConciliation(data: Conciliation): Observable<any> {
    return this.http.post(this.url, data);
  }

  editConciliation(data: Conciliation, id): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  deleteConciliation(id): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
