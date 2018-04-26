import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class ReaderService {

  constructor() { }

  loadReaders() {
    const url = 'api/v1/genders';
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

  getReader() {
    return {
      id: 1,
      name: 'pietro',
      phone: '73202027',
      direction: '#1 street'
    };
  }

  createReader() {

  }

  saveReader(data: any) {
  }

  deleteReader() {

  }
}
