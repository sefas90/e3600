import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  private url = 'http://e3600.test/api/v1/auth/';
  config: any;
  constructor(private http: HttpClient,
              private configService: ConfigService) {
    this.config = configService.config;
    console.log(this.config);
  }

  doLogin(data): Observable<any> {
    return this.http.post(this.url, data);
  }

}
