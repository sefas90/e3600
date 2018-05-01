import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class EditorService {

  constructor(public http: HttpClient) { }

  loadEditors(): Observable<any> {
    const url = 'http://e3600.test/api/v1/editor';
    return this.http.get(url);
  }

  getEditor(id): Observable<any> {
    const url = 'http://e3600.test/api/v1/editor/' + id;
    return this.http.get(url);
  }

  createEditor() {

  }

  saveEditor(data: any) {
  }

  deleteEditor() {

  }
}
