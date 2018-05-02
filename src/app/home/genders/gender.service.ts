import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Gender } from './gender';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class GenderService {
  private url = 'http://e3600.test/api/v1/gender/';
  constructor(public http: HttpClient) { }

  loadGenders(): Observable<any> {
    return this.http.get(this.url);
  }

  getGender(id): Observable<any> {
    return this.http.get(this.url + id);
  }

  createGender(data: Gender) {
    return this.http.post(this.url, data);
  }

  editGender(data: Gender, id) {
    return this.http.put(this.url + id, data);
  }

  deleteGender(id) {
    return this.http.delete(this.url + id);
  }
}
