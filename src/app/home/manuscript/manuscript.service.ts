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
    /*const ret = [
      {
        id: 1,
        title: 'recibido',
        author: 'autor',
        gender: 'genero',
        stage: 0
      },
      {
        id: 2,
        title: 'aprobado',
        author: 'autor',
        gender: 'genero',
        stage: 1
      },
      {
        id: 3,
        title: 'rechazado',
        author: 'autor',
        gender: 'genero',
        stage: 2
      },
      {
        id: 4,
        title: 'pendiente',
        author: 'autor',
        gender: 'genero',
        stage: 3
      },
      {
        id: 5,
        title: 'esperando lector',
        author: 'autor',
        gender: 'genero',
        stage: 4
      },
      {
        id: 6,
        title: 'esperando editor',
        author: 'autor',
        gender: 'genero',
        stage: 5
      },
    ];*/
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

  deleteManuscript(id): Observable<any> {
    return this.http.delete(this.url + id);
  }

  sendToReader(id) {
    return this.http.put(this.url, + id);
  }

  sendToEditor(id) {
    return this.http.put(this.url, + id);
  }

  approveManuscript(id) {
    return this.http.put(this.url, + id);
  }

  rejectManuscript(id) {
    return this.http.put(this.url, + id);
  }
}
