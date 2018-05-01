import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class GenderService {

  constructor(public http: HttpClient) { }

  loadGenders(): Observable<any> {
    const url = 'http://e3600.test/api/v1/gender';
    return this.http.get(url);
  }

  getGender(id): Observable<any> {
    const url = 'http://e3600.test/api/v1/gender/' + id;
    return this.http.get(url);
  }

  createGender() {

  }

  saveGender(data: any) {
  }

  deleteGender(id) {

  }
}
