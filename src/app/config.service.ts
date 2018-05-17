import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConfigService {

  private _url = 'config.json';
  config: any;

  constructor(private http: HttpClient) {
  }

  load() {
    return this.http
      .get(this._url)
      .map((config: Response) => {
        this.config = config.json();
      })
      .catch(this.handleError);
  }
  private handleError(error: Error) {
    return Observable.throw(error);
  }
}
