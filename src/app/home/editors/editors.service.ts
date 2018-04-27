import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class EditorService {

  constructor() { }

  loadEditors() {
    const url = 'api/v1/editors';
    return [{
      id: 1,
      name: 'pietro',
      phone: '73202027',
      direction: '#1 street'
    },
    {
      id: 2,
      name: 'pietro2',
      phone: '7320202722',
      direction: '#1 street22'
    }];
  }

  getEditor() {
    return {
      id: 1,
      name: 'pietro',
      phone: '73202027',
      direction: '#1 street'
    };
  }

  createEditor() {

  }

  saveEditor(data: any) {
  }

  deleteEditor() {

  }
}
