import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Sale } from './sale';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class SaleService {
  private url = 'http://e3600.test/api/v1/sales/';
  constructor(public http: HttpClient) {
  }

  loadSales(): Observable<any> {
    return this.http.get(this.url);
  }

  getSale(id): Observable<any> {
    return this.http.get(this.url + id);
  }

  createSale(data: Sale): Observable<any> {
    return this.http.post(this.url, data);
  }

  editSale(data: Sale, id): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  deleteSale(id): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
