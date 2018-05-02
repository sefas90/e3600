import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Editor } from './editor';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class EditorService {
  private url = 'http://e3600.test/api/v1/editor/';
  constructor(public http: HttpClient) { }

  loadEditors(): Observable<any> {
    return this.http.get(this.url);
  }

  getEditor(id): Observable<any> {
    return this.http.get(this.url + id);
  }

  createEditor(data: Editor): Observable<any> {
    return this.http.post(this.url, data);
  }

  editEditor(data: Editor, id): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  deleteEditor(id): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
