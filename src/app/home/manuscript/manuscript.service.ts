import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Manuscript } from './manuscript';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class ManuscriptService {
  private url = 'http://e3600.test/api/v1/manuscript/';
  constructor(public http: HttpClient) {
  }

  loadManuscripts(): Observable<any> {
    return this.http.get(this.url);
  }

  loadUnfinishedManuscripts(): Observable<any> {
    return this.http.get(this.url + 'unfinished');
  }

  getManuscript(id) {
    return this.http.get(this.url + id);
  }

  createManuscript(data: Manuscript): Observable<any> {
    return this.http.post(this.url, data);
  }

  editManuscript(data: Manuscript, id): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  updateManuscript(data, id) {
    return this.http.put(this.url + id, data);
  }

  deleteManuscript(id): Observable<any> {
    return this.http.delete(this.url + id);
  }

  sendToReader(data) {
    const url = 'http://e3600.test/api/v1/manuscriptReader';
    return this.http.post(url, data);
  }

  sendToEditor(data) {
    const url = 'http://e3600.test/api/v1/manuscriptEditor';
    return this.http.post(url, data);
  }

  approveManuscript(id) {
    return this.http.put(this.url, + id);
  }

  rejectManuscript(id) {
    return this.http.put(this.url, + id);
  }
}
