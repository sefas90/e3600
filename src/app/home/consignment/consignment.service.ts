import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Consignment } from './consignment';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class ConsignmentService {
  private url = 'http://e3600.test/api/v1/sales/';
  constructor(public http: HttpClient) {
  }

  loadConsignment(): Observable<any> {
    return this.http.get(this.url);
  }

  getConsignment(id): Observable<any> {
    return this.http.get(this.url + id);
  }

  createConsignment(data: Consignment): Observable<any> {
    return this.http.post(this.url, data);
  }

  editConsignment(data: Consignment, id): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  deleteConsignment(id): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
