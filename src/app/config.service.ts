import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class ConfigService {

  private _url = './config.json';
  config: any;

  constructor(private http: HttpClient) {
  }

  load() {
    return new Promise((resolve) => {
      this.http.get(this._url).subscribe(
        config => {
          this.config = config;
          resolve();
        });
    });
  }
}
