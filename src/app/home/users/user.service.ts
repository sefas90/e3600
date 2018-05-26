import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  private url = 'http://e3600.test/api/v1/user/';
  constructor(public http: HttpClient) {
  }

  loadUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  getUser(code): Observable<any> {
    return this.http.get(this.url + code);
  }

  createUser(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  editUser(data: any, id): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
