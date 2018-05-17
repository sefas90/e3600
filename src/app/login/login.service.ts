import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  private _url = '/auth/';
  config: any;
  constructor(private http: HttpClient,
              private configService: ConfigService) {
    this.config = configService.config;
  }

  doLogin(data): Observable<any> {
    const url = this.config.endpoint + this._url;
    return this.http.post(url, data);
  }

}
