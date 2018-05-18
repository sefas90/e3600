import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../config.service';

@Injectable()
export class HttpClientService {

  config: any;
  urlBase: string;

  constructor(private http: HttpClient,
              private configSrvc: ConfigService) {
    this.config = configSrvc.config;
    this.urlBase = this.config.endpoint;
  }

  get(url) {
    return this.http.get(this.urlBase + url).timeout(this.config.httpTimeout);
  }

  post(url, data) {
        return this.http.post(this.urlBase + url, data).timeout(this.config.httpTimeout);
  }

  put(url, data) {
    return this.http.put(this.urlBase + url, data).timeout(this.config.httpTimeout);
  }

  delete(url) {
    return this.http.delete(this.urlBase + url).timeout(this.config.httpTimeout);
  }
}
