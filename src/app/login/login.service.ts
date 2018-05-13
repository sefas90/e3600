import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  private url = 'http://e3600.test/api/v1/auth/';

  constructor(private http: HttpClient) { }

  doLogin(data): Observable<any> {
    return this.http.post(this.url, data);
  }

}
